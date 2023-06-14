const express = require('express');

const router = express.Router();

const {getGruposMusculares, createGrupoMuscular} = require('./grupoMuscular.controller');

router.get('/', getGruposMusculares);
router.post('/', createGrupoMuscular);

module.exports = router;