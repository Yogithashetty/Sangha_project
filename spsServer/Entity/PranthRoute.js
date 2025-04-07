const express = require("express");
const router = express.Router();
const { Prant } = require("../schema");

const axios =require("axios");
// GET /api/prants
router.get("/", async (req, res) => {
  try {
    const prants = await Prant.find();
    console.log("📦 Prants fetched from DB:", prants); // <- Console log here
    res.json(prants);
  } catch (err) {
    console.error("❌ Error fetching Prants:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
