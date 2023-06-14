const Ejercicio = require('../../models/ejercicio');

const getEjercicios = async(req, res) => {
    try {
        const ejercicios = await Ejercicio.find({}).populate('grupoMuscular musculo');
        return res.status(200).json(ejercicios);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Algo salió mal, intentalo de nuevo'
        })
    }
}

const createEjercicio = async(req, res) => {
    const {nombre, link, musculo, grupoMuscular} = req.body;

    if(!grupoMuscular || !musculo){
        return res.status(400).json({
            msg: 'El grupo muscular o musculo no son correctos'
        })
    }

    try {
        const ejercicio = await Ejercicio.create({nombre, link, musculo, grupoMuscular});
        const ejercicioPopulado = await Ejercicio.findOne({nombre}).populate('grupoMuscular musculo');
        return res.status(200).json(ejercicioPopulado);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Algo salió mal, intentalo de nuevo'
        })
    }
}

const actualizarEjercicio = async(req, res) => {
    const {id} = req.params;
    const {nombre, link, musculo, grupoMuscular} = req.body;

    try {
        const ejercicio = await Ejercicio.findByIdAndUpdate(id, {nombre, link, musculo, grupoMuscular}, {new: true}).populate('grupoMuscular musculo');
        return res.status(200).json(ejercicio)
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Algo salió mal, intentalo de nuevo'
        }) 
    }
}

const borrarEjercicio = async(req, res) => {
    const {id} = req.params;

    try {
        const ejercicio = await Ejercicio.findByIdAndDelete(id);
        return res.status(200).json(ejercicio);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Algo salió mal, intentalo de nuevo'
        })
    }
}

module.exports = {
    getEjercicios,
    createEjercicio,
    actualizarEjercicio,
    borrarEjercicio
}