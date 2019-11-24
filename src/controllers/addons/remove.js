const { sendDeleted } = require("../../middleware/index");

const remove = ({ Addons }) => async (req, res, next) => {
  try {
    const { _id } = req.params;
    const addon = await Addons.findOne({ _id }).populate("category");
    await Addons.deleteOne({ _id });
    return sendDeleted(res, { addon });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
