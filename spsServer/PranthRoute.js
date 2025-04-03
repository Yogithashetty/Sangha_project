const express = require("express");
const { Prant } = require("./schema"); // Import Prant model

const router = express.Router();

// API to fetch only Prant names
router.get("/prants", async (req, res) => {
  try {
    const prants = await Prant.find({}); // Fetch only names
    res.json(prants);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Prant names" });
  }
});

module.exports = router;
