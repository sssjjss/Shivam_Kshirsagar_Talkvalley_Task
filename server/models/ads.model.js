const mongoose = require("mongoose");

const adsSchema = new mongoose.Schema({
  adId: Number,
  companyId: Number,
  primaryText: String,
  headline: String,
  description: String,
  CTA: String,
  imageUrl: String,
});

const AdModel = mongoose.model("ad", adsSchema, "ads");
module.exports = AdModel;
