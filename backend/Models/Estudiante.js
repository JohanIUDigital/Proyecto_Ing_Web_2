const { Schema, model } = require("mongoose");

const EstudianteSchema = new Schema ({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    }
});

module.exports = model( "EstudianteModel", EstudianteSchema );