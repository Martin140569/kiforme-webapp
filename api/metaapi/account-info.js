export default async function handler(req, res) {
  try {
    const token = process.env.METAAPI_TOKEN;
    const accountId = process.env.METAAPI_ACCOUNT_ID;
    const region = process.env.METAAPI_REGION || "new-york";

    if (!token || !accountId) {
      return res.status(500).json({ error: "METAAPI_TOKEN oder METAAPI_ACCOUNT_ID nicht gesetzt" });
    }

    const base = `https://mt-client-api-v1.${region}.agiliumtrade.ai`;
    const url = `${base}/users/current/accounts/${accountId}/account-information`;

    const r = await fetch(url, { headers: { "auth-token": token, "Accept": "application/json" } });
    const txt = await r.text();
    if (!r.ok) return res.status(r.status).send(txt);

    const data = JSON.parse(txt);
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: e.message || String(e) });
  }
}
