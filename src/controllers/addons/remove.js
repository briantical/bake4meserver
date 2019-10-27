const { sendDeleted } = require('../../middleware/index');

const remove = ({ Addons }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const addon = await Addons
      .findOne({ _id })
      .populate('product');
    await Addons.remove({ _id });
    return sendDeleted(res, { addon });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;