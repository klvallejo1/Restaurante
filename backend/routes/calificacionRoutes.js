
const express = require('express');
const router = express.Router();
const calificacionesController = require('../controllers/calificacionController');

router.post('/calificaciones', calificacionesController.crearCalificacion);
router.get('/calificaciones', calificacionesController.obtenerCalificaciones);

module.exports = router;
