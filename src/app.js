//Importacion libreria express para creacion de APIs
const express = require("express");

//Importamos cors para recibir peticiones de cualquier sitio
const cors = require("cors");

//Definicion objeto express
const app = express();

//Importacion variables de entorno config.js
const config = require("./config.js");

//Importacion archivo conexion Base de Datos
const conexionDB = require("./db.conexion");

//Importación de entidades para género definidas en el archivo router
const routerGeneros = require("./routes/genero.routes");

//Importación de entidades para Director definidas en el archivo router
const routerDirector = require("./routes/director.routes");

//Importación de entidades para Productora definidas en el archivo router
const routerProductora = require("./routes/productora.routes");

//Importación de entidades para Tipos definidas en el archivo router
const routerTipos = require("./routes/tipo.routes");

//Importación de entidades para Tipos definidas en el archivo router
const routerProduccion = require("./routes/produccion.routes");

//conexion a la BD
conexionDB();

app.use(
  cors({
    origin: "*",
  })
);

//Datos de Configuración
app.set("name", "rest-api-nodejs");

//Definicion Puerto dinámico
app.set("port", config.PORT);

//Definicion tipo Json para Data de APIs
app.use(express.json());

//llamado test Hello World
app.get("/", (req, res) => {
  res.send("Backend Peliculas IUDigital");
});

//Definición entidad género
app.use("/api/generos", routerGeneros);

//Definición entidad Director
app.use("/api/directores", routerDirector);

//Definición entidad Productoras
app.use("/api/productoras", routerProductora);

//Definición entidad Tipod
app.use("/api/tipos", routerTipos);

//Definición entidad Producciones
app.use("/api/producciones", routerProduccion);

//Llamado de cualquier parte con cors
app.get("*", (req, res) => {
  return res.status(404).json({
    msj: "No encontrado",
    status: 404,
  });
});

//Retorno de module
module.exports = app;
