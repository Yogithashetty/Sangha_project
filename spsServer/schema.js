const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const upavasatiSchema = new Schema({
  name: { type: String },
});

const Upavasati = mongoose.model("upavasatis", upavasatiSchema);

const vasatiSchema = new Schema({
  name: String,
  upavasatis: [{ type: mongoose.Schema.Types.ObjectId, ref: "upavasatis" }],
});

const Vasati = mongoose.model("vasatis", vasatiSchema);

const nagarSchema = new Schema({
  name: String,
  vasatis: [{ type: mongoose.Schema.Types.ObjectId, ref: "vasatis" }],
});

const Nagar = mongoose.model("nagars", nagarSchema);

const bhagSchema = new Schema({
  name: String,
  nagars: [{ type: mongoose.Schema.Types.ObjectId, ref: "nagars" }],
});

const Bhag = mongoose.model("bhags", bhagSchema);

const vibhagSchema = new Schema({
  name: String,
  bhags: [{ type: mongoose.Schema.Types.ObjectId, ref: "bhags" }],
});

const Vibhag = mongoose.model("vibhags", vibhagSchema);

const prantSchema = new Schema({
  name: String,
  vibhags: [{ type: mongoose.Schema.Types.ObjectId, ref: "vibhags" }],
});

const Prant = mongoose.model("prant", prantSchema);

module.exports = {
  Upavasati,
  Vasati,
  Nagar,
  Bhag,
  Vibhag,
  Prant,
};