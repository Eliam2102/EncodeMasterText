    // routes/user-register.js
    const express = require('express');
    const router = express.Router();
    const usuarios = require('../database/user');
    const authMiddleWare = require('../middlewares/authMiddleware');

    // Ruta para manejar el registro de usuarios
    router.post('/', async (req, res) => {
        const { name, email, firstpassword, secondPassword } = req.body;

        // CIclo para validar el acceso
        if ( firstpassword !== secondPassword) {
            return res.status(400).send('Las contraseñas no coinciden');
        }

        try {
            // Verificar si el usuario ya está registrado
            const usuarioExistente = await usuarios.obtenerPorNombre(name);
            if (usuarioExistente) {
                return res.status(400).send('El usuario ya está registrado');
            }

            // HContraseña hasheada
            const hashedPassword = await authMiddleWare.getHash(password);

            // Registrar usuario en DB
            await usuarios.userRegister(name, email, hashedPassword);

            // En caso de ser registrado correctamente debe enviarte al index
            res.redirect('/login');
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Error interno del servidor');
        }
    });

    module.exports = router;