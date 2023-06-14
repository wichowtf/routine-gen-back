const mongoose = require('mongoose');

const EjercicioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del ejercicio es necesario']
    },
    link: {
        type: String,
        required: [true, 'El link es necesario']
    },
    musculo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Musculo',
        required: true
    },
    grupoMuscular: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'GrupoMuscular',
        required: true
    }
})

module.exports = mongoose.model('Ejercicio', EjercicioSchema);