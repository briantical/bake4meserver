const express = require('express');

const { errorHandler } = require('../middleware/index');

const models = { Addons,Address,Category,Cake ,Cart,Shipping,Order,OrderDetails,Payment,User, Customer , Product, Supplier, Snack} = require('../models/');

const { authController, usersController, addonsController ,categoryController,addressController, cakeController, cartController, customerController,shippingController, orderController, orderDetailsController, paymentController, productController, supplierController,snackController
} = require('../controllers/')

const routersInit = (config, pusher) => {		
	const router = express();

	router.use('/auth', authController(models, { config ,pusher }));
	router.use('/user', usersController(models, { pusher }));
	router.use('/addon', addonsController(models, { config ,pusher }));
	router.use('/address', addressController(models, { config ,pusher }));
	router.use('/cake', cakeController(models, { config ,pusher }));
	router.use('/cart', cartController(models, { config ,pusher }));
	router.use('/customer', customerController(models, { config ,pusher }));
	router.use('/category', categoryController(models, { config ,pusher }));
	router.use('/shipping', shippingController(models, { config ,pusher }));
	router.use('/order', orderController(models, { config ,pusher }));
	router.use('/orderdetail', orderDetailsController(models, { config ,pusher }));
	router.use('/payment', paymentController(models, { config ,pusher }));
	router.use('/product', productController(models, { config ,pusher }));
	router.use('/supplier', supplierController(models, { config ,pusher }));
	router.use('/snack', snackController(models, { config ,pusher }));

	router.use(errorHandler);
	return router;
};

module.exports = routersInit;