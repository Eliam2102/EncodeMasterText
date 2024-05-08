const { obtenerConexion } = require('./conection');

// Función para insertar un nuevo usuario en la base de datos MySQL
async function userRegister(name, email, firstpassword) {
    const conexion = await obtenerConexion();
    try {
        await conexion.query('INSERT INTO usuarios (name, email, password_hash) VALUES (?, ?, ?)', [name, email, firstpassword]);
        console.log('Usuario insertado correctamente');
    } catch (error) {
        console.error('Error al insertar usuario:', error);
        throw error;
    } finally {
        conexion.release(); //Optamos por un mejor Performance
    }
}

// Función para obtener un usuario por su nombre de usuario
async function obtenerPorNombre(name) {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM usuarios WHERE name = ?', [name]);
        return results[0];
    } catch (error) {
        console.error('Error al obtener usuario por nombre:', error);
        throw error;
    } finally {
        conexion.release();
    }
}

// Función para obtener un usuario en especifico por su ID
async function obtenerPorId(id) {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        return results[0];
    } catch (error) {
        console.error('Error al obtener usuario por ID:', error);
        throw error;
    } finally {
        conexion.release();
    }
}

module.exports = {
    userRegister,
    obtenerPorNombre,
    obtenerPorId
};