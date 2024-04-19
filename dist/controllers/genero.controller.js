"use strict";
const generoModel = require("../models/genero");
exports._getGeneros = async (req, res) => {
  try {
    console.log(req.params);
    let newGenero = new generoModel();
    const id = req.params.id;
    newGenero = await generoModel.find(
      id ? { activo: true, _id: id } : { activo: true }
    );
    res.json(
      newGenero.length > 0 ? newGenero : [{ msg: "No se encontraron Resultados" }]
    );
  } catch (error) {
    res.json(error);
  }
};
exports._createGenero = async (req, res) => {
  try {
    console.log(req.body);
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const activo = req.body.activo;
    const fechaCreacion = req.body.fechaCreacion;
    const fechaActualizacion = req.body.fechaActualizacion;
    const getGenero = await generoModel.find({ activo: true, nombre });
    console.log("getGenero ", getGenero.length);
    if (getGenero.length > 0) {
      res.json({
        msg: `no fue posible crear El g\xE9nero, ${nombre} ya existe en la Base de Datos`
      });
      return;
    } else {
      const newGenero = new generoModel({
        nombre,
        descripcion,
        activo,
        fechaCreacion,
        fechaActualizacion
      });
      await newGenero.save();
      console.log(newGenero);
      res.json({
        msg: `El g\xE9nero ${nombre} se cre\xF3 correctamente, el id generado es ${newGenero._id}`
      });
    }
  } catch (error) {
    res.json(error);
  }
};
exports._updateGenero = async (req, res) => {
  try {
    const _id = req.params.id;
    const nombre = req.body.nombre;
    const data = req.body;
    if (_id && data) {
      await generoModel.findByIdAndUpdate(_id, data);
      res.json({
        msg: `El g\xE9nero ${nombre} (${_id}) se actualiz\xF3 correctamente`
      });
    } else {
      res.json({
        msg: `No fue posible realizar la actualizaci\xF3n del g\xE9nero, favor validar datos enviados e intente nuevamente`
      });
    }
  } catch (error) {
    res.json(error);
  }
};
exports._deleteGenero = async (req, res) => {
  try {
    const _id = req.params.id;
    await generoModel.findByIdAndDelete(_id);
    res.status(200).json({ msg: `El g\xE9nero ${_id} fue eliminado con \xE9xito` });
  } catch (error) {
    res.json(error);
  }
};
//# sourceMappingURL=genero.controller.js.map
