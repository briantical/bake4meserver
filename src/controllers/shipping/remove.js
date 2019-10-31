const { sendDeleted } = require('../../middleware/index');

const remove = ({ Shipping }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const shipping = await Shipping
      .findOne({ _id })
      .populate('destination');
    await Shipping.deleteOne({ _id });
    return sendDeleted(res, { shipping });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;