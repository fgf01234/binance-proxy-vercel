const axios = require('axios');

module.exports = async (req, res) => {
  const { symbol = 'DOGEUSDT', interval = '5m', limit = '100' } = req.query;
  try {
    const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;
    const result = await axios.get(url);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(result.data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
