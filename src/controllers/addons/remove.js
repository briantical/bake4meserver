const { sendDeleted } = require('../../middleware/index');

const remove = ({ Addon }) => async (req, res, next) => {
  try {
    const addonID = req.user.id;
    const { _id } = req.params;
    const addon = await Addon.findOne({ _id, addonID });
    await Addon.remove({ _id, addonID });
    return sendDeleted(res, { addon });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;