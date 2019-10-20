const { sendDeleted } = require('../../middleware/index');

const remove = ({ Snack }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const snack = await Snack
      .findOne({ _id })
      .populate('category');
    await Snack.deleteOne({ _id });
    return sendDeleted(res, { snack });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;