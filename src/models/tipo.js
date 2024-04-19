const { Schema, model } = require("mongoose");

//Definicion de estructura para tabla(coleccion) tipos
const tipoSchema = new Schema ({
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

//Retorno y nombre de tabla(coleccion) tipos
module.exports = model( "Tipos", tipoSchema );