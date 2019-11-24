const { sendOne } = require("../../middleware/index");

const retrieve = ({ Addons }) => async (req, res, next) => {
  try {
    const { _id } = req.params;
    const addon = await Addons.findOne({ _id }).populate("category");
    return sendOne(res, { addon });
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;
