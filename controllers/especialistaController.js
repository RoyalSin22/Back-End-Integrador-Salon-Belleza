// especialistaController.js
const Especialista = require('../models/especialista');

// Obtener todos los especialistas
exports.getAllEspecialistas = async (req, res) => {
    try {
        const especialistas = await Especialista.findAll();
        res.status(200).json(especialistas);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener los especialistas' });
    }
};

// Obtener un especialista por ID
exports.getEspecialistaById = async (req, res) => {
    try {
        const especialista = await Especialista.findByPk(req.params.id);
        if (!especialista) {
            return res.status(404).json({ message: 'Especialista no encontrado' });
        }
        res.status(200).json(especialista);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener el especialista' });
    }
};

// Crear un nuevo especialista
exports.createEspecialista = async (req, res) => {
    try {
        const { Nombre_Especialista, Telefono, Email, Especialidad } = req.body;
        const especialista = await Especialista.create({
            Nombre_Especialista,
            Telefono,
            Email,
            Especialidad
        });
        res.status(201).json(especialista);
    } catch (err) {
        res.status(500).json({ message: 'Error al crear el especialista' });
    }
};

// Actualizar un especialista por ID
exports.updateEspecialista = async (req, res) => {
    try {
        const { id } = req.params;
        const { Nombre_Especialista, Telefono, Email, Especialidad } = req.body;

        const especialista = await Especialista.findByPk(id);
        if (!especialista) {
            return res.status(404).json({ message: 'Especialista no encontrado' });
        }

        await especialista.update({ Nombre_Especialista, Telefono, Email, Especialidad });
        res.status(200).json(especialista);
    } catch (err) {
        res.status(500).json({ message: 'Error al actualizar el especialista' });
    }
};

// Eliminar un especialista por ID
exports.deleteEspecialista = async (req, res) => {
    try {
        const { id } = req.params;
        const especialista = await Especialista.findByPk(id);
        if (!especialista) {
            return res.status(404).json({ message: 'Especialista no encontrado' });
        }

        await especialista.destroy();
        res.status(200).json({ message: 'Especialista eliminado' });
    } catch (err) {
        res.status(500).json({ message: 'Error al eliminar el especialista' });
    }
};
