//Funcion para cifrar a binario
function convertCodeBinario(text) {
    let binary = '';
    for (let i = 0; i < text.length; i++) {
        // Obtiene el (Código Estándar Estadounidense para el Intercambio de Información) de cada caracter
        let code = text.charCodeAt(i);
        // Convierte el (Código Estándar Estadounidense para el Intercambio de Información)
        let binaryChar = code.toString(2).padStart(8, '0');
        // Agrega el binaria a la los cracteres binarios.
        binary += binaryChar;
    }
    return binary;
}

module.exports = convertCodeBinario;