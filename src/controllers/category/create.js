const _ = require('lodash');
const { sendOne } = require('../../middleware/index');

const create = ({ Category }) => async (req, res, next) => {
  try {
    const category = new Category();
    _.extend(category, req.body);
    
    await category.save();
    return sendOne(res, { category });

  } catch (error) {
    
    next(error);
  }
};

module.exports = create;