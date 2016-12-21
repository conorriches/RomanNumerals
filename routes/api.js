var express = require('express');
var router = express.Router();
var romanNumerals = require("../libraries/RomanNumeralGenerator.js");

/* GET request to parse roman and produce number */
router.get('/parse/:roman', function(req, res, next) {
	var result = romanNumerals.parse(req.params.roman);
	res.send(result);
});

/* GET request to convert number to roman */
router.get('/convert/:number', function(req, res, next) {
	var result = romanNumerals.generate(parseInt(req.params.number));
	res.send(result);
});

module.exports = router;
