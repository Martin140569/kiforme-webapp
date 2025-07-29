const axios = require("axios");

module.exports = async (req, res) => {
  const METAAPI_TOKEN = process.env.METAAPI_TOKEN;

  try {
    const response = await axios.get(
      "https://mt-provisioning-api-v1.agiliumtrade.agiliumtrade.ai/users/current/accounts",
      {
        headers: {
          Authorization: `Bearer ${METAAPI_TOKEN}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      error: "MetaAPI request failed",
      details: error.message,
    });
  }
};
