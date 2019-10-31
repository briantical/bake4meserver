const { sendDeleted } = require('../../middleware/index');

const remove = ({ OrderDetails }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const orderDetails = await OrderDetails
      .findOne({ _id })
      .populate('order')
			.populate('cart')
			.populate('product');
    await OrderDetails.deleteOne({ _id });
    return sendDeleted(res, { orderDetails });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;