const authController = require("./auth");
const usersController = require("./users");
const addonsController = require("./addons");
const cakeController = require("./cake");
const cartController = require("./cart");
const categoryController = require("./category");
const orderController = require("./order");
const paymentController = require("./payment");
const snackController = require("./snack");

module.exports = {
  authController,
  usersController,
  addonsController,
  categoryController,
  cakeController,
  cartController,
  orderController,
  paymentController,
  snackController
};
