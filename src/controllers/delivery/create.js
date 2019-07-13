const { sendOne } = require('../../middleware/index');

const retrieve = ({ Delivery }) => async (req, res, next) => {
  try {
    const deliveryID = req.user.id;
    const { _id } = req.params;
    const delivery = await Delivery.findOne({ _id, deliveryID });
    return sendOne(res, { delivery });
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;