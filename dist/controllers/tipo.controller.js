"use strict";
const tipoModel = require("../models/tipo");
exports._getTipos = async (req, res) => {
  try {
    console.log(req.params);
    let newTipo = new tipoModel();
    const id = req.params.id;
    newTipo = await tipoModel.find(
      id ? { activo: true, _id: id } : { activo: true }
    );
    res.json(
      newTipo.length > 0 ? newTipo : [{ msg: "No se encontraron Resultados" }]
    );
  } catch (error) {
    res.json(error);
  }
};
exports._createTipo = async (req, res) => {
  try {
    console.log(req.body);
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const activo = req.body.activo;
    const fechaCreacion = req.body.fechaCreacion;
    const fechaActualizacion = req.body.fechaActualizacion;
    const getTipo = await tipoModel.find({
      activo: true,
      nombre
    });
    console.log("getTipo ", getTipo.length);
    if (getTipo.length > 0) {
      res.json({
        msg: `no fue posible crear El Tipo, ${nombre} ya existe en la Base de Datos`
      });
      return;
    }
    const newTipo = new tipoModel({
      nombre,
      descripcion,
      activo,
      fechaCreacion,
      fechaActualizacion
    });
    await newTipo.save();
    console.log(newTipo);
    res.json({
      msg: `El tipo ${nombre} se cre\xF3 correctamente, el id generado es ${newTipo._id}`
    });
  } catch (error) {
    res.json(error);
  }
};
exports._updateTipo = async (req, res) => {
  try {
    const _id = req.params.id;
    const nombre = req.body.nombre;
    const data = req.body;
    if (_id && data) {
      await tipoModel.findByIdAndUpdate(_id, data);
      res.json({
        msg: `El tipo ${nombre} (${_id}) se actualiz\xF3 correctamente`
      });
    } else {
      res.json({
        msg: `No fue posible realizar la actualizaci\xF3n del tipo, favor validar datos enviados e intente nuevamente`
      });
    }
  } catch (error) {
    res.json(error);
  }
};
exports._deleteTipo = async (req, res) => {
  try {
    const _id = req.params.id;
    await tipoModel.findByIdAndDelete(_id);
    res.status(200).json({ msg: `El tipo ${_id} fue eliminado con \xE9xito` });
  } catch (error) {
    res.json(error);
  }
};
//# sourceMappingURL=tipo.controller.js.map
