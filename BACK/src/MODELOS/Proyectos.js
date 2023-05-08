const mongoose = require("mongoose");
const { Schema } = mongoose;

const proyectosSchema = new Schema({
  nombre: {
    require: true,
    type: String,
  },
  resumen: {
    require: true,
    type: String,
  },
  img: {
    require: true,
    type: String,
  },
  tecnologias: {
    require: true,
    type: Array,
  },
  enlaces: {
    require: true,
    type: Array,
  },
});

const ProyectosModel = mongoose.model("proyectos", proyectosSchema);
module.exports = ProyectosModel;
