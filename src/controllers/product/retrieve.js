const { sendOne } = require('../../middleware/index');

const retrieve = ({ Product }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const product = await Product
      .findOne({ _id })
      .populate('category');
    return sendOne(res, { product });

  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;