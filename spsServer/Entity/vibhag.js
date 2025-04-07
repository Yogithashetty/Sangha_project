const express = require("express");
const router = express.Router();
const { Vibhag } = require("../schema");

// GET all vibhags for a specific prant
router.get("/:prantId", async (req, res) => {
  try {
    const { prantId } = req.params;
    const vibhags = await Vibhag.find({ prant: prantId });
    console.log(`📥 Vibhags fetched for Prant ID ${prantId}:`, vibhags);
    res.json(vibhags);
  } catch (err) {
    console.error("❌ Error fetching vibhags:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
