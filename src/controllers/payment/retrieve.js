const { sendOne } = require('../../middleware/index');

const retrieve = ({ Payment }) => async (req, res, next) => {
  try {
    const paymentID = req.user.id;
    const { _id } = req.params;
    const payment = await Payment.findOne({ _id, paymentID });
    return sendOne(res, { payment });
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;