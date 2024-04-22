"use strict";
const express = require("express");
const cors = require("cors");
const app = express();
const config = require("./config.js");
const conexionDB = require("./db.conexion");
const routerGeneros = require("./routes/genero.routes");
const routerDirector = require("./routes/director.routes");
const routerProductora = require("./routes/productora.routes");
const routerTipos = require("./routes/tipo.routes");
const routerProduccion = require("./routes/produccion.routes");
conexionDB();
app.use(
  cors({
    origin: "*",
  })
);
app.set("name", "rest-api-nodejs");
app.set("port", config.PORT);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Servidor Backend admin by Johan Alexis Holguin");
});
app.use("/api/generos", routerGeneros);
app.use("/api/directores", routerDirector);
app.use("/api/productoras", routerProductora);
app.use("/api/tipos", routerTipos);
app.use("/api/producciones", routerProduccion);
app.get("*", (req, res) => {
  return res.status(404).json({
    msj: "No encontrado",
    status: 404,
  });
});
module.exports = app;
//# sourceMappingURL=app.js.map
