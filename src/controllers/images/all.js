const { sendList } = require('../../middleware/index');
const { queryToObject } = require('../../utils/requests');

const all = ({ Image }, { config }) => async (req, res, next) => {
	try {
		let { search, limit, skip } = queryToObject(req.query);

		skip = skip ? parseInt(skip, 10) : 0;
		limit = parseInt(limit, 10);
		limit = limit && limit < config.maxLimitPerQuery ? limit : config.maxLimitPerQuery;

		const query = { $and : [] };
		if (search) {
			query.$and.push({ $or: new Image().fieldsToSearch(search) });
		}

		const count = await Image.find(query).countDocuments();
		const images = await Image.find(query)
			.skip(skip)
			.limit(limit);

		return sendList(res, { images, count });
	} catch (error) {
		next(error);
	}
};

module.exports = all;