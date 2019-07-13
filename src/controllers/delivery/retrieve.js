const { sendOne } = require('../../middleware/index');

const retrieve = ({ Addon }) => async (req, res, next) => {
  try {
    const deliveryID = req.user.id;
    const { _id } = req.params;
    const delivery = await Addon.findOne({ _id, deliveryID });
    return sendOne(res, { delivery });
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;