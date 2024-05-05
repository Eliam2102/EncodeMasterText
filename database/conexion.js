const mysql2 = require('mysql2');
const dotenv = require('dotenv');

// Configura DotEnv
dotenv.config();

// Usamos pool para la conexión a la base de datos.
const pool = mysql2.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Obtenemos la conexión mediante pool
function obtenerConexion() {
    return pool.promise().getConnection()
        .then(connection => {
            console.log('Conexión exitosa a la base de datos');
            return connection;
        })
        .catch(error => {
            console.error('Error al conectar a la base de datos:', error.message);
            throw error;
        });
}

module.exports = {
    obtenerConexion
};
