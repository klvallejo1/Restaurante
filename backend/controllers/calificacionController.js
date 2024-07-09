// controllers/calificacionesController.js

const Calificacion = require('../models/Calificacion');

exports.crearCalificacion = async (req, res) => {
    try {
        const { mesero, fecha, calificacion, comentario } = req.body;
        const nuevaCalificacion = new Calificacion({
            mesero,
            fecha,
            calificacion,
            comentario
        });
        await nuevaCalificacion.save();
        res.status(201).json(nuevaCalificacion);
    } catch (error) {
        res.status(500).json({ message: 'Error al guardar la calificación', error });
    }
};

exports.obtenerCalificaciones = async (req, res) => {
    try {
        const calificaciones = await Calificacion.find();
        res.status(200).json(calificaciones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las calificaciones', error });
    }
};
