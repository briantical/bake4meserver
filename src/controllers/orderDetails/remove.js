const { sendDeleted } = require('../../middleware/index');

const remove = ({ OrderDetails }) => async (req, res, next) => {
  try {
    const orderDetailsID = req.user.id;
    const { _id } = req.params;
    const orderDetails = await OrderDetails.findOne({ _id, orderDetailsID });
    await OrderDetails.remove({ _id, orderDetailsID });
    return sendDeleted(res, { orderDetails });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;