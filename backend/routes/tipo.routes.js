const { Router } = require("express");
const routerTipos = Router();
const controllerTipo = require("../controllers/tipo.controller");

//métodos get modulo Tipo
routerTipos.get("/", controllerTipo._getTipos );
routerTipos.get("/:id", controllerTipo._getTipos );

//método post modulo Tipo
routerTipos.post("/", controllerTipo._createTipo );

//método update modulo Tipo
routerTipos.put('/:id', controllerTipo._updateTipo );

//método delete modulo Tipo 
routerTipos.delete('/:id', controllerTipo._deleteTipo );

//retorno Entidades
module.exports = routerTipos;