const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/proxy', async (req, res) => {
  try {
    const { url, method, headers, data } = req.body;
    const response = await axios({ url, method, headers, data });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

exports.api = functions.https.onRequest(app);
