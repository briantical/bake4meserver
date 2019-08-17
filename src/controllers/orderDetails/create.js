const _ = require('lodash');
const { sendOne } = require('../../middleware/index');

const create = ({ OrderDetails }) => async (req, res, next) => {
  try {
    const orderDetails = new OrderDetails();
    _.extend(orderDetails, req.body);

    await orderDetails.save();
    return sendOne(res, { orderDetails });
    
  } catch (error) {
    next(error);
  }
};

module.exports = create;