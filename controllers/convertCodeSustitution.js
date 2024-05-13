// convertCodeSustitution.js
// Esta función toma la cadena de entrada y la cifra utilizando un cifrado por sustitución
function convertCodeSustitution(text) {
    // Mapeo de sustitución
    const substitutionMap = {
        'a': 'm', 'b': 'q', 'c': 'g', 'd': 'r', 'e': 'u',
        'f': 'h', 'g': 'f', 'h': 'a', 'i': 'l', 'j': 'd',
        'k': 'p', 'l': 'n', 'm': 'j', 'n': 'v', 'o': 'i',
        'p': 'b', 'q': 'x', 'r': 'e', 's': 'y', 't': 'o',
        'u': 'k', 'v': 'c', 'w': 's', 'x': 't', 'y': 'w',
        'z': 'z',
        'A': 'M', 'B': 'Q', 'C': 'G', 'D': 'R', 'E': 'U',
        'F': 'H', 'G': 'F', 'H': 'A', 'I': 'L', 'J': 'D',
        'K': 'P', 'L': 'N', 'M': 'J', 'N': 'V', 'O': 'I',
        'P': 'B', 'Q': 'X', 'R': 'E', 'S': 'Y', 'T': 'O',
        'U': 'K', 'V': 'C', 'W': 'S', 'X': 'T', 'Y': 'W',
        'Z': 'Z',
        '!': '@', '@': '#', '#': '$', '$': '%', '%': '^',
        '^': '&', '&': '*', '*': '(', '(': ')', ')': '-',
        '-': '_', '_': '+', '+': '=', '=': '[', '[': ']',
        ']': '{', '{': '}', '}': '|', '|': ';', ';': ':',
        ':': "'", "'": '"', '"': ',', ',': '.', '.': '/',
        '/': '<', '<': '>', '>': '?', '?': '!'
    };

    // Realiza la sustitución de caracteres
    let cipherText = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        // Si el carácter está en el mapa de sustitución, reemplázalo, de lo contrario, déjalo igual
        cipherText += substitutionMap[char] || char;
    }

    return cipherText;
}

module.exports = convertCodeSustitution;
