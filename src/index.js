//Archivo inicializador, punto de entrada de la aplicación
const app = require("./app");
//Invocacion Inicializacion archivo app.js
app.listen(app.get("port"), () => {
  console.log("nombre de la aplicacion", app.get("name"))
  console.log("puerto de la aplicacion", app.get("port"))
})