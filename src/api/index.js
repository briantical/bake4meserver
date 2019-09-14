const express = require('express');

const { errorHandler } = require('../middleware/index');

const models = { Addons,Address,Category,Cake,Image ,Cart,Shipping,Order,OrderDetails,Payment,User, Customer } = require('../models/');

const { authController, usersController, addonsController, imageController ,categoryController,addressController, cakeController, cartController, customerController,shippingController, orderController, orderDetailsController, paymentController,
} = require('../controllers/')

const routersInit = (config, pusher) => {		
	const router = express();

	router.use('/auth', authController(models, { config ,pusher }));
	router.use('/user', usersController(models, { config ,pusher }));
	router.use('/addons', addonsController(models, { config ,pusher }));
	router.use('/address', addressController(models, { config ,pusher }));
	router.use('/cake', cakeController(models, { config ,pusher }));
	router.use('/cart', cartController(models, { config ,pusher }));
	router.use('/customer', customerController(models, { config ,pusher }));
	router.use('/category', categoryController(models, { config ,pusher }));
	router.use('/shipping', shippingController(models, { config ,pusher }));
	router.use('/order', orderController(models, { config ,pusher }));
	router.use('/orderdetails', orderDetailsController(models, { config ,pusher }));
	router.use('/payment', paymentController(models, { config ,pusher }));
	router.use('/image', imageController(models, { config ,pusher }));

	router.use(errorHandler);
	return router;
};

module.exports = routersInit;