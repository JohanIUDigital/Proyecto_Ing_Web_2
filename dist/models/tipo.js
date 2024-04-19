"use strict";
const { Schema, model } = require("mongoose");
const tipoSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: false
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
module.exports = model("Tipos", tipoSchema);
//# sourceMappingURL=tipo.js.map
