const _ = require("lodash");
const { sendUpdated } = require("../../middleware/index");

const update = ({ Addons }) => async (req, res, next) => {
  try {
    const { _id } = req.params;
    const addon = await Addons.findOne({ _id }).populate("category");
    _.extend(addon, req.body);

    await addon.save();
    return sendUpdated(res, { addon });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
