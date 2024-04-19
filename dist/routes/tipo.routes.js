"use strict";
const { Router } = require("express");
const routerTipos = Router();
const controllerTipo = require("../controllers/tipo.controller");
routerTipos.get("/", controllerTipo._getTipos);
routerTipos.get("/:id", controllerTipo._getTipos);
routerTipos.post("/", controllerTipo._createTipo);
routerTipos.put("/:id", controllerTipo._updateTipo);
routerTipos.delete("/:id", controllerTipo._deleteTipo);
module.exports = routerTipos;
//# sourceMappingURL=tipo.routes.js.map
