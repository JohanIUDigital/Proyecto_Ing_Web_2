const { Router } = require("express");
const routerTipos = Router();
const controllerTipo = require("../controllers/tipo.controller");

//métodos get modulo Género
routerTipos.get("/", controllerTipo._getTipos );
routerTipos.get("/:id", controllerTipo._getTipos );

//método post modulo Género
routerTipos.post("/", controllerTipo._createTipo );

//método update modulo Género
routerTipos.put('/:id', controllerTipo._updateTipo );

//método delete modulo Género 
routerTipos.delete('/:id', controllerTipo._deleteTipo );

//retorno Entidades
module.exports = routerTipos;