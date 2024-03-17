//Importamos modelo Mongo DB para operaciones CRUD
const directorModel = require("../models/director");

//método para Obtener uno o todos los directores
exports._getDirectores = async (req, res) => {
  try {
    console.log(req.params);
    let newDirector = new directorModel();
    const id = req.params.id;

    //Si llega parametro id busca por activo y id, sino, busca solo los activos
    newDirector = await directorModel.find(
      id ? { activo: true, _id: id } : { activo: true }
    );

    //Si encontro datos, los retorna, sino, retorna mensaje de no se encotraron
    res.json(
        newDirector.length > 0
        ? newDirector
        : [{ msg: "No se encontraron Resultados" }]
    );
  } catch (error) {
    res.json(error);
  }
};

//método para crear nuevo director
exports._createDirector = async (req, res) => {
  try {
    console.log(req.body);
    const id = req.body.id;
    const nombre = req.body.nombre;
    const activo = req.body.activo;
    const fechaCreacion = req.body.fechaCreacion;
    const fechaActualizacion = req.body.fechaActualizacion;

    // Definimos objeto Modelo Mongo DB director
    const newdirector = new directorModel({
      nombre,
      activo,
      fechaCreacion,
      fechaActualizacion,
    });

    // Guardamos registro en BD Mongo
    await newdirector.save();
    console.log(newdirector);
    res.json({
      msg: `El director ${nombre} se creó correctamente, el id generado es ${newdirector._id}`,
    });
  } catch (error) {
    res.json(error);
  }
};

//Método para actualizar registro, se reciben dos parametros id a cambiar y nueva data
exports._updateDirector = async (req, res) => {
  try {
    const _id = req.params.id;
    const nombre = req.body.nombre;
    const data = req.body;

    //valida si trae parametro id y data para realizar la actualizacion
    if (_id && data._id) {
      await directorModel.findByIdAndUpdate(_id, data);
      res.json({
        msg: `El director ${nombre} (${_id}) se actualizó correctamente`,
      });
    } else {
      res.json({
        msg: `No fue posible realizar la actualización del director, favor validar datos enviados e intente nuevamente`,
      });
    }
  } catch (error) {
    res.json(error);
  }
};

//Método para eliminar registro indicado
exports._deleteDirector = async (req, res) => {
  try {
    const _id = req.params.id;

    //Actualizamos registro an activo fale para conservar registro
    //const eliminado = await directorModel.findByIdAndDelete(id);
    await directorModel.findByIdAndUpdate(_id, { activo: false });

    // retornamos mensaje de exito
    res.status(200).json({ msg: `El director fue eliminado con éxito` });
  } catch (error) {
    res.json(error);
  }
};
