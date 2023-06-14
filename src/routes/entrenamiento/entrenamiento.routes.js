const express = require('express');

const router = express.Router();

const { createEntrenamiento, updateEntrenamiento} = require('./entrenamiento.controller');


router.post('/', createEntrenamiento);
router.put('/:id', updateEntrenamiento);

module.exports = router;