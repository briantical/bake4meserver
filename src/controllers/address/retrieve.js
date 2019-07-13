const { sendOne } = require('../../middleware/index');

const retrieve = ({ Address }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const address = await Address.findOne({ _id });
    return sendOne(res, { address });
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;