// events.js
// events.js (under /Entity)
const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

// Mongoose Schema
const eventSchema = new mongoose.Schema({
  milan: String,
  utsavPlace: String,
  utsavType: String,
  date: String,
  time: String,
  upavasathiId: {
    type: mongoose.Schema.Types.ObjectId, // or String, based on your ID structure
    required: true,
    ref: "Upavasathi" // optional: only if you have a related model
  },
  chiefGuest: {
    name: String,
    phone: String,
    email: String,
  },
  speaker: {
    name: String,
    phone: String,
    responsibility: String,
  },
  pramukh: {
    name: String,
    phone: String,
    responsibility: String,
  },
});

const Event = mongoose.model("Event", eventSchema);

// POST route to save event
router.post("/events", async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json({ message: "Event saved successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error saving event", error: err });
  }
});

module.exports = router;
