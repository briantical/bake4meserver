const _ = require('lodash');
const { sendOne } = require('../../middleware/index');

const create = ({ Shipping }) => async (req, res, next) => {
  try {    
    const shipping = new Shipping();
    _.extend(shipping, req.body);
    
    await shipping.save();
    return sendOne(res, { shipping });
    
  } catch (error) {
    next(error);
  }
};

module.exports = create;