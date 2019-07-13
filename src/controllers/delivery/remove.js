const { sendDeleted } = require('../../middleware/index');

const remove = ({ Delivery }) => async (req, res, next) => {
  try {
    const deliveryID = req.user.id;
    const { _id } = req.params;
    const delivery = await Delivery.findOne({ _id, deliveryID });
    await Delivery.remove({ _id, deliveryID });
    return sendDeleted(res, { delivery });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;