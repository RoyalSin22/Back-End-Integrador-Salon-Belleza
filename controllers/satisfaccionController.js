const Satisfaccion = require('../models/satisfaccion'); // Asegúrate de que el modelo esté correctamente importado

// Crear una nueva satisfacción
exports.createSatisfaccion = async (req, res) => {
    const { fecha, rating, comentarios, ID_Cliente } = req.body;

    try {
        // Crear una nueva satisfacción en la base de datos
        const nuevaSatisfaccion = await Satisfaccion.create({
            fecha,
            rating,
            comentarios,
            ID_Cliente
        });

        // Responder con la satisfacción creada
        res.status(201).json(nuevaSatisfaccion);
    } catch (error) {
        console.error('Error al crear la satisfacción:', error);
        res.status(500).json({ message: 'Error al crear la satisfacción', error });
    }
};

// Obtener todas las satisfacciones
exports.getSatisfacciones = async (req, res) => {
    try {
        // Obtener todas las satisfacciones de la base de datos
        const satisfacciones = await Satisfaccion.findAll({
            include: ['Cliente'] // Incluir relación con Cliente
        });
        res.status(200).json(satisfacciones);
    } catch (error) {
        console.error('Error al obtener las satisfacciones:', error);
        res.status(500).json({ message: 'Error al obtener las satisfacciones', error });
    }
};
