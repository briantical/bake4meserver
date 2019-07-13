const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Addon }) => async (req, res, next) => {
  try {
    const addonID = req.user.id;
    const { _id } = req.params;
    const addon = await Addon.findOne({ _id, addonID });
    _.extend(addon, req.body);

    await addon.save();
    return sendUpdated(res, { addon });

  } catch (error) {
    next(error);
  }
};

module.exports = update;