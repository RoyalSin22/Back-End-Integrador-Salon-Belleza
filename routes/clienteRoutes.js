const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');  // Asegúrate de que la ruta al controlador es correcta

// Obtener todos los clientes
router.get('/', clienteController.getAllClientes);

// Obtener un cliente por su ID
router.get('/:id', clienteController.getClienteById);

// Crear un nuevo cliente
router.post('/', clienteController.createCliente);

// Actualizar un cliente por su ID
router.put('/:id', clienteController.updateCliente);

// Eliminar un cliente por su ID
router.delete('/:id', clienteController.deleteCliente);

module.exports = router;
