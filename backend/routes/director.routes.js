const { Router } = require("express");
const routerDirector = Router();
const controllerDirector = require("../controllers/director.controller");

//métodos get modulo Género
routerDirector.get("/", controllerDirector._getDirectores);
routerDirector.get("/:id", controllerDirector._getDirectores);

//método post modulo Género
routerDirector.post("/", controllerDirector._createDirector);

//método update modulo Género
routerDirector.put('/:id', controllerDirector._updateDirector );

//método delete modulo Género 
routerDirector.delete('/:id', controllerDirector._deleteDirector );

//retorno Entidades
module.exports = routerDirector;