const { sendList } = require('../../middleware/index');
const { queryToObject } = require('../../utils/requests');

const all = ({ Address }, { config }) => async (req, res, next) => {
	try {
		let { search, limit, skip } = queryToObject(req.query);

		skip = skip ? parseInt(skip, 10) : 0;
		limit = parseInt(limit, 10);
		limit = limit && limit < config.maxLimitPerQuery ? limit : config.maxLimitPerQuery;

		const query = { $and : [] };
		if (search) {
			query.$and.push({ $or: new Address().fieldsToSearch(search) });
		}

		const count = await Address.find(query).countDocuments();
		const addresses = await Address.find(query)
			.skip(skip)
			.limit(limit);

		return sendList(res, { addresses, count });
	} catch (error) {
		next(error);
	}
};

module.exports = all;