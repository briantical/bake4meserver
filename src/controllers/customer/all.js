const { sendList } = require('../../middleware/index');
const { queryToObject } = require('../../utils/requests');

const all = ({ Customer }, { config }) => async (req, res, next) => {
	try {
		let {search,limit, skip } = queryToObject(req.query);

		skip = skip ? parseInt(skip, 10) : 0;
		limit = parseInt(limit, 10);
		limit = limit && limit < config.maxLimitPerQuery ? limit : config.maxLimitPerQuery;

		const count = await Customer.find().countDocuments();
		const customers = await Customer.find()
			.populate('user')
			.skip(skip)
			.limit(limit);

		return sendList(res, { customers, count });
	} catch (error) {
		next(error);
	}
};

module.exports = all;
