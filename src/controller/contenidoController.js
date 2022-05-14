const Contenido = require("../models/Contenido");

exports.obtenerContenido = async (req, res) => {
  try {
    const contenidos = await Contenido.find();
    res.status(200).json({ contenidos });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error conectandose al servidor");
  }
};
