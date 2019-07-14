const _ = require('lodash');
const { sendCreated } = require('../../middleware/index');

const create = ({ Address }) => async (req, res, next) => {
  try {      	
    const address = new Address();
    _.extend(address, req.body);

    await address.save();
    return sendCreated(res, { address });

  } catch (error) {

    next(error);
  }
};

module.exports = create;