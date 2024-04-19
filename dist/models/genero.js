"use strict";
const { Schema, model } = require("mongoose");
const generoSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  activo: {
    type: Boolean,
    default: true
  },
  fechaCreacion: {
    type: Date,
    required: false
  },
  fechaActualizacion: {
    type: Date,
    required: false
  }
});
module.exports = model("Generos", generoSchema);
//# sourceMappingURL=genero.js.map
