const { Router } = require("express");
const routerProduccion = Router();
const controllerProduccion = require("../controllers/produccion.controller");

//métodos get modulo Produccion
routerProduccion.get("/", controllerProduccion._getProducciones  );
routerProduccion.get("/:id", controllerProduccion._getProducciones  );

//método post modulo Produccion
routerProduccion.post("/", controllerProduccion._createProduccion );

//método update modulo Produccion
routerProduccion.put('/:id', controllerProduccion._updateProduccion );

//método delete modulo Produccion 
routerProduccion.delete('/:id', controllerProduccion._deleteProduccion );

//retorno Entidades
module.exports = routerProduccion;