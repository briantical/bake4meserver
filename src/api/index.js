const express = require("express");

const { errorHandler } = require("../middleware/index");

const models = ({
  Addons,
  Category,
  Cake,
  Cart,
  Order,
  Payment,
  User,
  Snack
} = require("../models/"));

const {
  authController,
  usersController,
  addonsController,
  categoryController,
  cakeController,
  cartController,
  orderController,
  paymentController,
  snackController
} = require("../controllers/");

const routersInit = (config, pusher) => {
  const router = express();

  router.use("/auth", authController(models, { config, pusher }));
  router.use("/user", usersController(models, { pusher }));
  router.use("/addon", addonsController(models, { config, pusher }));
  router.use("/cake", cakeController(models, { config, pusher }));
  router.use("/cart", cartController(models, { config, pusher }));
  router.use("/category", categoryController(models, { config, pusher }));
  router.use("/order", orderController(models, { config, pusher }));
  router.use("/payment", paymentController(models, { config, pusher }));
  router.use("/snack", snackController(models, { config, pusher }));

  router.use(errorHandler);
  return router;
};

module.exports = routersInit;
