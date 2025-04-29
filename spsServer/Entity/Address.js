const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  address1: String,
  address2: String,
  address3: String,
  pincode: Number,
  upavasathi: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Upavasathi" // Optional: only if you're referencing
  },
  location: String
});

module.exports = mongoose.model("Address", addressSchema);


