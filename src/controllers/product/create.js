const _ = require('lodash');
const { sendOne } = require('../../middleware/index');

const create = ({ Product }) => async (req, res, next) => {
  try {
    const product = new Product();
    _.extend(product, req.body);

    await product.save();    
    return sendOne(res, { product });

  } catch (error) {

    next(error);
  }
};

module.exports = create;