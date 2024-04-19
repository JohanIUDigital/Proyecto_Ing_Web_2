//Conexion a Base de Datos de Mongo DB
const mongoose = require("mongoose");

const conexionDB = async () => {
    try {
        //conexión a Cluster creado en Mongo Atlas
        const DB = await mongoose.connect(
          process.env.MONGOCNX
        );
        console.log("Conexion Mongo Satisfactoria", DB.connection.name);
    } catch (error) {
        console.log(error);
    }
};

//retorno resultado conexion BD
module.exports = conexionDB;
