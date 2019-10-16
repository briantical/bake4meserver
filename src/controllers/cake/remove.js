const { sendDeleted } = require('../../middleware/index');

const remove = ({ Cake }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const cake = await Cake
      .findOne({ _id })
      .populate('category');
    await Cake.deleteOne({ _id });
    return sendDeleted(res, { cake });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;