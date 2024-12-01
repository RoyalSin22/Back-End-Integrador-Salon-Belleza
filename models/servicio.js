const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Servicio extends Model {}

Servicio.init({
    ID_Servicio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nombre_Servicio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Descripcion: {
        type: DataTypes.TEXT,
    },
    Duracion: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    Precio: {
        type: DataTypes.DECIMAL(10, 2),
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
}, {
    sequelize,
    modelName: 'Servicio',
    tableName: 'servicio',
    timestamps: false,
});

module.exports = Servicio;
