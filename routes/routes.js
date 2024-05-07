const express = require('express');
const router = express.Router();

// Importa las rutas específicas
const index = require('./index');
const login = require ('./login');
const sigin = require ('./sigin');
const userRegister = require('./user-register');

//Configura las rutas
router.use('/', index);
router.use('/login', login);
router.use('/sigin', sigin);
router.use('/user-register', userRegister);

module.exports = router;