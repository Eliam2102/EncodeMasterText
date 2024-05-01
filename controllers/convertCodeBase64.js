function encryptBase64(inputString, rounds) {
    let encryptedData = inputString;
    for (let i = 0; i < rounds; i++) {
        encryptedData = Buffer.from(encryptedData).toString('base64');
    }
    return encryptedData;
}
