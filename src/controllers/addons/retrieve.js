const { sendOne } = require('../../middleware/index');

const retrieve = ({ Addon }) => async (req, res, next) => {
  try {
    const addonID = req.user.id;
    const { _id } = req.params;
    const addon = await Addon.findOne({ _id, addonID });
    return sendOne(res, { addon });
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;