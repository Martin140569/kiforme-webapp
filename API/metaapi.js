import axios from "axios";

export default async function handler(req, res) {
  const token = process.env.METAAPI_TOKEN;
  const accountId = process.env.METAAPI_ACCOUNT_ID;

  if (!token || !accountId) {
    console.error("❌ Environment Variables fehlen!");
    return res.status(500).json({ error: "Server config error" });
  }

  try {
    console.log("🔄 MetaAPI Request gestartet...");

    // 1️⃣ Kontostand abrufen
    const balanceResponse = await axios.get(
      `https://metaapi.cloud/metaapi/v1/accounts/${accountId}/accountInformation`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    console.log("✅ Balance Response:", balanceResponse.data);

    // 2️⃣ Offene Trades abrufen
    const positionsResponse = await axios.get(
      `https://metaapi.cloud/metaapi/v1/accounts/${accountId}/positions`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    console.log("✅ Positions Response:", positionsResponse.data);

    // 3️⃣ Daten zusammenführen
    const data = {
      balance: balanceResponse.data?.balance ?? 0,
      equity: balanceResponse.data?.equity ?? 0,
      margin: balanceResponse.data?.margin ?? 0,
      positions: positionsResponse.data || [],
    };

    return res.status(200).json(data);

  } catch (error) {
    console.error("❌ Fehler bei MetaAPI-Anfrage:", error.response?.data || error.message);
    return res.status(500).json({ error: "MetaAPI request failed" });
  }
}
