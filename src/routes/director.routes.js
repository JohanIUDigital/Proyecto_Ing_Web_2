const { Router } = require("express");
const routerDirector = Router();
const controllerDirector = require("../controllers/director.controller");

//métodos get modulo Direccion
routerDirector.get("/", controllerDirector._getDirectores);
routerDirector.get("/:id", controllerDirector._getDirectores);

//método post modulo Direccion
routerDirector.post("/", controllerDirector._createDirector);

//método update modulo Direccion
routerDirector.put('/:id', controllerDirector._updateDirector );

//método delete modulo Direccion 
routerDirector.delete('/:id', controllerDirector._deleteDirector );

//retorno Entidades
module.exports = routerDirector;