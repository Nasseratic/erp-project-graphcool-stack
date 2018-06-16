const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');



const bodyParse = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({
	extended: false
});

// remove Powered by express
const removePowered = (req, res, next) => {
	res.header("X-Powered-By", "DotDev:Mohamed");
	next();
};

// handel server errors  
const handleErrors = (err, req, res, next) => {
	if (err.message) {
		res.end(err.message);
	} else {
		res.end("UNKOWNEN ERROR");
	}
};

// Handle 404
const handle404 = (req, res) => {
	res.status(404).json({
		message: '404: Page not Found',
		status: "fail"
	});
};

// Handle 500
const handle500 = (req, res) => {
	res.status(500).json({
		message: '500: Server Error',
		status: "fail"
	});
};


// CORS
const CROS = (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, x-token , Content-Type, Accept");
	next();
};


module.exports = {
	CROS,
	handleErrors,
	handle404,
	handle500,
	removePowered,
	bodyParse,
	urlencodedParser
}