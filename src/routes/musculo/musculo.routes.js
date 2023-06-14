const express = require('express');

const router = express.Router();

const { getMusculos, createMusculo } = require('./musculo.controller');


router.get('/', getMusculos);
router.post('/', createMusculo);

module.exports = router;