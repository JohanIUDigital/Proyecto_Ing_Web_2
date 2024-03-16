const { Router } = require("express");
const controladorEstudiante = require("../controllers/estudiantes.controller")
const routerEstudiantes = Router();

routerEstudiantes.get('/', controladorEstudiante.obtener )

routerEstudiantes.post('/', controladorEstudiante.agregar )

routerEstudiantes.put('/:id', controladorEstudiante.actualizar )

routerEstudiantes.delete('/:id', controladorEstudiante.eliminar )

module.exports = routerEstudiantes;