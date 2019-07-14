const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ OrderDetails }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const orderDetails = await OrderDetails.findOne({ _id });
    _.extend(orderDetails, req.body);

    await orderDetails.save();
    return sendUpdated(res, { orderDetails });

  } catch (error) {
    next(error);
  }
};

module.exports = update;