const _ = require("lodash");
const { sendUpdated } = require("../../middleware/index");

const update = ({ Cart }) => async (req, res, next) => {
  try {
    const { _id } = req.params;
    const cart = await Cart.findOne({ _id });
    _.extend(cart, { items: [...req.body] });

    await cart.save();
    return sendUpdated(res, { cart });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
