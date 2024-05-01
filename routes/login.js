const express = require('express');
const router = express.Router();

//renderizar al puerto que ya estan las otras views
router.get('/', (req, res, next) => {
    res.render('login', {title: 'INGRESA UNA CUENTA'});
    next()
  });

module.exports = router; 