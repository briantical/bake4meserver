const express = require('express');

const { errorHandler } = require('../middleware/index');

const models = { Addons,Address,Category,Cake,Image ,Cart,Shipping,Order,OrderDetails,Payment,User, Customer } = require('../models/');

const { authController, usersController, addonsController, imageController ,categoryController,addressController, cakeController, cartController, customerController,shippingController, orderController, orderDetailsController, paymentController,
} = require('../controllers/')

const routersInit = config => {		
	const router = express();

	router.use('/auth', authController(models, { config }));
	router.use('/user', usersController(models, { config }));
	router.use('/addons', addonsController(models, { config }));
	router.use('/address', addressController(models, { config }));
	router.use('/cake', cakeController(models, { config }));
	router.use('/cart', cartController(models, { config }));
	router.use('/customer', customerController(models, { config }));
	router.use('/category', categoryController(models, { config }));
	router.use('/shipping', shippingController(models, { config }));
	router.use('/order', orderController(models, { config }));
	router.use('/orderdetails', orderDetailsController(models, { config }));
	router.use('/payment', paymentController(models, { config }));
	router.use('/image', imageController(models, { config }));

	router.use(errorHandler);
	return router;
};

module.exports = routersInit;