const express = require('express');
const router = express.Router();
const waiterController = require('../controllers/meseroController');

router.post('/meseros', waiterController.createWaiter);
router.get('/meseros', waiterController.getWaiters);

module.exports = router;