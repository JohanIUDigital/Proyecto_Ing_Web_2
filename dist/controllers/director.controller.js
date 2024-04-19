"use strict";
const directorModel = require("../models/director");
exports._getDirectores = async (req, res) => {
  try {
    console.log(req.params);
    let newDirector = new directorModel();
    const id = req.params.id;
    newDirector = await directorModel.find(
      id ? { activo: true, _id: id } : { activo: true }
    );
    res.json(
      newDirector.length > 0 ? newDirector : [{ msg: "No se encontraron Resultados" }]
    );
  } catch (error) {
    res.json(error);
  }
};
exports._createDirector = async (req, res) => {
  try {
    console.log(req.body);
    const cedula = req.body.cedula;
    const nombre = req.body.nombre;
    const activo = req.body.activo;
    const fechaCreacion = req.body.fechaCreacion;
    const fechaActualizacion = req.body.fechaActualizacion;
    const newdirector = new directorModel({
      cedula,
      nombre,
      activo,
      fechaCreacion,
      fechaActualizacion
    });
    await newdirector.save();
    console.log(newdirector);
    res.json({
      msg: `El director ${nombre} se cre\xF3 correctamente, el id generado es ${newdirector._id}`
    });
  } catch (error) {
    res.json(error);
  }
};
exports._updateDirector = async (req, res) => {
  try {
    const _id = req.params.id;
    const nombre = req.body.nombre;
    const data = req.body;
    if (_id && data) {
      await directorModel.findByIdAndUpdate(_id, data);
      res.json({
        msg: `El director ${nombre} (${_id}) se actualiz\xF3 correctamente`
      });
    } else {
      res.json({
        msg: `No fue posible realizar la actualizaci\xF3n del director, favor validar datos enviados e intente nuevamente`
      });
    }
  } catch (error) {
    res.json(error);
  }
};
exports._deleteDirector = async (req, res) => {
  try {
    const _id = req.params.id;
    await directorModel.findByIdAndDelete(_id);
    res.status(200).json({ msg: `El director ${_id} fue eliminado con \xE9xito` });
  } catch (error) {
    res.json(error);
  }
};
//# sourceMappingURL=director.controller.js.map
