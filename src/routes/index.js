const express = require('express');

const { errorHandler } = require('../middleware/index');

const routersInit = config => {	
	var router = express.Router();
	const router = express();

	/* GET home page. */
	router.get('/', function(req, res, next) {
		res.render('index', { title: 'Express' });
	});

	router.use(errorHandler);
	return router;
};

module.exports = routersInit;

