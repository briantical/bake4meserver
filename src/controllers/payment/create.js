const _ = require('lodash');
const { sendOne } = require('../../middleware/index');

const create = ({ Paymnet }) => async (req, res, next) => {
  try {    
    const payment = new Paymnet();
    _.extend(payment, req.body);

    await payment.save();
    return sendOne(res, { payment });
    
  } catch (error) {
    next(error);
  }
};

module.exports = create;