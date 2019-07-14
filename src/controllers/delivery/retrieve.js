const { sendOne } = require('../../middleware/index');

const retrieve = ({ Delivery }) => async (req, res, next) => {
  try {
    const { _id } = req.params;
    const delivery = await Delivery.findOne({ _id });
    return sendOne(res, { delivery });
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;