const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Flavour }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const flavour = await Flavour.findOne({ _id });
    _.extend(flavour, req.body);

    await flavour.save();
    return sendUpdated(res, { flavour });

  } catch (error) {
    next(error);
  }
};

module.exports = update;