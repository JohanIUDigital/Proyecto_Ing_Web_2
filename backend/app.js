//Importacion libreria express para creacion de APIs
const express = require('express');
//Definicion objeto express
const app = express();
//Importacion archivo conexion Base de Datos
const conexionDB = require("./db.conexion");

const routerEstudiantes = require("./routes/estudiantes.routes");

//Importación de entidades para género definidas en el archivo router
const routerGeneros = require("./routes/genero.routes");

//Importación de entidades para Director definidas en el archivo router
const routerDirector = require("./routes/director.routes");

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

app.use("/api/estudiantes", routerEstudiantes );

//Definición entidad género
app.use("/api/generos", routerGeneros );

//Definición entidad Director
app.use("/api/directores", routerDirector );

//Retorno de module
module.exports = app;