const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

router.post('/openai-proxy', async (req, res) => {
  const { prompt } = req.body;
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: "user", content: prompt }],
      max_tokens: 64
    })
  });
  const data = await response.json();
  res.json({ reply: data.choices?.[0]?.message?.content || "Sorry, no response." });
});

module.exports = router;