const modelo = require('../database/tables/user');

class Usuario{
    constructor(id, nombre, email, password_hash)
    {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password_hash = password_hash;
    }
}


async function registrarUsuario(nombre, email, password) {
    try {
        await modelo.registrar(nombre, email, password);
        console.log('Usuario registrado correctamente');
    } catch (error) {
        console.error('Error al registrar usuario:', error);
    }
}

async function obtenerPorNombre(nombre) {
    try {
        const usuario = await modelo.obtenerPorNombre(nombre);
        if (usuario) {
            return new Usuario(usuario.id, usuario.nombre, usuario.email, usuario.password_hash)
        } else {
            console.log('Usuario no encontrado');
        }
    } catch (error) {
        console.error('Error al buscar usuario por nombre:', error);
    }
}

async function obtenerPorId(id) {
    try {
        const usuario = await modelo.obtenerPorId(id);
        if (usuario) {
            return new Usuario(usuario.id, usuario.nombre, usuario.email, usuario.password)
        } else {
            console.log('Usuario no encontrado');
        }
    } catch (error) {
        console.error('Error al buscar usuario por ID:', error);
    }
}

module.exports = {
    registrarUsuario,
    obtenerPorNombre,
    obtenerPorId
};