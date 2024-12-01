// controllers/reservaController.js

const Reserva = require('../models/reserva');  // Importa el modelo de Reserva
const Cliente = require('../models/cliente');  // Importa el modelo de Cliente
const Especialista = require('../models/especialista');  // Importa el modelo de Especialista
const Servicio = require('../models/servicio');  // Importa el modelo de Servicio

exports.getReservas = async (req, res) => {
    try {
        // Obtener todas las reservas e incluir la relación con Cliente, Especialista y Servicio
        const reservas = await Reserva.findAll({
            include: [
                {
                    model: Cliente,  // Aquí haces referencia al modelo Cliente
                    attributes: ['ID_Cliente', 'Nombre', 'Email'],  // Campos que deseas incluir
                },
                {
                    model: Especialista,
                    attributes: ['ID_Especialista', 'Nombre_Especialista'],
                },
                {
                    model: Servicio,
                    attributes: ['ID_Servicio', 'Nombre_Servicio'],
                }
            ]
        });

        res.status(200).json(reservas);  // Responde con las reservas obtenidas
    } catch (error) {
        console.error('Error al obtener las reservas:', error);
        res.status(500).json({ message: 'Error al obtener las reservas', error });
    }
};
