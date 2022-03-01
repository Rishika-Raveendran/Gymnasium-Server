const mongoose = require("mongoose");

const equipmentSchema = {
  name: String,
  number: Number,
};

const Equipment = mongoose.model("Equipment", equipmentSchema);
module.exports = Equipment;
