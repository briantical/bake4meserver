const { sendList } = require('../../middleware/index');
const { queryToObject } = require('../../utils/requests');

const all = ({ Addon }, { config }) => async (req, res, next) => {
	try {
		let { search, limit, skip } = queryToObject(req.query);

		skip = skip ? parseInt(skip, 10) : 0;
		limit = parseInt(limit, 10);
		limit = limit && limit < config.maxLimitPerQuery ? limit : config.maxLimitPerQuery;

		const query = { $and : [] };
		if (search) {
			query.$and.push({ $or: new Addon().fieldsToSearch(search) });
		}

		const count = await Addon.find(query).countDocuments();
		const addons = await Addon.find(query)
			.populate('product')
			.skip(skip)
			.limit(limit);

		return sendList(res, { addons, count });
	} catch (error) {
		next(error);
	}
};

module.exports = all;
