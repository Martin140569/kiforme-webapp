import axios from "axios";

export default async function handler(req, res) {
  try {
    const accountId = process.env.METAAPI_ACCOUNT_ID;
    const token = process.env.METAAPI_TOKEN;

    const { data } = await axios.get(
      `https://mt-provisioning-api-v1.agiliumtrade.agiliumtrade.ai/users/current/accounts/${accountId}/metrics`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    res.status(200).json({ balance: data.balance, equity: data.equity });
  } catch (error) {
    console.error("MetaAPI Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Fehler beim Abrufen des Kontostands" });
  }
}
