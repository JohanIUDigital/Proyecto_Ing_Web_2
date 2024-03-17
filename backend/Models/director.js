const { Schema, model } = require("mongoose");

//Definicion de estructura para tabla(coleccion) Director
const directorSchema = new Schema ({
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

//Retorno y nombre de tabla(coleccion) Director
module.exports = model( "Directores", directorSchema );