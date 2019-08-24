const { sendOne } = require('../../middleware/index');

const retrieve = ({ Customer }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const customer = await Customer
      .findOne({ _id })
      .populate('user');
    return sendOne(res, { customer });

  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;