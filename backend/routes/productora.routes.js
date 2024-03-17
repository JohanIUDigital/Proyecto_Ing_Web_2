const { Router } = require("express");
const routerProductora = Router();
const controllerProductora = require("../controllers/productora.controller");

//métodos get modulo Género
routerProductora.get("/", controllerProductora._getProductoras );
routerProductora.get("/:id", controllerProductora._getProductoras );

//método post modulo Género
routerProductora.post("/", controllerProductora._createProductora );

//método update modulo Género
routerProductora.put('/:id', controllerProductora._updateProductora );

//método delete modulo Género 
routerProductora.delete('/:id', controllerProductora._deleteProductora );

//retorno Entidades
module.exports = routerProductora;