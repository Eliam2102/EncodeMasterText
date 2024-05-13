//Obtenemos la conexion
const { obtenerConexion } = require('../conection');

// Función para insertar el movimineto de usuarios (textoEntrada- textoSalida)
async function registrarMovimiento (usuario_id, textoEntrada, tipoCifrado, encryptedText){
    const conexion = await obtenerConexion();
    try{
        await conexion.query('INSERT INTO Textos_Codificados (usuario_id, origin_text, encode_type, encode_text, ) VALUES (?, ?, ?, ?)', [usuario_id, textoEntrada, tipoCifrado, encryptedText]);
        console.log('Movimiento Guardado correctamente');
    }catch (error){
        console.error('Error al registrar movimiento', error);
        throw error;
    } finally {
        conexion.release();
    }
}




module.exports = {
    registrarMovimiento
}