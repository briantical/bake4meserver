const { sendDeleted } = require('../../middleware/index');

const remove = ({ Customer }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const customer = await Customer
      .findOne({ _id })
      .populate('user');
    await Customer.deleteOne({ _id });
    return sendDeleted(res, { customer });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;