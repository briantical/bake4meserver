const { sendOne } = require('../../middleware/index');

const retrieve = ({ Cake }) => async (req, res, next) => {
  try {
    const cakeID = req.user.id;
    const { _id } = req.params;
    const cake = await Cake.findOne({ _id, cakeID });
    return sendOne(res, { cake });
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;