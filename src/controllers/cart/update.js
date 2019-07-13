const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Cart }) => async (req, res, next) => {
  try {
    const cartID = req.user.id;
    const { _id } = req.params;
    const cart = await Cart.findOne({ _id, cartID });
    _.extend(cart, req.body);

    await cart.save();
    return sendUpdated(res, { cart });

  } catch (error) {
    next(error);
  }
};

module.exports = update;