const express = require('express');
const router = express.Router();
const satisfaccionController = require('../controllers/satisfaccionController');

// Rutas para obtener todas las satisfacciones y crear una satisfacción
router.get('/', satisfaccionController.getSatisfacciones);
router.post('/', satisfaccionController.createSatisfaccion);

module.exports = router;
