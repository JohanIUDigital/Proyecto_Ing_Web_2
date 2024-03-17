//Importamos modelo Mongo DB para operaciones CRUD
const tipoModel = require("../models/tipo");

//método para Obtener uno o todos los Tipos
exports._getTipos = async (req, res) => {
  try {
    console.log(req.params);
    let newTipo = new tipoModel();
    const id = req.params.id;

    //Si llega parametro id busca por activo y id, sino, busca solo los activos
    newTipo = await tipoModel.find(
      id ? { activo: true, _id: id } : { activo: true }
    );

    //Si encontro datos, los retorna, sino, retorna mensaje de no se encotraron
    res.json(
      newTipo.length > 0
        ? newTipo
        : [{ msg: "No se encontraron Resultados" }]
    );
  } catch (error) {
    res.json(error);
  }
};

//método para crear nuevo Tipos
exports._createTipo = async (req, res) => {
  try {
    console.log(req.body);
    const id = req.body.id;
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const activo = req.body.activo;
    const fechaCreacion = req.body.fechaCreacion;
    const fechaActualizacion = req.body.fechaActualizacion;

    // Definimos objeto Modelo Mongo DB Tipos
    const newTipo = new tipoModel({
      nombre,
      descripcion,
      activo,
      fechaCreacion,
      fechaActualizacion,
    });

    // Guardamos registro en BD Mongo
    await newTipo.save();
    console.log(newTipo);
    res.json({
      msg: `El tipo ${nombre} se creó correctamente, el id generado es ${newTipo._id}`,
    });
  } catch (error) {
    res.json(error);
  }
};

//Método para actualizar registro, se reciben dos parametros id a cambiar y nueva data
exports._updateTipo = async (req, res) => {
  try {
    const _id = req.params.id;
    const nombre = req.body.nombre;
    const data = req.body;

    //valida si trae parametro id y data para realizar la actualizacion
    if (_id && data) {
      await tipoModel.findByIdAndUpdate(_id, data);
      res.json({
        msg: `El tipo ${nombre} (${_id}) se actualizó correctamente`,
      });
    } else {
      res.json({
        msg: `No fue posible realizar la actualización del tipo, favor validar datos enviados e intente nuevamente`,
      });
    }
  } catch (error) {
    res.json(error);
  }
};

//Método para eliminar registro indicado
exports._deleteTipo = async (req, res) => {
  try {
    const _id = req.params.id;

    //Actualizamos registro an activo fale para conservar registro
    //const eliminado = await tipoModel.findByIdAndDelete(id);
    await tipoModel.findByIdAndUpdate(_id, { activo: false });

    // retornamos mensaje de exito
    res.status(200).json({ msg: `El tipo fue eliminado con éxito` });
  } catch (error) {
    res.json(error);
  }
};
