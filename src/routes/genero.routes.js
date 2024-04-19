const { Router } = require("express");
const routerGeneros = Router();
const controllerGenero = require("../controllers/genero.controller");

//métodos get modulo Género
routerGeneros.get("/", controllerGenero._getGeneros);
routerGeneros.get("/:id", controllerGenero._getGeneros);

//método post modulo Género
routerGeneros.post("/", controllerGenero._createGenero);

//método update modulo Género
routerGeneros.put('/:id', controllerGenero._updateGenero );

//método delete modulo Género 
routerGeneros.delete('/:id', controllerGenero._deleteGenero );

//retorno Entidades
module.exports = routerGeneros;