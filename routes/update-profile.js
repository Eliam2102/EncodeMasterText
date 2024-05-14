//Importacion de modulos importantes
const express = require('express');
const router = express.Router();

//Exihibe la pagína al puerto destinado
router.get('/', (req, res, next) => {
    res.render('userProfile', {title: 'EncodeMasterText',});
    next()
});