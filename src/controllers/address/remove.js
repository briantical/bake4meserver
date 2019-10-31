const { sendDeleted } = require('../../middleware/index');

const remove = ({ Address }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const address = await Address.findOne({ _id });
    await Address.deleteOne({ _id });
    return sendDeleted(res, { address });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;