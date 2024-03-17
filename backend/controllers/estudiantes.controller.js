const Estudiante = require("../models/Estudiante");

exports.obtener = async (req, res) => {
  try {
    console.log(req.params);
    const estudiantes = await Estudiante.find({ activo: true });
    res.json(estudiantes);
  } catch (error) {
    res.json(error);
  }
};

exports.agregar = async (req, res) => {
  try {
    const { nombre, correo } = req.body;
    console.log(nombre);
    console.log(correo);

    if (nombre && correo) {
      const newEstudiante = new Estudiante({ nombre, correo });
      console.log(newEstudiante);
      await newEstudiante.save();
      res.json({
        isOk: true,
        msj: "registro ingresado correctamente",
        id: newEstudiante._id,
      });
    } else {
      res.json({ isOk: false, msj: "Los datos son obligatorios" });
    }
  } catch (error) {
    res.json(error);
  }
};

exports.actualizar = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    if (id && data) {
      await Estudiante.findByIdAndUpdate(id, data);
      res.json("datos actualizados controlador");
    } else {
      res.json({ isOk: false, msj: "Datos insuficientes" });
    }
  } catch (error) {
    res.json(error);
  }
};

exports.eliminar = async (req, res) => {
  try {
    //const { nombre, correo } = req.body;
    //console.log(nombre);
    //console.log(correo);
    const id = req.params.id;
    //const eliminado = await Estudiante.findByIdAndDelete(id);
    await Estudiante.findByIdAndUpdate(id, { activo: false });
    res.status(200).json("datos eliminados");
  } catch (error) {
    res.json(error);
  }
};
