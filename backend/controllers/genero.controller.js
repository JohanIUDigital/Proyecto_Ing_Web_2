//Importamos modelo Mongo DB para operaciones CRUD
const generoModel = require("../models/genero");

//método para Obtener uno o todos los géneros
exports._getGeneros = async (req, res) => {
  try {
    console.log(req.params);
    let newGenero = new generoModel();
    const id = req.params.id;

    //Si llega parametro id busca por activo y id, sino, busca solo los activos
    newGenero = await generoModel.find(
      id ? { activo: true, _id: id } : { activo: true }
    );

    //Si encontro datos, los retorna, sino, retorna mensaje de no se encotraron
    res.json(
      newGenero.length > 0
        ? newGenero
        : [{ msg: "No se encontraron Resultados" }]
    );
  } catch (error) {
    res.json(error);
  }
};

//método para crear nuevo Género
exports._createGenero = async (req, res) => {
  try {
    console.log(req.body);
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const activo = req.body.activo;
    const fechaCreacion = req.body.fechaCreacion;
    const fechaActualizacion = req.body.fechaActualizacion;

    //Validamos si ya existe genero en BD
    const getGenero = await generoModel.find({ activo: true, nombre: nombre });
    console.log("getGenero ", getGenero.length);
    if (getGenero.length > 0) {
      res.json({
        msg: `no fue posible crear El género, ${nombre} ya existe en la Base de Datos`,
      });
      return;
    } else {
      // Definimos objeto Modelo Mongo DB Género
      const newGenero = new generoModel({
        nombre,
        descripcion,
        activo,
        fechaCreacion,
        fechaActualizacion,
      });
      // Guardamos registro en BD Mongo
      await newGenero.save();
      console.log(newGenero);
      res.json({
        msg: `El género ${nombre} se creó correctamente, el id generado es ${newGenero._id}`,
      });
    }
  } catch (error) {
    res.json(error);
  }
};

//Método para actualizar registro, se reciben dos parametros id a cambiar y nueva data
exports._updateGenero = async (req, res) => {
  try {
    const _id = req.params.id;
    const nombre = req.body.nombre;
    const data = req.body;

    //valida si trae parametro id y data para realizar la actualizacion
    if (_id && data) {
      await generoModel.findByIdAndUpdate(_id, data);
      res.json({
        msg: `El género ${nombre} (${_id}) se actualizó correctamente`,
      });
    } else {
      res.json({
        msg: `No fue posible realizar la actualización del género, favor validar datos enviados e intente nuevamente`,
      });
    }
  } catch (error) {
    res.json(error);
  }
};

//Método para eliminar registro indicado
exports._deleteGenero = async (req, res) => {
  try {
    const _id = req.params.id;

    //Eliminamos registro definitivamente de la base de datos
    await generoModel.findByIdAndDelete(_id);

    // Actualizamos registro an activo false para conservar registro    
    // await generoModel.findByIdAndUpdate(_id, { activo: false });

    // retornamos mensaje de exito
    res.status(200).json({ msg: `El género ${_id} fue eliminado con éxito` });
  } catch (error) {
    res.json(error);
  }
};
