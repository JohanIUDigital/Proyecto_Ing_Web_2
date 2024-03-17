const express = require('express')
const routerEstudiantes = require("./routes/estudiantes.routes")
const app = express()
const conexionDB = require("./db.conexion")

//conexion a la BD
conexionDB();

///settings
app.set("name", "rest-api-nodejs")
app.set("port", process.env.port || 3500)

app.use( express.json() )


//llamado de rutas
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/estudiantes", routerEstudiantes )

module.exports = app;