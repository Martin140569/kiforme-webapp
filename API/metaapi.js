import fetch from "node-fetch";

export default async function handler(req, res) {
  const token = process.env.METAAPI_TOKEN;
  const accountId = process.env.METAAPI_ACCOUNT_ID;

  if (!token || !accountId) {
    return res.status(500).json({ error: "Fehlende API-Umgebungsvariablen" });
  }

  try {
    // Balance
    const balanceRes = await fetch(`https://mt-provisioning-api-v1.agiliumtrade.agiliumtrade.ai/users/current/accounts/${accountId}/balance`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const balanceData = await balanceRes.json();

    // Trades
    const tradesRes = await fetch(`https://mt-client-api-v1.agiliumtrade.agiliumtrade.ai/users/current/accounts/${accountId}/positions`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const tradesData = await tradesRes.json();

    res.status(200).json({
      balance: balanceData.balance || 0,
      trades: tradesData.map(t => ({
        id: t.id,
        symbol: t.symbol,
        volume: t.volume,
        type: t.type,
        sl: t.sl,
        tp: t.tp,
        trader: t.magic || "KI"
      }))
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
