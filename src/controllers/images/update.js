const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Image }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const image = await Image.findOne({ _id });
    _.extend(image, req.body);

    await image.save();
    return sendUpdated(res, { image });

  } catch (error) {
    next(error);
  }
};

module.exports = update;