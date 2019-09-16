const _ = require('lodash');
const { sendOne } = require('../../middleware/index');

const create = ({ Supplier }) => async (req, res, next) => {
  try {
    const supplier = new Supplier();
    _.extend(supplier, req.body);

    await supplier.save();    
    return sendOne(res, { supplier });

  } catch (error) {

    next(error);
  }
};

module.exports = create;