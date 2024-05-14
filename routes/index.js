const express = require('express');
const router = express.Router();
const convertCodeBase64 = require('../controllers/convertCodeBase64');
const convertCodeBinario = require('../controllers/convertCodeBinario');
const convertCodeCesar = require('../controllers/convertCodeCesar');
const convertCodeHexadecimal = require('../controllers/convertCodeHexadecimal');
const convertCodeSustitution = require('../controllers/convertCodeSustitution');
const checkMiddleware = require ('../middlewares/checkMiddleware');
const countMiddleware = require ('../middlewares/countMiddleware');
const textosCodificados = require ('../database/tables/textosCodificados')




//Exihibe la pagína al puerto destinado
router.get('/', (req, res, next) => {
    res.render('index', {title: 'EncodeMasterText',});
    next()
});

// Ruta para manejar la solicitud POST desde el formulario
router.post('/cypher', checkMiddleware, countMiddleware, async (req, res) => {
    // Obtener el texto ingresado desde el formulario
    const textoEntrada = req.body.textoEntrada;
    const tipoCifrado = req.body.tipoCifrado;
    const vueltasCifrado = req.body.vueltasCifrado;
  
    let encryptedText;
    // Ejecutar la función correspondiente según la opción seleccionada
    switch(tipoCifrado) {
      case 'base64':
        encryptedText = convertCodeBase64(textoEntrada);
        break;
      case 'cesar':
        encryptedText = convertCodeCesar(textoEntrada, vueltasCifrado);
        break;
      case 'sustitucion':
        encryptedText = convertCodeSustitution(textoEntrada);
        break;
      case 'binario':
        encryptedText = convertCodeBinario(textoEntrada);
        break;
      case 'hexadecimal':
        encryptedText = convertCodeHexadecimal(textoEntrada);
        break;
      default:
        encryptedText = 'Selecciona algún tipo de cifrado';
    }
    // Llama a la función para registrar el movimiento
    try {
      const usuario_id = req.user ? req.user.id : null; // Obtener el ID del usuario si está autenticado
      await textosCodificados(usuario_id, textoEntrada, encryptedText, tipoCifrado);
      console.log('Transacción exitosa');
    } catch (error) {
      console.error('Error en transacción', error);
    }

    // Renderiza la vista index con el texto cifrado
    res.render('index', { title: 'EncodeMasterText', textoEntrada: textoEntrada, textoSalida: encryptedText });
  });


  // Rutas protegidas
router.get('/user-profile', (req, res) => {
  res.render('user-profile', { usuario: req.user });
});
module.exports = router;