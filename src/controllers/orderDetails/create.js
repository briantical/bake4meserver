const { sendOne } = require('../../middleware/index');

const retrieve = ({ OrderDetails }) => async (req, res, next) => {
  try {
    const orderDetailsID = req.user.id;
    const { _id } = req.params;
    const orderDetails = await OrderDetails.findOne({ _id, orderDetailsID });
    return sendOne(res, { orderDetails });
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;