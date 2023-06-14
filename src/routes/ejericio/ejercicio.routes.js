const express = require('express');

const router = express.Router();

const { getEjercicios, createEjercicio, actualizarEjercicio, borrarEjercicio } = require('./ejercicio.controller');


router.get('/', getEjercicios);
router.post('/', createEjercicio);
router.put('/:id', actualizarEjercicio);
router.delete('/:id', borrarEjercicio);

module.exports = router;