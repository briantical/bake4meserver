const { sendOne } = require('../../middleware/index');

const retrieve = ({ Address }) => async (req, res, next) => {
  try {
    const addressID = req.user.id;
    const { _id } = req.params;
    const address = await Address.findOne({ _id, addressID });
    return sendOne(res, { address });
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;