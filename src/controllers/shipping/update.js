const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Shipping }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const shipping = await Shipping
      .findOne({ _id })
      populate('destination');
    _.extend(shipping, req.body);

    await shipping.save();
    return sendUpdated(res, { shipping });

  } catch (error) {
    next(error);
  }
};

module.exports = update;