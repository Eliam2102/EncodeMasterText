//Importaciones Necesarias de modulos y middlewares
const express = require('express');
const router = express.Router();
const attemptCypher = require('./countMiddleware');
const  {authenticate} = require('./authMiddleware');

// funcion para verificar si esta autenticado
function checkAuth(req, res, next) {
  if (req.isAuthenticated()) {
    // si esta continua al sig
    return next();
} else {
    // si no esta logueado. limitamos intentos
    return attemptCypher(req, res, next);
  }
}

module.exports = checkAuth;
