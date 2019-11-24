const { sendList } = require("../../middleware/index");
const { queryToObject } = require("../../utils/requests");

const all = ({ Payment }, { config }) => async (req, res, next) => {
  try {
    let { search, limit, skip } = queryToObject(req.query);

    skip = skip ? parseInt(skip, 10) : 0;
    limit = parseInt(limit, 10);
    limit =
      limit && limit < config.maxLimitPerQuery
        ? limit
        : config.maxLimitPerQuery;

    const query = { $and: [] };
    if (search) {
      query.$and.push({ $or: new Payment().fieldsToSearch(search) });
    }

    const count = await Payment.find(query).countDocuments();
    const payments = await Payment.find(query)
      .skip(skip)
      .limit(limit);

    return sendList(res, { payments, count });
  } catch (error) {
    next(error);
  }
};

module.exports = all;
