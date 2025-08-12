// api/metaapi.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const token = process.env.METAAPI_TOKEN; // ✅ Token aus Vercel-Umgebungsvariable
    const accountId = process.env.METAAPI_ACCOUNT_ID; // ✅ Account ID aus Vercel-Variable

    const response = await fetch(`https://mt-client-api-v1.new-york.agiliumtrade.ai/users/current/accounts/${accountId}/positions`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`MetaAPI Error: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
