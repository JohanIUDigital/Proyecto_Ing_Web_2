"use strict";
const { Router } = require("express");
const routerProductora = Router();
const controllerProductora = require("../controllers/productora.controller");
routerProductora.get("/", controllerProductora._getProductoras);
routerProductora.get("/:id", controllerProductora._getProductoras);
routerProductora.post("/", controllerProductora._createProductora);
routerProductora.put("/:id", controllerProductora._updateProductora);
routerProductora.delete("/:id", controllerProductora._deleteProductora);
module.exports = routerProductora;
//# sourceMappingURL=productora.routes.js.map
