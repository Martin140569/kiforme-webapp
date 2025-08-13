export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Only POST" });

  try {
    const token = process.env.METAAPI_TOKEN;
    const accountId = process.env.METAAPI_ACCOUNT_ID;
    const region = process.env.METAAPI_REGION || "new-york";

    if (!token || !accountId) {
      return res.status(500).json({ error: "METAAPI_TOKEN oder METAAPI_ACCOUNT_ID nicht gesetzt" });
    }

    const { actionType, positionId, symbol, volume, takeProfit, stopLoss } = req.body || {};
    if (!actionType) return res.status(400).json({ error: "actionType fehlt" });

    const payload = { actionType };
    if (positionId) payload.positionId = String(positionId);
    if (symbol) payload.symbol = symbol;
    if (typeof volume === "number") payload.volume = volume;
    if (typeof takeProfit === "number") payload.takeProfit = takeProfit;
    if (typeof stopLoss === "number") payload.stopLoss = stopLoss;

    const base = `https://mt-client-api-v1.${region}.agiliumtrade.ai`;
    const url = `${base}/users/current/accounts/${accountId}/trade`;

    const r = await fetch(url, {
      method: "POST",
      headers: {
        "auth-token": token,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const txt = await r.text();
    if (!r.ok) return res.status(r.status).send(txt);

    const data = JSON.parse(txt);
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: e.message || String(e) });
  }
}
