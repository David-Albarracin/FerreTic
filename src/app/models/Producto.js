const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    codigoBarras: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    persona: {
        type: String,
        required: true
    },
    precioVenta: {
        type: Number,
        required: true
    },
    stockMin: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Producto', ProductoSchema);