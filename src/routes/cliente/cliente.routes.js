const express = require('express');

const router = express.Router();

const { getCliente, getClientes, createCliente, deleteCliente, updateCliente } = require('./cliente.controller');

router.get('/:id', getCliente);
router.get('/', getClientes);
router.post('/', createCliente);
router.put('/:id', updateCliente);
router.delete('/:id', deleteCliente);

module.exports = router;