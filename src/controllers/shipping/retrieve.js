const { sendOne } = require('../../middleware/index');

const retrieve = ({ Shipping }) => async (req, res, next) => {
  try {
    const { _id } = req.params;
    const shipping = await Shipping
      .findOne({ _id })
      .populate('destination');
    return sendOne(res, { shipping });
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;