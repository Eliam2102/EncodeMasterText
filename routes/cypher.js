//importaciones Necesarias
const express = require('express');
const router = express.Router();
const convertCodeBase64 = require('../controllers/convertCodeBase64');
const convertCodeBinario = require('../controllers/convertCodeBinario');
const convertCodeCesar = require('../controllers/convertCodeCesar');
const convertCodeHexadecimal = require('../controllers/convertCodeHexadecimal');
const convertCodeSustitution = require('../controllers/convertCodeSustitution');

// Ruta del metodo Post apuntando a encrypt desde le formulario.
router.post('/cypher', (req, res) =>{
    try {
        const textoEntrada = req.body.textoEntrada;
        const tipoCifrado = req.body.tipoCifrado;
        const vueltasCifrado  = req.bosy.vueltasCifrado;

        if (!tipoCifrado || !vueltasCifrado || !textoEntrada) {
            throw new Error('Los Datos introducidos no son validos');
        }

        let encryptedText

        if (tipoCifrado == 'base64'){
            encryptedText = convertCodeBase64 (textoEntrada);
        }else {
            //Error al cifrar en base64
            throw new Error('No válida para cifrar en Base64');
        }
        if (tipoCifrado == 'cesar'){
            encryptedText = convertCodeCesar (textoEntrada, vueltasCifrado);
        }else {
            //Error al cifrar en base64
            throw new Error('No valida para cifrar en cesar');
        }
        if (tipoCifrado == 'binario'){
            encryptedText = convertCodeBinario (textoEntrada);
        }else {
            //Error al cifrar en binario
            throw new Error('No valida para texto binario');
        }
        if (tipoCifrado == 'sustitucion'){
            encryptedText = convertCodeSustitution (textoEntrada);
        }else {
            //Error al cifrar en sustitucion
            throw new Error('No valida para sustitución');
        }
        if (tipoCifrado == 'hexadecimal'){
            encryptedText = convertCodeHexadecimal (textoEntrada);
        }else {
            //Error al cifrar en hexadecimal
            throw new Error('No valida para hexadecimal');
        }
        //mandar el texto ya cifrado al segundo textarea o al output
        res.render('index',{ textoEntrada: textoEntrada, textoSalida : encryptedText});
    }catch (error) {
        // Manejar errores
        console.error(error);
        res.status(400).send('Error');
    }
});


module.exports = router;
