const { sendList } = require("../../middleware/index");
const { queryToObject } = require("../../utils/requests");

const all = ({ Order }, { config }) => async (req, res, next) => {
  try {
    let { search, limit, skip } = queryToObject(req.query);

    skip = skip ? parseInt(skip, 10) : 0;
    limit = parseInt(limit, 10);
    limit =
      limit && limit < config.maxLimitPerQuery
        ? limit
        : config.maxLimitPerQuery;

    const count = await Order.find().countDocuments();
    const orders = await Order.find()
      .populate("customer")
      .populate({
        path: "cart",
        populate: { path: "items.cake" }
      })
      .skip(skip)
      .limit(limit);

    return sendList(res, { orders, count });
  } catch (error) {
    next(error);
  }
};

module.exports = all;
