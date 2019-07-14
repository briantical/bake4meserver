const { sendDeleted } = require('../../middleware/index');

const remove = ({ Addon }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const addon = await Addon.findOne({ _id });
    await Addon.remove({ _id });
    return sendDeleted(res, { addon });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;