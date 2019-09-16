const { sendList } = require('../../middleware/index');
const { queryToObject } = require('../../utils/requests');

const all = ({ Product }, { config }) => async (req, res, next) => {
	try {
		let {search,limit, skip } = queryToObject(req.query);

		skip = skip ? parseInt(skip, 10) : 0;
		limit = parseInt(limit, 10);
		limit = limit && limit < config.maxLimitPerQuery ? limit : config.maxLimitPerQuery;

		const count = await Product.find().countDocuments();
		const products = await Product.find()
			.populate('category')
			.skip(skip)
			.limit(limit);

		return sendList(res, { products, count });
	} catch (error) {
		next(error);
	}
};

module.exports = all;
