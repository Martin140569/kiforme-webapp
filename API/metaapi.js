// api/metaapi.js
import fetch from "node-fetch";
import fs from "fs";
import path from "path";

const settingsPath = path.join(process.cwd(), "settings.json");

// simple settings read/write (NOTE: serverless storage is ephemeral across cold starts / redeploys)
function readSettings() {
  try {
    if (fs.existsSync(settingsPath)) {
      return JSON.parse(fs.readFileSync(settingsPath, "utf8"));
    }
  } catch (e) {
    console.warn("Could not read settings:", e.message);
  }
  // defaults
  return { mode: "Hybrid", risk: 1.0 };
}

function writeSettings(obj) {
  try {
    fs.writeFileSync(settingsPath, JSON.stringify(obj));
    return true;
  } catch (e) {
    console.warn("Could not write settings:", e.message);
    return false;
  }
}

export default async function handler(req, res) {
  const token = process.env.METAAPI_TOKEN;
  const accountId = process.env.METAAPI_ACCOUNT_ID;

  if (!token || !accountId) {
    return res.status(500).json({ error: "Missing METAAPI_TOKEN or METAAPI_ACCOUNT_ID in environment variables" });
  }

  // POST -> update settings (mode or risk)
  if (req.method === "POST") {
    try {
      const body = req.body || (await new Promise(r => {
        let d = "";
        req.on("data", c => (d += c));
        req.on("end", () => r(JSON.parse(d || "{}")));
      }));
      const settings = readSettings();
      if (body.mode && (body.mode === "Hybrid" || body.mode === "Vollautomatik")) settings.mode = body.mode;
      if (body.risk !== undefined) {
        const rVal = Number(body.risk);
        if (!isNaN(rVal) && rVal > 0) settings.risk = rVal;
      }
      writeSettings(settings);
      return res.status(200).json(settings);
    } catch (err) {
      console.error("POST settings error:", err);
      return res.status(500).json({ error: "Failed to update settings" });
    }
  }

  // GET -> fetch account info + open trades + return settings
  try {
    // Account info (balance, equity, currency, margin)
    const accUrl = `https://mt-client-api-v1.new-york.agiliumtrade.agiliumtrade.ai/users/current/accounts/${accountId}/account-information`;
    const accResp = await fetch(accUrl, {
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
    });

    if (!accResp.ok) {
      const txt = await accResp.text();
      console.error("Account info error:", accResp.status, txt);
      return res.status(accResp.status).json({ error: txt || "MetaAPI account info failed" });
    }
    const accountData = await accResp.json();

    // Open trades / positions
    const tradesUrl = `https://mt-client-api-v1.new-york.agiliumtrade.agiliumtrade.ai/users/current/accounts/${accountId}/open-trades`;
    const tradesResp = await fetch(tradesUrl, {
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
    });

    let tradesData = [];
    if (tradesResp.ok) {
      tradesData = await tradesResp.json();
    } else {
      const txt = await tradesResp.text();
      console.warn("Trades fetch warning:", tradesResp.status, txt);
      // leave tradesData = []
    }

    const settings = readSettings();

    // normalize trades a bit (safe fields)
    const trades = (Array.isArray(tradesData) ? tradesData : []).map(t => ({
      id: t.id ?? t.ticket ?? null,
      symbol: t.symbol ?? t.instrument ?? t.symbolName ?? "N/A",
      side: t.type === "ORDER_TYPE_BUY" || t.direction === "buy" || t.side === "Buy" ? "Buy" : (t.type === "ORDER_TYPE_SELL" || t.direction === "sell" || t.side === "Sell" ? "Sell" : (t.side ?? "N/A")),
      volume: t.volume ?? t.lots ?? t.size ?? 0,
      sl: t.sl ?? t.stopLoss ?? null,
      tp: t.tp ?? t.takeProfit ?? null,
      profit: t.profit ?? t.unrealizedProfit ?? 0,
      trader: t.comment ?? t.trader ?? "KI"
    }));

    return res.status(200).json({
      account: {
        balance: accountData.balance ?? null,
        equity: accountData.equity ?? null,
        margin: accountData.margin ?? null,
        currency: accountData.currency ?? accountData.accountCurrency ?? "USD"
      },
      trades,
      settings
    });
  } catch (err) {
    console.error("MetaAPI fetch error:", err);
    return res.status(500).json({ error: "MetaAPI request failed", detail: err.message });
  }
}
