const express = require("express");
const router = express.Router();
const { Upavasati } = require("../schema");
const axios =require("axios");

// GET all upavasathis under a specific vasathi
router.get("/upavasathis/:vasathiId", async (req, res) => {
  try {
    const { vasathiId } = req.params;
    console.log("Vasathi ID received:", vasathiId);

    const upavasathis = await Upavasati.find({ vasati: vasathiId });
    console.log("Fetched Upavasathis:", upavasathis); // ✅ Console log the output
    res.json(upavasathis);
  } catch (err) {
    console.error("Error fetching upavasathis:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
