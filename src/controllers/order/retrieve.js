const { sendOne } = require("../../middleware/index");

const retrieve = ({ Order }) => async (req, res, next) => {
  try {
    const { _id } = req.params;
    const order = await Order.findOne({ _id })
      .populate("customer")
      .populate({
        path: "cart",
        populate: { path: "items.cake" }
      });
    return sendOne(res, { order });
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;
