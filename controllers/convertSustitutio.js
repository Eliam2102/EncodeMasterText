function encryptSubstitution(inputString, key) {
    let encryptedData = "";
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (/[a-zA-Z]/.test(char)) {
            let index = char.toLowerCase().charCodeAt(0) - 97;
            if (char === char.toUpperCase()) {
                encryptedData += key[index].toUpperCase();
            } else {
                encryptedData += key[index];
            }
        } else {
            encryptedData += char;
        }
    }
    return encryptedData;
}
