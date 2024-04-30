const express = require('express');
const router = express.Router();

//Exihibe la pagína al puerto destinado
router.get('/', (req, res, next) => {
    res.render('index', {title: 'BIENVENIDOS'});
    next()
});

module.exports = router;