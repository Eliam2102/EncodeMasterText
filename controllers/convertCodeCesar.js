const express = require('express');

function convertCodeCesar(texto, vueltasCifrado) 
{
    const codes = [];
    const longitudAlfabeto = 27;  
    for (let i = 0; i < texto.length; i++) 
    {
      let codeCesar = texto.charCodeAt(i) + (vueltasCifrado % longitudAlfabeto);
      if (texto[i] >= 'a' && texto[i] <= 'z') {
        if (codeCesar > 122) {
          codeCesar -= 27;
        } else if (codeCesar < 97) {
          codeCesar += 27;
        }
      } else if (texto[i] >= 'A' && texto[i] <= 'Z') 
        {
        if (codeCesar > 90) {
          codeCesar -= 27;
        } else if (codeCesar < 65) 
        {
          codeCesar += 27;
        }
      }
      codes.push(codeCesar);
    }
    return String.fromCharCode(...codes);
}
 
module.exports = convertCodeCesar;