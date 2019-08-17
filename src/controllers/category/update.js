const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Category }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const category = await Category
      .findOne({ _id });
    _.extend(category, req.body);

    await category.save();
    return sendUpdated(res, { category });

  } catch (error) {
    next(error);
  }
};

module.exports = update;