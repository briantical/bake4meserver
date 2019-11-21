const { sendDeleted } = require("../../middleware/index");

const remove = ({ Cart }) => async (req, res, next) => {
  try {
    const { _id } = req.params;
    const cart = await Cart.findOne({ _id })
      .populate("items.cake")
      .populate("items.snack");
    await Cart.deleteOne({ _id });
    return sendDeleted(res, { cart });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
