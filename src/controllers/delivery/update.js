const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Delivery }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const addon = await Delivery.findOne({ _id });
    _.extend(addon, req.body);

    await addon.save();
    return sendUpdated(res, { addon });

  } catch (error) {
    next(error);
  }
};

module.exports = update;