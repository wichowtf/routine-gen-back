const GrupoMuscular = require('../../models/grupoMuscular');

const getGruposMusculares = async(req, res) => {
    try {
        const gruposMusculares = await GrupoMuscular.find({});
        return res.status(200).json(gruposMusculares);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Algo salió mal, intentalo de nuevo'
        })
    }
}

const createGrupoMuscular = async(req, res) => {
    const {nombre, musculo} = req.body;

    try {
        const gruposMusculares = await GrupoMuscular.create({nombre, musculo})
        return res.status(200).json(gruposMusculares);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Algo salió mal, intentalo de nuevo'
        })
    }
}

module.exports = {
    getGruposMusculares,
    createGrupoMuscular
}