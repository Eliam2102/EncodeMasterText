// Esta función toma una cadena de entrada y la cifra en base64 repetidamente según el número de rondas especificado
function encryptBase64(inputString, rounds) {
    // Inicializa la variable encryptedData con la cadena de entrada
    let encryptedData = inputString;
    // Itera sobre el número de rondas especificado
    for (let i = 0; i < rounds; i++) {
        // Codifica la cadena de datos cifrados en base64 y actualiza encryptedData con el resultado
        // La codificación se realiza con el formato 'utf-8'
        encryptedData = Buffer.from(encryptedData, 'utf-8').toString('base64');
    }
    // Retorna la cadena cifrada en base64 después de todas las rondas
    return encryptedData;
}

// Exporta la función encryptBase64 para que esté disponible para su uso en otros archivos
module.exports = { encryptBase64 };
    