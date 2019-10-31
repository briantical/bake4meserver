const { sendDeleted } = require('../../middleware/index');

const remove = ({ Payment }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const address = await Payment.findOne({ _id });
    await Payment.deleteOne({ _id });
    return sendDeleted(res, { address });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;