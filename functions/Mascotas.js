const mongoose = require("mongoose");

const Mascotas = mongoose.model("Mascota", {
  nombre: String,
  tipo: String,
  descripcion: String
});

module.exports = Mascotas;
