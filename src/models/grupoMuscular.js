const mongoose = require('mongoose');

const GrupoMuscularSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del grupo muscular es necesario']
    },
    musculo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Musculo',
        required: true
    }
})

module.exports = mongoose.model('GrupoMuscular', GrupoMuscularSchema);