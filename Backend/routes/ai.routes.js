const express = require('express');
const router = express.Router();
const { predictFare } = require('../ai/farePredictor');

// POST /api/predict-fare { distance, duration }
router.post('/predict-fare', async (req, res) => {
  const { distance, duration } = req.body;
  if (typeof distance !== "number" || typeof duration !== "number") {
    return res.status(400).json({ error: "distance and duration required" });
  }
  const fare = await predictFare(distance, duration);
  res.json({ fare: fare.toFixed(2) });
});

module.exports = router;