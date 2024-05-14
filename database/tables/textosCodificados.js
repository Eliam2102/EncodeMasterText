// Se obtiene la conexión
const { obtenerConexion } = require('../conection');

// Se crea una función para insertar los movimientos
async function textosCodificados(usuario_id, textoEntrada, encryptedText,tipoCifrado) {
    // Verificar si el usuario ha iniciado sesión
    if (!usuario_id) {
        console.error('Error: Para poder crear un Historial el usuario debera estar logueado');
        return; // Salir de la función sin realizar la consulta a la base de datos
    }

    const conexion = await obtenerConexion();
    try {
        await conexion.query('INSERT INTO textos_codificados(usuario_id, origin_text, encode_text, encode_type ) VALUES (?, ?, ?, ?)',
            [usuario_id, textoEntrada, encryptedText,tipoCifrado]
        );
        console.log('Transacción exitosa');
    } catch (error) {
        console.error('Error en transacción', error);
        throw error;
    } finally {
        conexion.release(); 
    }
}

module.exports = textosCodificados;
