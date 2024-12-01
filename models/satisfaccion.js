const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./cliente');

class Satisfaccion extends Model {}

Satisfaccion.init({
    id_satisfaccion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comentarios: {
        type: DataTypes.TEXT,
    },
    ID_Cliente: {
        type: DataTypes.INTEGER,
        references: {
            model: Cliente,
            key: 'ID_Cliente',
        },
    },
}, {
    sequelize,
    modelName: 'Satisfaccion',
    tableName: 'satisfaccion',
    timestamps: false,
});

// Definir la relación con Cliente
Satisfaccion.belongsTo(Cliente, { foreignKey: 'ID_Cliente' });

module.exports = Satisfaccion;
