const Alumno = require("../models/Alumno");

exports.obtenerAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.find();
    res.status(200).json({ alumnos });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error conectandose al servidor");
  }
};
