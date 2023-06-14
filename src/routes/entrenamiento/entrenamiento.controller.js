const Entrenamiento = require('../../models/entrenamiento');


const createEntrenamiento = async(req, res) => {
    let sesiones = [];
    const arr = req.body;

    arr.forEach((element, index) => {
        sesiones.push({
            number: index + 1,
            sesion: element
        })
    });

    try {
        const entrenamiento = await Entrenamiento.create({sesiones});
        return res.status(200).json(entrenamiento)
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Algo salió mal, intentalo de nuevo'
        })
    }
}

const updateEntrenamiento = async(req, res) => {
    const {id} = req.params;
    let sesiones = [];
    const arr = req.body;

    arr.forEach((element, index) => {
        sesiones.push({
            number: index + 1,
            sesion: element
        })
    });

    

    try {
        const entrenamiento = await Entrenamiento.findByIdAndUpdate(id, {sesiones}, {new: true});
        return res.status(200).json(entrenamiento)
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Algo salió mal, intentalo de nuevo'
        })
    }

}

module.exports = {
    createEntrenamiento,
    updateEntrenamiento
}