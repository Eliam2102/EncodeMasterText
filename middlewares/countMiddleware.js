//importamos los modulos necesarios
const express = require('express');
const app = express();

// Obtiene la ip
let attemptsCypher = {};

// Middleware 
function attemptCypher(req, res, next) {
// Verifica si el usuario está autenticado
  if (req.isAuthenticated()) {
    return next();
  }
  
  const ip = req.ip; //Obtenemos la direccion para poder concretar cunatos intentos lleva dicho

  // Verificación si ya ha sido inicializado con esa Ip
  if (attemptsCypher[ip] === undefined) {
    attemptsCypher[ip] = 1
  } else {
    attemptsCypher[ip]++;
  }

  // Verificación si el usuarios con esa IP ha excedido de los 3 intentos
  const attemptsLimit = 3;
  if (attemptsCypher[ip] > attemptsLimit) {
    // Después del tercer intento redirigimos al /sigin
    return res.redirect('/sigin');
  }
  //No lleva mas de tres intentos
  next();
}

module.exports = attemptCypher;