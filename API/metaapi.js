// api/metaapi.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const token = process.env.METAAPI_TOKEN;
    if (!token) {
      return res.status(500).json({ error: 'METAAPI_TOKEN not set in Environment Variables' });
    }

    // 🔹 Deine MetaAPI Account-ID hier eintragen:
    const accountId = "71e5fedf-0a6f-47c3-a1d7-fcbd423576c8"; // <- bitte ersetzen

    const response = await fetch(`https://mt-client-api-v1.new-york.agiliumtrade.ai/users/current/accounts/${accountId}/account-information`, {
      headers: {
        'auth-token': token,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({ error: text });
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
