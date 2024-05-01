
function encryptCaesar(inputString, shift) {
    let encryptedData = "";
    for (let i = 0; i < inputString.length; i++) {
        let charCode = inputString.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            encryptedData += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            encryptedData += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
        } else {
            encryptedData += inputString[i];
        }
    }
    return encryptedData;
}
