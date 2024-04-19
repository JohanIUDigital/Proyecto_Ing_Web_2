"use strict";
const produccionModel = require("../models/produccion");
exports._getProducciones = async (req, res) => {
  try {
    console.log(req.params);
    let newProduccion = new produccionModel();
    const id = req.params.id;
    newProduccion = await produccionModel.find(
      id ? { activo: true, _id: id } : { activo: true }
    );
    res.json(
      newProduccion.length > 0 ? newProduccion : [{ msg: "No se encontraron Resultados" }]
    );
  } catch (error) {
    res.json(error);
  }
};
exports._createProduccion = async (req, res) => {
  try {
    console.log(req.body);
    const titulo = req.body.titulo;
    const sinopsis = req.body.sinopsis;
    const link = req.body.link;
    const portada = req.body.portada;
    const anio = req.body.anio;
    const genero = req.body.genero;
    const genero_id = req.body.genero_id;
    const director = req.body.director;
    const director_id = req.body.director_id;
    const productora = req.body.productora;
    const productora_id = req.body.productora_id;
    const tipo = req.body.tipo;
    const tipo_id = req.body.tipo_id;
    const activo = req.body.activo;
    const fechaCreacion = req.body.fechaCreacion;
    const fechaActualizacion = req.body.fechaActualizacion;
    const newProduccion = new produccionModel({
      titulo,
      sinopsis,
      link,
      portada,
      anio,
      genero,
      genero_id,
      director,
      director_id,
      productora,
      productora_id,
      tipo,
      tipo_id,
      activo,
      fechaCreacion,
      fechaActualizacion
    });
    await newProduccion.save();
    console.log(newProduccion);
    res.json({
      msg: `La producci\xF3n ${titulo} se cre\xF3 correctamente, el id generado es ${newProduccion._id}`
    });
  } catch (error) {
    res.json(error);
  }
};
exports._updateProduccion = async (req, res) => {
  try {
    const _id = req.params.id;
    const titulo = req.body.titulo;
    const data = req.body;
    if (_id && data) {
      console.log(data);
      await produccionModel.findByIdAndUpdate(_id, data);
      res.json({
        msg: `La producci\xF3n ${titulo} (${_id}) se actualiz\xF3 correctamente`
      });
    } else {
      res.json({
        msg: `No fue posible realizar la actualizaci\xF3n de la producci\xF3n, favor validar datos enviados e intente nuevamente`
      });
    }
  } catch (error) {
    res.json(error);
  }
};
exports._deleteProduccion = async (req, res) => {
  try {
    const _id = req.params.id;
    await produccionModel.findByIdAndDelete(_id);
    res.status(200).json({ msg: `La producci\xF3n ${_id} fue eliminada con \xE9xito` });
  } catch (error) {
    res.json(error);
  }
};
//# sourceMappingURL=produccion.controller.js.map
