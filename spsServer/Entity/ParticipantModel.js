const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  sanghaResponsibility: String,
  bloodGroup: String,
  type: String,
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address"
  }
});

module.exports = mongoose.model("Participant", participantSchema);
