//Importamos modelo Mongo DB para operaciones CRUD
const productoraModel = require("../models/productora");

//método para Obtener uno o todos los productoras
exports._getProductoras = async (req, res) => {
  try {
    console.log(req.params);
    let newProductora = new productoraModel();
    const id = req.params.id;

    //Si llega parametro id busca por activo y id, sino, busca solo los activos
    newProductora = await productoraModel.find(
      id ? { activo: true, _id: id } : { activo: true }
    );

    //Si encontro datos, los retorna, sino, retorna mensaje de no se encotraron
    res.json(
        newProductora.length > 0
        ? newProductora
        : [{ msg: "No se encontraron Resultados" }]
    );
  } catch (error) {
    res.json(error);
  }
};

//método para crear nuevo productora
exports._createProductora = async (req, res) => {
  try {
    console.log(req.body);
    const id = req.body.id;
    const nombre = req.body.nombre;
    const activo = req.body.activo;
    const fechaCreacion = req.body.fechaCreacion;
    const fechaActualizacion = req.body.fechaActualizacion;
    const slogan = req.body.slogan;
    const descripcion = req.body.descripcion;

    // Definimos objeto Modelo Mongo DB productora
    const newProductora = new productoraModel({
      nombre,
      activo,
      fechaCreacion,
      fechaActualizacion,
      slogan,
      descripcion
    });

    // Guardamos registro en BD Mongo
    await newProductora.save();
    console.log(newProductora);
    res.json({
      msg: `La productora ${nombre} se creó correctamente, el id generado es ${newProductora._id}`,
    });
  } catch (error) {
    res.json(error);
  }
};

//Método para actualizar registro, se reciben dos parametros id a cambiar y nueva data
exports._updateProductora = async (req, res) => {
  try {
    const _id = req.params.id;
    const nombre = req.body.nombre;
    const data = req.body;
    //valida si trae parametro id y data para realizar la actualizacion
    if (_id && data) {
    console.log(data)
      await productoraModel.findByIdAndUpdate(_id, data);
      res.json({
        msg: `La productora ${nombre} (${_id}) se actualizó correctamente`,
      });
    } else {
      res.json({
        msg: `No fue posible realizar la actualización de la productora, favor validar datos enviados e intente nuevamente`,
      });
    }
  } catch (error) {
    res.json(error);
  }
};

//Método para eliminar registro indicado
exports._deleteProductora = async (req, res) => {
  try {
    const _id = req.params.id;

    //Actualizamos registro an activo fale para conservar registro
    //const eliminado = await productoraModel.findByIdAndDelete(id);
    await productoraModel.findByIdAndUpdate(_id, { activo: false });

    // retornamos mensaje de exito
    res.status(200).json({ msg: `La productora fue eliminada con éxito` });
  } catch (error) {
    res.json(error);
  }
};
