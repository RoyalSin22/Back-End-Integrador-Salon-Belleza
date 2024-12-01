const Pago = require('../models/pago'); // Asegúrate de que el modelo esté correctamente importado

// Crear un nuevo pago
exports.createPago = async (req, res) => {
    const { Fecha_Pago, Monto, Estado, Metodo_Pago, ID_Reserva } = req.body;

    try {
        // Crear un nuevo pago en la base de datos
        const nuevoPago = await Pago.create({
            Fecha_Pago,
            Monto,
            Estado,
            Metodo_Pago,
            ID_Reserva
        });

        // Responder con el pago creado
        res.status(201).json(nuevoPago);
    } catch (error) {
        console.error('Error al crear el pago:', error);
        res.status(500).json({ message: 'Error al crear el pago', error });
    }
};

// Obtener todos los pagos
exports.getPagos = async (req, res) => {
    try {
        // Obtener todos los pagos de la base de datos
        const pagos = await Pago.findAll();
        res.status(200).json(pagos);
    } catch (error) {
        console.error('Error al obtener los pagos:', error);
        res.status(500).json({ message: 'Error al obtener los pagos', error });
    }
};
