const mongoose = require("mongoose");

const docenteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    trim: true,
  },
  apellido: {
    type: String,
    trim: true,
  },
  telefono: {
    type: String,
  },
  legajo: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Docente", docenteSchema);
