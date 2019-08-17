const { sendDeleted } = require('../../middleware/index');

const remove = ({ Cart }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const cart = await Cart
      .findOne({ _id })
      .populate('shipping')
      .populate('payment');
    await Cart.remove({ _id });
    return sendDeleted(res, { cart });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;