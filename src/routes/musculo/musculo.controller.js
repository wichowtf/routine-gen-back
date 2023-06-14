const Musculo = require('../../models/musculo');

const getMusculos = async(req, res) => {
    try {
        const musculos = await Musculo.find({});
        return res.status(200).json(musculos);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Algo salió mal, intentalo de nuevo'
        })
    }
}

const createMusculo = async(req, res) => {
    const {nombre} = req.body;

    try {
        const musculo = await Musculo.create({nombre});
        return res.status(200).json(musculo)
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Algo salió mal, intentalo de nuevo'
        })
    }
}

module.exports = {
    getMusculos,
    createMusculo
}