const { sendDeleted } = require('../../middleware/index');

const remove = ({ Cart }) => async (req, res, next) => {
  try {
    const cartID = req.user.id;
    const { _id } = req.params;
    const cart = await Cart.findOne({ _id, cartID });
    await Cart.remove({ _id, cartID });
    return sendDeleted(res, { cart });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;