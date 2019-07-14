const { sendDeleted } = require('../../middleware/index');

const remove = ({ Flavour }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const flavour = await Flavour.findOne({ _id });
    await Flavour.remove({ _id });
    return sendDeleted(res, { flavour });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;