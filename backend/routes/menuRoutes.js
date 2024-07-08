const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// Ruta para obtener el menú
router.get('/menu', menuController.getMenu);

// Ruta para agregar un nuevo producto
router.post('/menu', menuController.addMenuItem);

module.exports = router;
