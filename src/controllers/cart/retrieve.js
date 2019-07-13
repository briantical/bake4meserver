const { sendOne } = require('../../middleware/index');

const retrieve = ({ Cart }) => async (req, res, next) => {
  try {
    const cartID = req.user.id;
    const { _id } = req.params;
    const cart = await Cart.findOne({ _id, cartID });
    return sendOne(res, { cart });
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;