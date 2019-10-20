const { sendOne } = require('../../middleware/index');

const retrieve = ({ Snack }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const snack = await Snack
      .findOne({ _id })
      .populate('category');
    return sendOne(res, { snack });

  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;