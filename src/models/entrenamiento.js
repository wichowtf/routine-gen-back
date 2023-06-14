const mongoose = require('mongoose');

const entrenamientoSchema = mongoose.Schema({
    sesiones: [{
        number: Number,
        sesion: [{
                categoria: String,
                musculo: String,
                ejercicio: String,
                notas: String,
                descanso: String,
                series: Number,
                repeticiones: String,
                rir: String,
                url: String,
                tipo: String
        }]
    }]
})

module.exports = mongoose.model('Entrenamiento', entrenamientoSchema);