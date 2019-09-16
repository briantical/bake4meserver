const { sendDeleted } = require('../../middleware/index');

const remove = ({ Supplier }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const supplier = await Supplier
      .findOne({ _id })
      .populate('category');
    await Supplier.remove({ _id });
    return sendDeleted(res, { supplier });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;