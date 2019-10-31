const { sendDeleted } = require('../../middleware/index');

const remove = ({ Product }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const product = await Product
      .findOne({ _id })
      .populate('category');
    await Product.deleteOne({ _id });
    return sendDeleted(res, { product });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;