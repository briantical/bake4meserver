const { sendDeleted } = require('../../middleware/index');

const remove = ({ Order }) => async (req, res, next) => {
  try {
    const orderID = req.user.id;
    const { _id } = req.params;
    const order = await Order.findOne({ _id, orderID });
    await Order.remove({ _id, orderID });
    return sendDeleted(res, { order });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;