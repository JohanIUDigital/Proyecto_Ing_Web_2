const mongoose = require("mongoose");

const conexionDB = async () => {
    try {
        const DB = await mongoose.connect(
          "mongodb+srv://johanholguinaa:Wnk56f**Wnk56f**@clusteriudigital.71pnhp5.mongodb.net/estudiantes"
        );
        console.log("Conexion Mongo Satisfactoria", DB.connection.name);
    } catch (error) {
        console.log(error);
    }
};

module.exports = conexionDB;
