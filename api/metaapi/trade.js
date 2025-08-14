import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Nur POST erlaubt" });
  }

  try {
    const accountId = process.env.METAAPI_ACCOUNT_ID;
    const token = process.env.METAAPI_TOKEN;
    const { positionId } = req.body;

    await axios.post(
      `https://mt-client-api-v1.agiliumtrade.agiliumtrade.ai/users/current/accounts/${accountId}/positions/${positionId}/close`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Trade Close Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Fehler beim Schließen der Position" });
  }
}
