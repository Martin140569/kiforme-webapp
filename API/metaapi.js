const fetch = require("node-fetch");

module.exports = async (req, res) => {
  try {
    const accountId = process.env.METAAPI_ACCOUNT_ID;
    const token = process.env.METAAPI_TOKEN;

    if (!accountId || !token) {
      return res.status(500).json({ error: "METAAPI_TOKEN oder METAAPI_ACCOUNT_ID fehlt in den Umgebungsvariablen." });
    }

    const url = `https://metaapi.cloud/api/v1/accounts/${accountId}/balance`;
    const response = await fetch(url, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: errText });
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
