const _ = require('lodash');
const { sendCreated } = require('../../middleware/index');

const create = ({ Addons }) => async (req, res, next) => {
  try {
    const addonsID = req.user.id;
    const addon = new Addons({ addonsID });
    _.extend(addon, req.body);

    await addon.save();
    return sendCreated(res, { addon });

  } catch (error) {

    next(error);
  }
};

module.exports = create;
