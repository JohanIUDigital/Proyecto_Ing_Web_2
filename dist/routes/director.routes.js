"use strict";
const { Router } = require("express");
const routerDirector = Router();
const controllerDirector = require("../controllers/director.controller");
routerDirector.get("/", controllerDirector._getDirectores);
routerDirector.get("/:id", controllerDirector._getDirectores);
routerDirector.post("/", controllerDirector._createDirector);
routerDirector.put("/:id", controllerDirector._updateDirector);
routerDirector.delete("/:id", controllerDirector._deleteDirector);
module.exports = routerDirector;
//# sourceMappingURL=director.routes.js.map
