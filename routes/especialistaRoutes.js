// especialistaRoutes.js
const express = require('express');
const router = express.Router();
const especialistaController = require('../controllers/especialistaController');

// Rutas para manejar especialistas
router.get('/', especialistaController.getAllEspecialistas); // Obtener todos los especialistas
router.get('/:id', especialistaController.getEspecialistaById); // Obtener un especialista por ID
router.post('/', especialistaController.createEspecialista); // Crear un nuevo especialista
router.put('/:id', especialistaController.updateEspecialista); // Actualizar un especialista por ID
router.delete('/:id', especialistaController.deleteEspecialista); // Eliminar un especialista por ID

module.exports = router;
