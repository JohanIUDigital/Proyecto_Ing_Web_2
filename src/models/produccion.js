const { Schema, model } = require("mongoose");

//Definicion de estructura para tabla(coleccion) Produccion
const produccionSchema = new Schema ({
    titulo: {
        type: String,
        required: true
    },
    sinopsis: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    portada: {
        type: String,
        required: true
    },
    anio: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    genero_id: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    director_id: {
        type: String,
        required: true
    },
    productora: {
        type: String,
        required: true
    },
    productora_id: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    tipo_id: {
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

//Retorno y nombre de tabla(coleccion) Produccion
module.exports = model( "Producciones", produccionSchema );