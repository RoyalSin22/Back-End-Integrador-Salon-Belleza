const express = require('express');
const router = express.Router();
const pagoController = require('../controllers/pagoController');

// Rutas para obtener todos los pagos y crear un pago
router.get('/', pagoController.getPagos);
router.post('/', pagoController.createPago);

module.exports = router;
