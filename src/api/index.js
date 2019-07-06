const express = require('express');

const { errorHandler } = require('../middleware/index');

const { Addons,Address,Cake,Cart,Delivery,Flavour,Order,OrderDetails,Payment,User } = require('../models/');

const auth = require('../controllers/auth');
const users = require('../controllers/users');

const models = { Addons,Address,Cake,Cart,Delivery,Flavour,Order,OrderDetails,Payment,User };

const routersInit = config => {	
	//var router = express.Router();
	const router = express();

	router.use('/auth', auth(models, { config }));
	router.use('/users', users(models, { config }));
	
	router.use(errorHandler);
	return router;
};

module.exports = routersInit;

