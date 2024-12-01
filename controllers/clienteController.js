const Cliente = require('../models/cliente'); // Asegúrate de que el modelo esté correctamente importado

// Obtener todos los clientes
exports.getAllClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();  // Obtener todos los registros
        res.status(200).json(clientes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los clientes' });
    }
};

// Obtener un cliente por su ID
exports.getClienteById = async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await Cliente.findByPk(id);  // Buscar cliente por ID
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.status(200).json(cliente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el cliente' });
    }
};

// Crear un nuevo cliente
exports.createCliente = async (req, res) => {
    const { Nombre, Direccion, Telefono, Email } = req.body;
    try {
        const nuevoCliente = await Cliente.create({ Nombre, Direccion, Telefono, Email });
        res.status(201).json(nuevoCliente);  // Devuelve el cliente creado
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el cliente' });
    }
};

// Actualizar un cliente por su ID
exports.updateCliente = async (req, res) => {
    const { id } = req.params;
    const { Nombre, Direccion, Telefono, Email } = req.body;
    try {
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        cliente.Nombre = Nombre || cliente.Nombre;
        cliente.Direccion = Direccion || cliente.Direccion;
        cliente.Telefono = Telefono || cliente.Telefono;
        cliente.Email = Email || cliente.Email;
        await cliente.save();
        res.status(200).json(cliente);  // Devuelve el cliente actualizado
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el cliente' });
    }
};

// Eliminar un cliente por su ID
exports.deleteCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        await cliente.destroy();  // Elimina el cliente
        res.status(200).json({ message: 'Cliente eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el cliente' });
    }
};
