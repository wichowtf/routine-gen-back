const mongoose = require('mongoose');

const clienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    entrenamiento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Entrenamiento'
    }
})

module.exports = mongoose.model('Cliente', clienteSchema);