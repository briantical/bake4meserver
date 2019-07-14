const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Address }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const address = await Address.findOne({ _id });
    _.extend(address, req.body);

    await address.save();
    return sendUpdated(res, { address });

  } catch (error) {
    next(error);
  }
};

module.exports = update;