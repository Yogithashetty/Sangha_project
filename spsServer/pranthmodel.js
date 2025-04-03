const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Define the schema for Prant
const prantSchema = new Schema({
  name: { type: String, required: true, unique: true },
  vibhags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vibhag" }],
});

// Create the Prant model
const Prant = mongoose.model("Prant", prantSchema);

module.exports = Prant;
