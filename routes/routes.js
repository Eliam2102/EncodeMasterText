const express = require('express');
const router = express.Router();

// Importa las rutas específicas
const index = require('./index');
const login = require ('./login');
const sigin = require ('./sigin');
const userRegister = require('./user-register');

// Importacion de la función de cifrado
const { encryptBase64 } = require('../controllers/convertCodeBase64');

// Ruta para el cifrado
router.post('/encrypt', (req, res) => {
    // Extrae los datos del cuerpo de la solicitud
    const { text, encryptionType, rounds } = req.body;

    // Realiza el cifrado según el tipo de cifrado seleccionado
    let encryptedText;
    switch (encryptionType) {
        case 'base64':
            encryptedText = encryptBase64(text, rounds);
            break;
        // Puedes agregar más casos para otros tipos de cifrado aquí
        default:
            encryptedText = 'Tipo de cifrado no válido';
    }

    // Envía el texto cifrado como respuesta
    res.send(encryptedText);
});

//Configura las rutas
router.use('/', index);
router.use('/login', login);
router.use('/sigin', sigin);
router.use('/user-register', userRegister);

module.exports = router;