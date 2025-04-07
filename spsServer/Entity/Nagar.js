const express = require("express");
const router = express.Router();
const { Nagar } = require("../schema"); // Make sure this path is correct
const axios =require("axios");

// GET all nagars under a specific bhag
router.get("/nagars/:bhagId", async (req, res) => {
  try {
    const { bhagId } = req.params;
    const nagars = await Nagar.find({ bhag: bhagId });
    console.log("Fetched Nagars:", nagars); // ✅ Console log the output
    res.json(nagars);
  } catch (err) {
    console.error("Error fetching nagars:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
