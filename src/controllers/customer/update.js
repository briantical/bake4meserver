const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Customer }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const customer = await Customer
      .findOne({ _id })
      .populate('user');
    _.extend(customer, req.body);

    await customer.save();
    return sendUpdated(res, { customer });

  } catch (error) {
    next(error);
  }
};

module.exports = update;