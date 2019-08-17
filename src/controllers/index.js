const authController = require('./auth');
const usersController = require('./users');
const addonsController = require('./addons');
const addressController = require('./address');
const cakeController = require('./cake');
const cartController = require('./cart');
const shippingController = require('./shipping');
const categoryController = require('./category');
const orderController = require('./order');
const orderDetailsController = require('./orderDetails');
const paymentController = require('./payment');

module.exports = { authController, usersController, addonsController, categoryController,addressController, cakeController, cartController, shippingController, orderController, orderDetailsController, paymentController,
};

