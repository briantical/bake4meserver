const { sendOne } = require('../../middleware/index');

const retrieve = ({ Supplier }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const supplier = await Supplier
      .findOne({ _id })
      .populate('category');
    return sendOne(res, { supplier });

  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;