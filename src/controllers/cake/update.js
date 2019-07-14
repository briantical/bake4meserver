const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Cake }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const cake = await Cake.findOne({ _id });
    _.extend(cake, req.body);

    await cake.save();
    return sendUpdated(res, { cake });

  } catch (error) {
    next(error);
  }
};

module.exports = update;