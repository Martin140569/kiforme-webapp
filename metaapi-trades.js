// api/metaapi-trades.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const token = process.env.METAAPI_TOKEN;
    const accountId = process.env.METAAPI_ACCOUNT_ID;

    if (!token || !accountId) {
      return res.status(500).json({ error: 'METAAPI_TOKEN oder METAAPI_ACCOUNT_ID nicht gesetzt' });
    }

    const url = `https://mt-client-api-v1.new-york.agiliumtrade.ai/users/current/accounts/${accountId}/positions`;

    const response = await fetch(url, {
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
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
