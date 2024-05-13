//Importaciones Necesarias de modulos y middlewares
const express = require('express');
const router = express.Router();
const attemptCypher = require('./countMiddleware');
const  {authenticate} = require('./authMiddleware');

// Middleware para verificar si el usuario está autenticado
function checkAuth(req, res, next) {
  if (req.isAuthenticated()) {
    // Si el usuario está autenticado, pasa al siguiente middleware
    return next();
  } else {
    // Si el usuario no está autenticado, aplica el middleware de limitación de intentos
    return attemptCypher(req, res, next);
  }
}

module.exports = checkAuth;