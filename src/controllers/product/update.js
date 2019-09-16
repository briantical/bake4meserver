const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Product }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const product = await Product
      .findOne({ _id })
      .populate('category');
    _.extend(product, req.body);

    await product.save();
    return sendUpdated(res, { product });

  } catch (error) {
    next(error);
  }
};

module.exports = update;