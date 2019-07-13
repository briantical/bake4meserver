const { sendDeleted } = require('../../middleware/index');

const remove = ({ Cake }) => async (req, res, next) => {
  try {
    const cakeID = req.user.id;
    const { _id } = req.params;
    const cake = await Cake.findOne({ _id, cakeID });
    await Cake.remove({ _id, cakeID });
    return sendDeleted(res, { cake });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;