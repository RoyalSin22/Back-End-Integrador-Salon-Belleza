const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

// Ruta para obtener las reservas
router.get('/', reservaController.getReservas);

module.exports = router;
