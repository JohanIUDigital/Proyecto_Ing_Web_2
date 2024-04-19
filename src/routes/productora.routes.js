const { Router } = require("express");
const routerProductora = Router();
const controllerProductora = require("../controllers/productora.controller");

//métodos get modulo Productora
routerProductora.get("/", controllerProductora._getProductoras );
routerProductora.get("/:id", controllerProductora._getProductoras );

//método post modulo Productora
routerProductora.post("/", controllerProductora._createProductora );

//método update modulo Productora
routerProductora.put('/:id', controllerProductora._updateProductora );

//método delete modulo Productora 
routerProductora.delete('/:id', controllerProductora._deleteProductora );

//retorno Entidades
module.exports = routerProductora;