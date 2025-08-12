// api/metaapi.js
const fs = require("fs");
const path = require("path");

const SETTINGS_FILE = path.join(process.cwd(), "settings.json");

// read/write simple settings (ephemeral on serverless; ok for small uses)
function readSettings() {
  try {
    if (fs.existsSync(SETTINGS_FILE)) {
      const txt = fs.readFileSync(SETTINGS_FILE, "utf8");
      return JSON.parse(txt);
    }
  } catch (e) {
    console.warn("settings read error:", e.message);
  }
  return { mode: "Hybrid", risk: 1.0 };
}
function writeSettings(obj) {
  try {
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(obj), "utf8");
    return true;
  } catch (e) {
    console.warn("settings write error:", e.message);
    return false;
  }
}

module.exports = async (req, res) => {
  const token = process.env.METAAPI_TOKEN;
  const accountId = process.env.METAAPI_ACCOUNT_ID;

  if (!token || !accountId) {
    return res
      .status(500)
      .json({ error: "Missing METAAPI_TOKEN or METAAPI_ACCOUNT_ID in environment variables" });
  }

  // Helper to fetch and parse text on error
  async function safeFetch(url, options = {}) {
    const r = await fetch(url, options);
    const text = await r.text();
    let json = null;
    try { json = JSON.parse(text); } catch (e) { /* not JSON */ }
    return { ok: r.ok, status: r.status, text, json };
  }

  // POST: update settings or close trade
  if (req.method === "POST") {
    try {
      const body = req.body && Object.keys(req.body).length ? req.body : await new Promise(r => {
        let d = "";
        req.on("data", c => (d += c));
        req.on("end", () => r(d ? JSON.parse(d) : {}));
      });

      const settings = readSettings();

      // update mode/risk
      if (body.mode) {
        if (body.mode === "Hybrid" || body.mode === "Vollautomatik") settings.mode = body.mode;
      }
      if (body.risk !== undefined) {
        const rv = Number(body.risk);
        if (!isNaN(rv) && rv > 0) settings.risk = rv;
      }

      // close trade action
      if (body.action === "close" && body.tradeId) {
        const tradeId = body.tradeId;
        // MetaAPI close endpoint (may vary by provider)
        const closeUrl = `https://mt-client-api-v1.new-york.agiliumtrade.agiliumtrade.ai/users/current/accounts/${accountId}/positions/${tradeId}/close`;
        const closeRes = await safeFetch(closeUrl, {
          method: "POST",
          headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
          body: JSON.stringify({})
        });
        if (!closeRes.ok) {
          return res.status(closeRes.status).json({ error: closeRes.text || "Close failed" });
        }
        // return updated result
        const wrote = writeSettings(settings);
        return res.status(200).json({ result: closeRes.json ?? closeRes.text, settings, wrote });
      }

      writeSettings(settings);
      return res.status(200).json(settings);
    } catch (err) {
      console.error("POST /api/metaapi error:", err);
      return res.status(500).json({ error: "Failed to process POST", detail: err.message });
    }
  }

  // GET: return account info + trades + settings
  try {
    // 1) account info
    const accUrl = `https://mt-client-api-v1.new-york.agiliumtrade.agiliumtrade.ai/users/current/accounts/${accountId}/account-information`;
    const acc = await safeFetch(accUrl, {
      headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" }
    });
    if (!acc.ok) {
      console.error("account-information error:", acc.status, acc.text);
      return res.status(acc.status).json({ error: acc.text || "Account info fetch failed" });
    }

    // 2) open trades (positions)
    const tradesUrl = `https://mt-client-api-v1.new-york.agiliumtrade.agiliumtrade.ai/users/current/accounts/${accountId}/open-trades`;
    const tradesRes = await safeFetch(tradesUrl, {
      headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" }
    });

    let trades = [];
    if (tradesRes.ok && tradesRes.json) {
      // normalize fields
      trades = Array.isArray(tradesRes.json)
        ? tradesRes.json.map(t => ({
            id: t.id ?? t.ticket ?? null,
            symbol: t.symbol ?? t.instrument ?? "N/A",
            side: (t.type === "ORDER_TYPE_BUY" || (t.side && t.side.toLowerCase()==="buy")) ? "Buy" : "Sell",
            volume: t.volume ?? t.lots ?? 0,
            sl: t.sl ?? t.stopLoss ?? null,
            tp: t.tp ?? t.takeProfit ?? null,
            profit: t.profit ?? t.unrealizedProfit ?? 0,
            trader: t.comment ?? t.trader ?? "KI"
          }))
        : [];
    } else {
      console.warn("trades fetch returned non-ok:", tradesRes.status);
    }

    const settings = readSettings();

    return res.status(200).json({
      account: {
        balance: acc.json?.balance ?? null,
        equity: acc.json?.equity ?? null,
        margin: acc.json?.margin ?? null,
        currency: acc.json?.currency ?? "USD"
      },
      trades,
      settings
    });
  } catch (err) {
    console.error("GET /api/metaapi error:", err);
    return res.status(500).json({ error: "MetaAPI request failed", detail: err.message });
  }
};
