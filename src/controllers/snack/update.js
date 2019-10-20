const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Snack }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const snack = await Snack
      .findOne({ _id })
      .populate('category');
    _.extend(snack, req.body);

    await snack.save();
    return sendUpdated(res, { snack });

  } catch (error) {
    next(error);
  }
};

module.exports = update;