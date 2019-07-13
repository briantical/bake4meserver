const express = require('express');

const { errorHandler } = require('../middleware/index');

const models = { Addons,Address,Cake,Cart,Delivery,Flavour,Order,OrderDetails,Payment,User } = require('../models/');

const { authController, usersController, addonsController, addressController, cakeController, cartController, deliveryController, flavourController, orderController, orderDetailsController, paymentController,
} = require('../controllers/')

const routersInit = config => {		
	const router = express();

	router.use('/auth', authController(models, { config }));
	router.use('/users', usersController(models, { config }));
	router.use('/addons', addonsController(models, { config }));
	router.use('/address', addressController(models, { config }));
	router.use('/cake', cakeController(models, { config }));
	router.use('/cart', cartController(models, { config }));
	router.use('/delivery', deliveryController(models, { config }));
	router.use('/flavour', flavourController(models, { config }));
	router.use('/order', orderController(models, { config }));
	router.use('/orderDetails', orderDetailsController(models, { config }));
	router.use('/payment', paymentController(models, { config }));
	
	router.use(errorHandler);
	return router;
};

module.exports = routersInit;

