const Evaluacion = require("../models/Evaluacion");

exports.obtenerEvaluacion = async (req, res) => {
  try {
    const evaluaciones = await Evaluacion.find();
    res.status(200).json({ evaluaciones });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error conectandose al servidor");
  }
};
