const express = require("express");
const router = express.Router();
const ProyectosModel = require("../MODELOS/Proyectos");

router.get("/", async (req, res) => {
  try {
    const Proyectos = await ProyectosModel.find();
    res.status(200).json(Proyectos);
  } catch (error) {
    res.status(400).json({ msg: "No se encontro nningun proyecto" });
  }
});


router.post("/", async (req, res) => {
  try {
    const { nombre, img, resumen, tecnologias, link } = req.body;
    const proyecto = new ProyectosModel({
      nombre,
      img,
      resumen,
      tecnologias,
      link,
    });
    const proyectoSaved = await proyecto.save();
    console.log(proyectoSaved);

    res.status(200).json({ msg: "Proyecto creado exitosamente" });
  } catch (error) {
    res.status(400).json({ msg: "Error al querer crear el proyecto" });
  }
});

module.exports = router;
