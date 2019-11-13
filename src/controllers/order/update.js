const _ = require("lodash");
const { sendUpdated } = require("../../middleware/index");

const update = ({ Order }) => async (req, res, next) => {
  try {
    const { _id } = req.params;
    const order = await Order.findOne({ _id })
      .populate("customer")
      .populate("cart");
    _.extend(order, req.body);

    await order.save();
    return sendUpdated(res, { order });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
