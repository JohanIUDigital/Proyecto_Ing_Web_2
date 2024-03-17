//Importacion libreria express para creacion de APIs
const express = require('express');
//Definicion objeto express
const app = express();
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

//conexion a la BD
conexionDB();

//Datos de Configuración
app.set("name", "rest-api-nodejs");

//Definicion Puerto dinámico
app.set("port", process.env.port || 3500);

//Definicion tipo Json para Data de APIs
app.use( express.json() );

//llamado test Hello World
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Definición entidad género
app.use("/api/generos", routerGeneros );

//Definición entidad Director
app.use("/api/directores", routerDirector );

//Definición entidad Productoras
app.use("/api/productoras", routerProductora );

//Definición entidad Productoras
app.use("/api/tipos", routerTipos );

//Retorno de module
module.exports = app;