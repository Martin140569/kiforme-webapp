import fetch from 'node-fetch';

export default async function handler(req, res) {
  const token = process.env.METAAPI_TOKEN; // in Vercel → Environment Variables
  const accountId = process.env.METAAPI_ACCOUNT_ID; // in Vercel → Environment Variables

  if (!token || !accountId) {
    return res.status(400).json({ error: 'Token oder Account-ID fehlt' });
  }

  try {
    const response = await fetch(`https://metaapi.cloud/v1/accounts/${accountId}/balance`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!response.ok) {
      throw new Error(`MetaAPI Error: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
