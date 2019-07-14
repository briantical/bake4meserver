const { sendOne } = require('../../middleware/index');

const retrieve = ({ Cart }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const cart = await Cart.findOne({ _id });
    return sendOne(res, { cart });
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;