const { Schema, model } = require("mongoose");

//Definicion de estructura para tabla(coleccion) Productora
const productoraSchema = new Schema ({
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

//Retorno y nombre de tabla(coleccion) Productora
module.exports = model( "Productoras", productoraSchema );