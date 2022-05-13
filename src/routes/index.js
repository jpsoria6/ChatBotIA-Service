const { Router } = require("express");
const router = Router();
const docenteController = require("../controller/docenteController");

router.get("/", docenteController.obtenerDocentes);

module.exports = router;
