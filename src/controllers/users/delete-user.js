const { sendDeleted } = require("../../middleware/index");

const remove = ({ User }) => async (req, res, next) => {
  try {
    const { _id } = req.params;
    const user = await User.findOne({ _id }).populate("cart");
    await User.deleteOne({ _id });
    return sendDeleted(res, { user });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
