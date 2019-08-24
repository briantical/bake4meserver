const _ = require('lodash');
const { sendOne } = require('../../middleware/index');

const create = ({ Customer }) => async (req, res, next) => {
  try {
    const customer = new Customer();
    _.extend(customer, req.body);

    await customer.save();    
    return sendOne(res, { customer });

  } catch (error) {

    next(error);
  }
};

module.exports = create;