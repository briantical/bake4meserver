const _ = require("lodash");
const { sendOne } = require("../../middleware/index");

const create = ({ Cake }) => async (req, res, next) => {
  try {
    const cake = new Cake();
    _.extend(cake, req.body);

    await cake.save();
    return sendOne(res, { cake });
  } catch (error) {
    next(error);
  }
};

module.exports = create;
