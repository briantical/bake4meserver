const { sendOne } = require('../../middleware/index');

const create = ({ Delivery }) => async (req, res, next) => {
  try {    
    const delivery = new Delivery();
    _.extend(delivery, req.body);
    const { _id } = req.params;

    return sendOne(res, { delivery });
  } catch (error) {
    next(error);
  }
};

module.exports = create;