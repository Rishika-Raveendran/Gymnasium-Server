const mongoose = require("mongoose");

const trainerSchema = {
  name: String,

  gender: String,
  t_id: String,
};

const Trainer = mongoose.model("Trainer", trainerSchema);
module.exports = Trainer;
