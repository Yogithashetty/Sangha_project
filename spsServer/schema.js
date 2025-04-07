const mongoose = require("mongoose");

const { Schema } = mongoose;


const PrantSchema = new Schema({
  name: { type: String, required: true },
  // vibhags: [{ type: Schema.Types.ObjectId, ref: "Vibhag" }]
});

const VibhagSchema = new Schema({
  name: { type: String, required: true },
  prant: { type: Schema.Types.ObjectId, ref: "Prant" },
  // bhags: [{ type: Schema.Types.ObjectId, ref: "Bhag" }]
});

const BhagSchema = new Schema({
  name: { type: String, required: true },
  vibhag: { type: Schema.Types.ObjectId, ref: "Vibhag" },
  // nagars: [{ type: Schema.Types.ObjectId, ref: "Nagar" }]
});

const NagarSchema = new Schema({
  name: { type: String, required: true },
  bhag: { type: Schema.Types.ObjectId, ref: "Bhag" },
  // vasatis: [{ type: Schema.Types.ObjectId, ref: "Vasati" }]
});

const VasatiSchema = new Schema({
  name: { type: String, required: true },
  nagar: { type: Schema.Types.ObjectId, ref: "Nagar" },
  // upavasatis: [{ type: Schema.Types.ObjectId, ref: "Upavasati" }]
});

const UpavasatiSchema = new Schema({
  name: { type: String, required: true },
  
  vasati: { type: Schema.Types.ObjectId, ref: "Vasati" }
});

// Create models
const Prant = mongoose.model("Prant", PrantSchema);
const Vibhag = mongoose.model("Vibhag", VibhagSchema);
const Bhag = mongoose.model("Bhag", BhagSchema);
const Nagar = mongoose.model("Nagar", NagarSchema);
const Vasati = mongoose.model("Vasati", VasatiSchema);
const Upavasati = mongoose.model("Upavasati", UpavasatiSchema);

module.exports = { Prant, Vibhag, Bhag, Nagar, Vasati, Upavasati };