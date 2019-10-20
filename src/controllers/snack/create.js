const _ = require('lodash');
const { sendOne } = require('../../middleware/index');

const create = ({ Snack }) => async (req, res, next) => {
  try {
    const snack = new Snack();
    _.extend(snack, req.body);

    await snack.save();    
    return sendOne(res, { snack });

  } catch (error) {

    next(error);
  }
};

module.exports = create;