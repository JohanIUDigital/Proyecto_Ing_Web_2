const { Schema, model } = require("mongoose");

//Definicion de estructura para tabla(coleccion) generos
const generoSchema = new Schema ({
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

//Retorno y nombre de tabla(coleccion) generos
module.exports = model( "Generos", generoSchema );