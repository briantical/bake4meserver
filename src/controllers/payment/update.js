const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Payment }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const payment = await Payment.findOne({ _id });
    _.extend(payment, req.body);

    await payment.save();
    return sendUpdated(res, { payment });

  } catch (error) {
    next(error);
  }
};

module.exports = update;