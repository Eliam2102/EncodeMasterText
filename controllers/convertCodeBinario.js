// Función para convertir texto a binario
function textToBinary(text) {
    let binaryString = "";
    for (let i = 0; i < text.length; i++) {
        let binaryChar = text[i].charCodeAt(0).toString(2);
        binaryString += "0".repeat(8 - binaryChar.length) + binaryChar;
    }
    return binaryString;
}