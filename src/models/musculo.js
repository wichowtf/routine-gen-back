const mongoose = require('mongoose');

const MusculoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del músculo es necesario']
    }
})

module.exports = mongoose.model('Musculo', MusculoSchema);