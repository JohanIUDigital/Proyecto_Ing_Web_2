"use strict";
const { Router } = require("express");
const routerGeneros = Router();
const controllerGenero = require("../controllers/genero.controller");
routerGeneros.get("/", controllerGenero._getGeneros);
routerGeneros.get("/:id", controllerGenero._getGeneros);
routerGeneros.post("/", controllerGenero._createGenero);
routerGeneros.put("/:id", controllerGenero._updateGenero);
routerGeneros.delete("/:id", controllerGenero._deleteGenero);
module.exports = routerGeneros;
//# sourceMappingURL=genero.routes.js.map
