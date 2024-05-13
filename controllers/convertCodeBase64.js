// convertEncodeBase64.js
// Funcion para cifrar cadena de texto  a base64
function convertCodeBase64(text) {
    // Codifica la cadena de texto de entrada en Base64
    return Buffer.from(text).toString('base64');
}
module.exports = convertCodeBase64;