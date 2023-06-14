const Cliente = require('../../models/cliente');
const Entrenamiento = require('../../models/entrenamiento');

const getCliente = async(req, res) => {
    const {id} = req.params;

    try {
        const cliente = await Cliente.findById(id).populate('entrenamiento');
        return res.status(200).json(cliente);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Algo salió mal, intentalo de nuevo'
        })
    }
}
const getClientes = async(req, res) => {
    try {
        const clientes = await Cliente.find({}).populate('entrenamiento');
        return res.status(200).json(clientes);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Algo salió mal, intentalo de nuevo'
        })
    }
}
const createCliente = async(req, res) => {
    const {nombre, edad, peso, telefono, entrenamiento} = req.body;

    try {
        const cliente = await Cliente.create(req.body);
        return res.status(200).json(cliente);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Algo salió mal, intentalo de nuevo'
        })
    }
}
const updateCliente = async(req, res) => {
    const {id} = req.params;
    const {nombre, edad, peso, telefono, entrenamiento} = req.body;

    try {
        const cliente = await Cliente.findByIdAndUpdate(id, req.body, {new: true}).populate('entrenamiento');
        return res.status(200).json(cliente);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Algo salió mal, intentalo de nuevo'
        })
    }
}
const deleteCliente = async(req, res) => {
    const {id} = req.params;

    try {
        const cliente = await Cliente.findById(id);
        const entrenamientoDeleted = await Entrenamiento.findByIdAndDelete(cliente.entrenamiento);
        const clienteDeleted = await Cliente.findByIdAndDelete(id);
        return res.status(200).json({clienteDeleted, entrenamientoDeleted});
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Algo salió mal, intentalo de nuevo'
        })
    }
}

module.exports = {
    getCliente,
    getClientes,
    createCliente,
    updateCliente,
    deleteCliente
}