const { sendList } = require('../../middleware/index');
const { queryToObject } = require('../../utils/requests');

const all = ({ Shipping }, { config }) => async (req, res, next) => {
	try {
		let { search, limit, skip } = queryToObject(req.query);

		skip = skip ? parseInt(skip, 10) : 0;
		limit = parseInt(limit, 10);
		limit = limit && limit < config.maxLimitPerQuery ? limit : config.maxLimitPerQuery;

		const query = { $and : [] };
		if (search) {
			query.$and.push({ $or: new Shipping().fieldsToSearch(search) });
		}
    
		const count = await Shipping.find(query).countDocuments();
		const shippings = await Shipping.find(query)
			.populate('destination')
			.skip(skip)
			.limit(limit);

		return sendList(res, { shippings, count });
	} catch (error) {
		next(error);
	}
};

module.exports = all;