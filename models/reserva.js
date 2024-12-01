// models/reserva.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./cliente');
const Especialista = require('./especialista');
const Servicio = require('./servicio');

class Reserva extends Model {}

Reserva.init({
    ID_Reserva: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Fecha_Reserva: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Hora_Reserva: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    ID_Cliente: {
        type: DataTypes.INTEGER,
        references: {
            model: Cliente,
            key: 'ID_Cliente',
        },
    },
    ID_Especialista: {
        type: DataTypes.INTEGER,
        references: {
            model: Especialista,
            key: 'ID_Especialista',
        },
    },
    ID_Servicio: {
        type: DataTypes.INTEGER,
        references: {
            model: Servicio,
            key: 'ID_Servicio',
        },
    },
}, {
    sequelize,
    modelName: 'Reserva',
    tableName: 'reserva',
    timestamps: false,
});

// Definir las relaciones
Reserva.belongsTo(Cliente, { foreignKey: 'ID_Cliente' });
Reserva.belongsTo(Especialista, { foreignKey: 'ID_Especialista' });  // Asegúrate de que esta relación está aquí
Reserva.belongsTo(Servicio, { foreignKey: 'ID_Servicio' });

module.exports = Reserva;
