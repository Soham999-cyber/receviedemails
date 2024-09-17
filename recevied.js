const axios = require('axios');

module.exports = async function (req, res) {
  const email = req.query.email;

  try {
    const { data } = await axios.get(`https://api.mailtm.com/get_received_emails?email=${email}`); // Replace with actual Mail.tm API endpoint
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch received emails.' });
  }
};
