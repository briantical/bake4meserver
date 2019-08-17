const { sendList } = require('../../middleware/index');
const { queryToObject } = require('../../utils/requests');

const all = ({ OrderDetails }, { config }) => async (req, res, next) => {
	try {
		let { search, limit, skip, lat, lng, distance } = queryToObject(req.query);

		skip = skip ? parseInt(skip, 10) : 0;
		limit = parseInt(limit, 10);
		limit = limit && limit < config.maxLimitPerQuery ? limit : config.maxLimitPerQuery;

		/*const query = { $and : [] };
		if (search) {
			query.$and.push({ $or: new OrderDetails().fieldsToSearch(search) });
		}*/

		const count = await OrderDetails.find().countDocuments();
		const Orderdetails = await OrderDetails.find()
			.populate('order')
			.populate('cart')
			.populate('product')
			.skip(skip)
			.limit(limit);

		return sendList(res, { Orderdetails, count });
	} catch (error) {
		next(error);
	}
};

module.exports = all;