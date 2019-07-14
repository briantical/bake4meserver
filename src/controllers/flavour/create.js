const { sendOne } = require('../../middleware/index');

const create = ({ Flavour }) => async (req, res, next) => {
  try {
    const flavour = new Flavour();
    _.extend(flavour, req.body);
    await flavour.save();

    return sendOne(res, { flavour });
  } catch (error) {
    next(error);
  }
};

module.exports = create;