const { sendOne } = require("../../middleware/index");

const retrieve = ({ Cake }) => async (req, res, next) => {
  try {
    const { _id } = req.params;
    const cake = await Cake.findOne({ _id }).populate("category");
    return sendOne(res, { cake });
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;
