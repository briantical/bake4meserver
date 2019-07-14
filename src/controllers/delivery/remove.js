const { sendDeleted } = require('../../middleware/index');

const remove = ({ Delivery }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const delivery = await Delivery.findOne({ _id });
    await Delivery.remove({ _id });
    return sendDeleted(res, { delivery });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;