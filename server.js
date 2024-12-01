// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./config/database'); // Cambia esto, ya no desestructures
const clienteRoutes = require('./routes/clienteRoutes');
const especialistaRoutes = require('./routes/especialistaRoutes');
const pagoRoutes = require('./routes/pagoRoutes');
const reservaRoutes = require('./routes/reservaRoutes');
const servicioRoutes = require('./routes/servicioRoutes');
const satisfaccionRoutes = require('./routes/satisfaccionRoutes');

// Cargar variables de entorno
dotenv.config(); // Asegúrate de cargar las variables de entorno
const PORT = process.env.PORT || 3000; // Si no está definida en .env, usa 3000 como valor por defecto

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/clientes', clienteRoutes);
app.use('/api/especialistas', especialistaRoutes);
app.use('/api/pagos', pagoRoutes);
app.use('/api/reservas', reservaRoutes);
app.use('/api/servicios', servicioRoutes);
app.use('/api/satisfacciones', satisfaccionRoutes);

// Conectar a la base de datos y levantar el servidor
sequelize.sync() // Aquí ya puedes usar sequelize directamente
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en puerto ${PORT}`);
        });
    })
    .catch((err) => {
    console.error('Error al conectar con la base de datos:', err);
    });
