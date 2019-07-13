const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Order }) => async (req, res, next) => {
  try {
    const orderID = req.user.id;
    const { _id } = req.params;
    const order = await Order.findOne({ _id, orderID });
    _.extend(order, req.body);

    await order.save();
    return sendUpdated(res, { order });

  } catch (error) {
    next(error);
  }
};

module.exports = update;