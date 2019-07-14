const { sendOne } = require('../../middleware/index');

const retrieve = ({ OrderDetails }) => async (req, res, next) => {
  try {   
    const { _id } = req.params;
    const orderDetails = await OrderDetails.findOne({ _id });
    return sendOne(res, { orderDetails });
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;