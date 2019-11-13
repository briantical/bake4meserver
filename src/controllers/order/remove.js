const { sendDeleted } = require("../../middleware/index");

const remove = ({ Order }) => async (req, res, next) => {
  try {
    const { _id } = req.params;
    const order = await Order.findOne({ _id })
      .populate("customer")
      .populate("cart");
    await Order.deleteOne({ _id });
    return sendDeleted(res, { order });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
