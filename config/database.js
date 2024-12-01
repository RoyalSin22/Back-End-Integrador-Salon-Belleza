// Cargar las variables de entorno desde el archivo .env
require('dotenv').config();

// Importar Sequelize
const { Sequelize } = require('sequelize');

// Configurar la conexión a la base de datos usando las variables de entorno
const sequelize = new Sequelize(
    process.env.DB_NAME,        // Nombre de la base de datos
    process.env.DB_USER,        // Usuario de la base de datos
    process.env.DB_PASSWORD,    // Contraseña de la base de datos
    {
        host: process.env.DB_HOST,   // Host de la base de datos
        dialect: 'mysql',             // Dialecto de la base de datos (MySQL)
        port: process.env.DB_PORT    // Puerto de la base de datos
    }
);
// Exportar la instancia de Sequelize para usarla en los modelos
module.exports = sequelize;

sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida correctamente.');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });
