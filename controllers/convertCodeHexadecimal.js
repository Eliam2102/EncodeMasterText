// Función para convertir texto a hexadecimal
function textToHexadecimal(text) {
    let hexadecimalString = "";
    for (let i = 0; i < text.length; i++) {
        let hexChar = text[i].charCodeAt(0).toString(16);
        hexadecimalString += hexChar;
    }
    return hexadecimalString;
}