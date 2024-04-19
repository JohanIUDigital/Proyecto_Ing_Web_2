//Conexion a Base de Datos de Mongo DB
const mongoose = require("mongoose");

//Importacion de variables de entorno config.js
const config = require('./config.js');

const conexionDB = async () => {
    try {
        //conexión a Cluster creado en Mongo Atlas
        const DB = await mongoose.connect(
            config.MONGOCNX
        );
        console.log("Conexion Mongo Satisfactoria", DB.connection.name);
    } catch (error) {
        console.log(error);
    }
};

//retorno resultado conexion BD
module.exports = conexionDB;
