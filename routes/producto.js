// Rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// api/productos
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.obtenerProducto);
router.delete('/:id', productoController.eliminarProducto);


const userController = require('../controllers/UserController');

router.post('/registro', userController.registrarUsuario);
router.post('/login', userController.loginUsuario);
router.get('/public', userController.public);
router.get('/private', userController.private);
router.get('/profile', userController.virificaToken, (req, res)=>{
    res.send(req.userId);
});

module.exports = router;