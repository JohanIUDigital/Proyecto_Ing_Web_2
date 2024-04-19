"use strict";
const express = require("express");
const app = express();
const config = require("./config.js");
const conexionDB = require("./db.conexion");
const routerGeneros = require("./routes/genero.routes");
const routerDirector = require("./routes/director.routes");
const routerProductora = require("./routes/productora.routes");
const routerTipos = require("./routes/tipo.routes");
const routerProduccion = require("./routes/produccion.routes");
conexionDB();
app.set("name", "rest-api-nodejs");
app.set("port", config.PORT);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/generos", routerGeneros);
app.use("/api/directores", routerDirector);
app.use("/api/productoras", routerProductora);
app.use("/api/tipos", routerTipos);
app.use("/api/producciones", routerProduccion);
module.exports = app;
//# sourceMappingURL=app.js.map
