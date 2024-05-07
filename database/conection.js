const mysql2 = require('mysql2');
const dotenv = require('dotenv');

//Permite la configuración de DontEnv
dotenv.config();

//Creación de la conecxión a la BD
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


//Usamos un apromesa para traer la conexión
function obtenerConexion(){
    return pool.promise().getConnection();
}

//Exportamos para poder usar en otras partes
module.exports = {
    obtenerConexion
}