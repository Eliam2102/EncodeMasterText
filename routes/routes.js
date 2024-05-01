const express = require('express');
const router = express.Router();

// Importa las rutas específicas
const index = require('./index');
const login = require ('./login')

//Configura las rutas
router.use('/', index);
router.use('/login', login);

module.exports = router;