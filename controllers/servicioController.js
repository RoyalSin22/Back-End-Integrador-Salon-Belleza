const Servicio = require('../models/servicio'); // Asegúrate de que el modelo esté correctamente importado

// Crear un nuevo servicio
exports.createServicio = async (req, res) => {
    const { Nombre_Servicio, Descripcion, Duracion, Precio } = req.body;

    try {
        // Crear un nuevo servicio en la base de datos
        const nuevoServicio = await Servicio.create({
            Nombre_Servicio,
            Descripcion,
            Duracion,
            Precio
        });

        // Responder con el servicio creado
        res.status(201).json(nuevoServicio);
    } catch (error) {
        console.error('Error al crear el servicio:', error);
        res.status(500).json({ message: 'Error al crear el servicio', error });
    }
};

// Obtener todos los servicios
exports.getServicios = async (req, res) => {
    try {
        // Obtener todos los servicios de la base de datos
        const servicios = await Servicio.findAll();
        res.status(200).json(servicios);
    } catch (error) {
        console.error('Error al obtener los servicios:', error);
        res.status(500).json({ message: 'Error al obtener los servicios', error });
    }
};

// Obtener un servicio por ID
exports.getServicioById = async (req, res) => {
    const { id } = req.params;

    try {
        // Buscar el servicio por ID
        const servicio = await Servicio.findByPk(id);

        if (!servicio) {
            return res.status(404).json({ message: 'Servicio no encontrado' });
        }

        res.status(200).json(servicio);
    } catch (error) {
        console.error('Error al obtener el servicio por ID:', error);
        res.status(500).json({ message: 'Error al obtener el servicio', error });
    }
};
