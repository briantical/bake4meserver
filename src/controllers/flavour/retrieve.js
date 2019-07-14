const { sendOne } = require('../../middleware/index');

const retrieve = ({ Flavour }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const flavour = await Flavour.findOne({ _id });
    return sendOne(res, { flavour });
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;