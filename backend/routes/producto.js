// Rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// api/productos
router.post('https://ferretic.herokuapp.com//', productoController.crearProducto);
router.get('https://ferretic.herokuapp.com//', productoController.obtenerProductos);
router.put('https://ferretic.herokuapp.com//:id', productoController.actualizarProducto);
router.get('https://ferretic.herokuapp.com//:id', productoController.obtenerProducto);
router.delete('https://ferretic.herokuapp.com//:id', productoController.eliminarProducto);

module.exports = router;