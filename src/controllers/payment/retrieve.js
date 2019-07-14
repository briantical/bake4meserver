const { sendOne } = require('../../middleware/index');

const retrieve = ({ Payment }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const payment = await Payment.findOne({ _id });
    return sendOne(res, { payment });
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;