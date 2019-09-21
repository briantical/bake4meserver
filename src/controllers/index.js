const authController = require('./auth');
const usersController = require('./users');
const addonsController = require('./addons');
const addressController = require('./address');
const cakeController = require('./cake');
const cartController = require('./cart');
const customerController = require('./customer');
const shippingController = require('./shipping');
const categoryController = require('./category');
const orderController = require('./order');
const orderDetailsController = require('./orderDetails');
const paymentController = require('./payment');
const productController = require('./product');
const supplierController = require('./supplier');

module.exports = { authController, usersController, productController, supplierController ,addonsController,categoryController,addressController, cakeController, cartController, customerController, shippingController, orderController, orderDetailsController, paymentController,
};

