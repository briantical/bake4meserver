const _ = require("lodash");
const { sendOne } = require("../../middleware/index");

const create = ({ Cart }) => async (req, res, next) => {
  try {
    const cart = new Cart();
    _.extend(cart, req.body);

    await cart.save();
    return sendOne(res, { cart });
  } catch (error) {
    next(error);
  }
};

module.exports = create;
