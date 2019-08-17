const _ = require('lodash');
const { sendOne } = require('../../middleware/index');

const create = ({ Order }) => async (req, res, next) => {
  try {
    const order = new Order();
    _.extend(order, req.body);

    await order.save();
    return sendOne(res, { order });
    
  } catch (error) {
    next(error);
  }
};

module.exports = create;