"use strict";
const productoraModel = require("../models/productora");
exports._getProductoras = async (req, res) => {
  try {
    console.log(req.params);
    let newProductora = new productoraModel();
    const id = req.params.id;
    newProductora = await productoraModel.find(
      id ? { activo: true, _id: id } : { activo: true }
    );
    res.json(
      newProductora.length > 0 ? newProductora : [{ msg: "No se encontraron Resultados" }]
    );
  } catch (error) {
    res.json(error);
  }
};
exports._createProductora = async (req, res) => {
  try {
    console.log(req.body);
    const nombre = req.body.nombre;
    const activo = req.body.activo;
    const fechaCreacion = req.body.fechaCreacion;
    const fechaActualizacion = req.body.fechaActualizacion;
    const slogan = req.body.slogan;
    const descripcion = req.body.descripcion;
    const newProductora = new productoraModel({
      nombre,
      activo,
      fechaCreacion,
      fechaActualizacion,
      slogan,
      descripcion
    });
    await newProductora.save();
    console.log(newProductora);
    res.json({
      msg: `La productora ${nombre} se cre\xF3 correctamente, el id generado es ${newProductora._id}`
    });
  } catch (error) {
    res.json(error);
  }
};
exports._updateProductora = async (req, res) => {
  try {
    const _id = req.params.id;
    const nombre = req.body.nombre;
    const data = req.body;
    if (_id && data) {
      console.log(data);
      await productoraModel.findByIdAndUpdate(_id, data);
      res.json({
        msg: `La productora ${nombre} (${_id}) se actualiz\xF3 correctamente`
      });
    } else {
      res.json({
        msg: `No fue posible realizar la actualizaci\xF3n de la productora, favor validar datos enviados e intente nuevamente`
      });
    }
  } catch (error) {
    res.json(error);
  }
};
exports._deleteProductora = async (req, res) => {
  try {
    const _id = req.params.id;
    await productoraModel.findByIdAndDelete(_id);
    res.status(200).json({ msg: `La productora ${_id} fue eliminada con \xE9xito` });
  } catch (error) {
    res.json(error);
  }
};
//# sourceMappingURL=productora.controller.js.map
