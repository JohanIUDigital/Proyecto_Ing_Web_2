"use strict";
const { Schema, model } = require("mongoose");
const directorSchema = new Schema({
  cedula: {
    type: String,
    required: true
  },
  nombre: {
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
module.exports = model("Directores", directorSchema);
//# sourceMappingURL=director.js.map
