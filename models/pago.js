const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Reserva = require('./reserva');

class Pago extends Model {}

Pago.init({
    ID_Pago: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Fecha_Pago: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Monto: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    Estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Metodo_Pago: {
        type: DataTypes.STRING,
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
    ID_Reserva: {
        type: DataTypes.INTEGER,
        references: {
            model: Reserva,
            key: 'ID_Reserva',
        },
    },
}, {
    sequelize,
    modelName: 'Pago',
    tableName: 'pago',
    timestamps: false,
});

module.exports = Pago;
