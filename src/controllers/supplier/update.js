const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Supplier }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const supplier = await Supplier
      .findOne({ _id })
      .populate('category');
    _.extend(supplier, req.body);

    await supplier.save();
    return sendUpdated(res, { supplier });

  } catch (error) {
    next(error);
  }
};

module.exports = update;