const express = require('express');
const router = express.Router();
const servicioController = require('../controllers/servicioController');

// Rutas para obtener todos los servicios, obtener un servicio por ID y crear un servicio
router.get('/', servicioController.getServicios);
router.get('/:id', servicioController.getServicioById);
router.post('/', servicioController.createServicio);

module.exports = router;
