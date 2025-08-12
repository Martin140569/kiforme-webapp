export default async function handler(req, res) {
  const token = process.env.METAAPI_TOKEN;
  const type = req.query.type;

  try {
    if (type === 'balance') {
      // API-Aufruf für Kontostand
      const balanceRes = await fetch(`https://api.metaapi.cloud/v1/accounts/ACCOUNT_ID/balance`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await balanceRes.json();
      return res.status(200).json({ balance: data.balance });
    }

    if (type === 'trades') {
      // API-Aufruf für offene Trades
      const tradesRes = await fetch(`https://api.metaapi.cloud/v1/accounts/ACCOUNT_ID/positions`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await tradesRes.json();
      return res.status(200).json({ trades: data });
    }

    res.status(400).json({ error: 'Ungültiger Typ' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
