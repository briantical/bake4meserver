const { sendDeleted } = require('../../middleware/index');

const remove = ({ Address }) => async (req, res, next) => {
  try {
    const addressID = req.user.id;
    const { _id } = req.params;
    const address = await Address.findOne({ _id, addressID });
    await Address.remove({ _id, addressID });
    return sendDeleted(res, { address });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;