"use strict";
const { Router } = require("express");
const routerProduccion = Router();
const controllerProduccion = require("../controllers/produccion.controller");
routerProduccion.get("/", controllerProduccion._getProducciones);
routerProduccion.get("/:id", controllerProduccion._getProducciones);
routerProduccion.post("/", controllerProduccion._createProduccion);
routerProduccion.put("/:id", controllerProduccion._updateProduccion);
routerProduccion.delete("/:id", controllerProduccion._deleteProduccion);
module.exports = routerProduccion;
//# sourceMappingURL=produccion.routes.js.map
