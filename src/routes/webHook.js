const { Router } = require("express");
const router = Router();
const Contenido = require("../models/Contenido");
const Evaluacion = require("../models/Evaluacion");
const Alumno = require("../models/Alumno");
const Docente = require("../models/Docente");

router.post("/webHook", async (req, res) => {
  await Alumno.create({
    nombre: "Maximiliano",
    apellido: "Diaz",
    legajo: "48409",
    id_alumno: 1,
  });
  await Evaluacion.create({
    tema: "Chatbot",
    nota: 10,
    id_alumno: 1,
  });
  await Docente.create({
    nombre: "Vicente",
    apellido: "Chivilisco",
    legajo: "6569",
  });
  await Contenido.create({
    titulo: "Sistema Experto",
    imagen: "sistemaExperto.png",
    paperUrl: "sistemaexpertos.com",
  });

  return res.status(200).json({ msg: "Registros cargados" });
});

module.exports = router;
