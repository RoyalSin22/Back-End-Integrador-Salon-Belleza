const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Especialista extends Model {}

Especialista.init({
    ID_Especialista: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nombre_Especialista: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Telefono: {
        type: DataTypes.STRING,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Especialidad: {
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
}, {
    sequelize,
    modelName: 'Especialista',
    tableName: 'especialista',
    timestamps: false,
});

module.exports = Especialista;