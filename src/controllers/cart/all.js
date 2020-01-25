const { sendList } = require("../../middleware/index");
const { queryToObject } = require("../../utils/requests");

const all = ({ Cart }, { config }) => async (req, res, next) => {
  try {
    let { search, limit, skip } = queryToObject(req.query);

    skip = skip ? parseInt(skip, 10) : 0;
    limit = parseInt(limit, 10);
    limit =
      limit && limit < config.maxLimitPerQuery
        ? limit
        : config.maxLimitPerQuery;

    const count = await Cart.find().countDocuments();
    const carts = await Cart.find()
      .skip(skip)
      .limit(limit);

    return sendList(res, { carts, count });
  } catch (error) {
    next(error);
  }
};

module.exports = all;
