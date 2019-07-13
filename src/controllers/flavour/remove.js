const { sendDeleted } = require('../../middleware/index');

const remove = ({ Flavour }) => async (req, res, next) => {
  try {
    const flavourID = req.user.id;
    const { _id } = req.params;
    const flavour = await Flavour.findOne({ _id, flavourID });
    await Flavour.remove({ _id, flavourID });
    return sendDeleted(res, { flavour });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;