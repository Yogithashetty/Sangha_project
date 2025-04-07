const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Bhag } = require("../schema"); // Adjust path as needed
const axios =require("axios");

// GET all bhags under a specific vibhag
router.get("/bhags/:vibhagId", async (req, res) => {
  try {
    const { vibhagId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(vibhagId)) {
      return res.status(400).json({ message: "Invalid Vibhag ID" });
    }

    const bhags = await Bhag.find({ vibhag: vibhagId });

    console.log("✅ Fetched Bhags for Vibhag ID:", vibhagId);
    console.log("Bhag List:", bhags);

    res.status(200).json(bhags);
  } catch (err) {
    console.error("❌ Error fetching bhags:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
