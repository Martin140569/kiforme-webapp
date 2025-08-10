const axios = require("axios");

module.exports = async (req, res) => {
  const token = process.env.METAAPI_TOKEN;
  const accountId = process.env.ACCOUNT_ID;

  if (!token || !accountId) {
    return res.status(500).json({ error: "MetaAPI Zugangsdaten fehlen" });
  }

  try {
    // Account-Daten holen
    const accountRes = await axios.get(`https://mt-client-api-v1.new-york.agiliumtrade.ai/users/current/accounts/${accountId}/account-information`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    // Trades holen
    const tradesRes = await axios.get(`https://mt-client-api-v1.new-york.agiliumtrade.ai/users/current/accounts/${accountId}/open-positions`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    const trades = tradesRes.data.map(t => ({
      id: t.id,
      symbol: t.symbol,
      lots: t.volume,
      type: t.type,
      sl: t.stopLoss,
      tp: t.takeProfit
    }));

    res.status(200).json({
      balance: accountRes.data.balance,
      trades
    });

  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "MetaAPI Anfrage fehlgeschlagen" });
  }
};
