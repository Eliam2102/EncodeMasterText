const express = require('express');
const app = express();

// Obtiene la ip
let attemptsCypher = {};

// Middleware para el logueo del usuario
function attemptCypher(req, res, next) {
// Verifica si el usuario está autenticado
  if (req.isAuthenticated()) {
    return next();
  }
  
  const ip = req.ip; //obtenemos la direccion IP

  // hacemos check si esta iniciado el contador en esa misma IP
  if (attemptsCypher[ip] === undefined) {
    attemptsCypher[ip] = 0;
  } else {
    // Agregamos 1 si lo esta
    attemptsCypher[ip]++;
  }

  // Vverifiacion de los intentos que no sea mayor a 3
  const limitAttempts = 4;
  if (attemptsCypher[ip] > limitAttempts) {
    // si se pasa, le pide registarse
    return res.redirect('/login');
  }
  // Si no se ha excedido el límite de intentos, pasa al siguiente middleware
  next();
}

module.exports = attemptCypher;