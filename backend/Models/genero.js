const { Schema, model } = require("mongoose");

const generoSchema = new Schema ({
    id: {
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

module.exports = model( "generoModel", generoSchema );