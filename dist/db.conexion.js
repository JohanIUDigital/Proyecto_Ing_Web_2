"use strict";
const mongoose = require("mongoose");
const config = require("./config.js");
const conexionDB = async () => {
  try {
    const DB = await mongoose.connect(
      config.MONGOCNX
    );
    console.log("Conexion Mongo Satisfactoria", DB.connection.name);
  } catch (error) {
    console.log(error);
  }
};
module.exports = conexionDB;
//# sourceMappingURL=db.conexion.js.map
