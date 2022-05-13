const Docente = require("../models/Docente");

exports.obtenerDocentes = async (req, res) => {
  try {
    const docentes = await Docente.find();
    res.status(200).json({ docentes });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error conectandose al servidor");
  }
};
