//Importamos modelo Mongo DB para operaciones CRUD
const produccionModel = require("../models/produccion");

//método para Obtener uno o todos los producciones
exports._getProducciones = async (req, res) => {
  try {
    console.log(req.params);
    let newProduccion = new produccionModel();
    const id = req.params.id;

    //Si llega parametro id busca por activo y id, sino, busca solo los activos
    newProduccion = await produccionModel.find(
      id ? { activo: true, _id: id } : { activo: true }
    );

    //Si encontro datos, los retorna, sino, retorna mensaje de no se encotraron
    res.json(
      newProduccion.length > 0
        ? newProduccion
        : [{ msg: "No se encontraron Resultados" }]
    );
  } catch (error) {
    res.json(error);
  }
};

//método para crear nuevo produccion
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
/*
    //Validamos si ya existe produccion en BD
    const getProduccion = await produccionModel.find({
        activo: true,
        titulo: titulo,
      });
      console.log("getProduccion ", getProduccion.length);
      if (getProduccion.length > 0) {
        res.json({
          msg: `no fue posible crear La Producción, ${titulo} ya existe en la Base de Datos`,
        });
        return;
      }
 */     
    // Definimos objeto Modelo Mongo DB produccion
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
      fechaActualizacion,
    });

    // Guardamos registro en BD Mongo
    await newProduccion.save();
    console.log(newProduccion);
    res.json({
      msg: `La producción ${titulo} se creó correctamente, el id generado es ${newProduccion._id}`,
    });
  } catch (error) {
    res.json(error);
  }
};

//Método para actualizar registro, se reciben dos parametros id a cambiar y nueva data
exports._updateProduccion = async (req, res) => {
  try {
    const _id = req.params.id;
    const titulo = req.body.titulo;
    const data = req.body;
    //valida si trae parametro id y data para realizar la actualizacion
    if (_id && data) {
      console.log(data);
      await produccionModel.findByIdAndUpdate(_id, data);
      res.json({
        msg: `La producción ${titulo} (${_id}) se actualizó correctamente`,
      });
    } else {
      res.json({
        msg: `No fue posible realizar la actualización de la producción, favor validar datos enviados e intente nuevamente`,
      });
    }
  } catch (error) {
    res.json(error);
  }
};

//Método para eliminar registro indicado
exports._deleteProduccion = async (req, res) => {
  try {
    const _id = req.params.id;
    //Eliminamos registro definitivamente de la base de datos
    await produccionModel.findByIdAndDelete(_id);
    
    //Actualizamos registro an activo false para conservar registro
    //await produccionModel.findByIdAndUpdate(_id, { activo: false });

    // retornamos mensaje de exito
    res.status(200).json({ msg: `La producción ${_id} fue eliminada con éxito` });
  } catch (error) {
    res.json(error);
  }
};
