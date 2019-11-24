var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Pokemon = require('../models').Pokemon;

/* Recuperar todos os Pokémons */
router.get('/', function (req, res, next) {
	console.log('Recuperando todos os Pokémons');
	Pokemon.findAndCountAll().then(resultado => {
		console.log(`${resultado.count} registros`);

		res.json(resultado.rows);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

module.exports = router;