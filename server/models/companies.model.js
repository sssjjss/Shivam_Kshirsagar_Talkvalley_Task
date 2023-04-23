const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyId: Number,
  name: String,
  url: String,
});

const CompanyModel = mongoose.model("company", companySchema, "companies");
module.exports = CompanyModel;
