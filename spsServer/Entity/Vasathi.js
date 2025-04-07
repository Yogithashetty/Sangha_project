const express = require("express");
const router = express.Router();
const { Vasati } = require("../schema"); // Adjust path
const axios =require("axios");

// GET all vasathis under a specific nagar
router.get("/vasathis/:nagarId", async (req, res) => {
  try {
    const { nagarId } = req.params;

    //console.log("Fetching Vasathis for Nagar ID:", nagarId); // ✅ Console
    //console.log("Vasathi Model:", Vasathi); // 👈 Check if this prints a function or is undefined


    const vasathis = await Vasati.find({ nagar: nagarId });

    console.log("Found Vasathis:", vasathis); // ✅ Console

    res.json(vasathis);
  } catch (err) {
    console.error("Error fetching vasathis:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
