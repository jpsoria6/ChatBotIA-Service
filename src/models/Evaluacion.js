const mongoose = require("mongoose");

const evaluacionSchema = new mongoose.Schema({
  tema: {
    type: String,
    trim: true,
  },
  nota: {
    type: Number,
  },
  id_alumno: {
    type: Number,
  },
});

module.exports = mongoose.model("Evaluacion", evaluacionSchema);
