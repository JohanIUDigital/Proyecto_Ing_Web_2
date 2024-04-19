"use strict";
const { Schema, model } = require("mongoose");
const productoraSchema = new Schema({
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
  },
  slogan: {
    type: String,
    required: false
  },
  descripcion: {
    type: String,
    required: false
  }
});
module.exports = model("Productoras", productoraSchema);
//# sourceMappingURL=productora.js.map
