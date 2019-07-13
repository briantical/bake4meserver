const { sendDeleted } = require('../../middleware/index');

const remove = ({ Payment }) => async (req, res, next) => {
  try {
    const addressID = req.user.id;
    const { _id } = req.params;
    const address = await Payment.findOne({ _id, addressID });
    await Payment.remove({ _id, addressID });
    return sendDeleted(res, { address });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;