const express = require('express');
const router = express.Router();

// Importa las rutas específicas
const index = require('./index');
const login = require('./login');
const sigin = require('./sigin');
const userRegister = require('./user-register');
const cypher = require('./cypher');
//const updateProfile = require('./update-profile');



//Configura las rutas
router.use('/', index);
router.use('/login', login);
router.use('/sigin', sigin);
router.use('/user-register', userRegister);
router.use('/cypher', cypher);
//router.use('/update-profile', updateProfile);


module.exports = router;