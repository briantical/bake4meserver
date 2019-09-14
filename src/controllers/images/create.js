const _ = require('lodash');

const { sendCreated } = require('../../middleware/index');

const create = ({ Image }) => async (req, res, next) => {
  try {  
    
    const image = new Image();
        _.extend(image, req.body);

        await image.save();
        return sendCreated(res, { image });

  } catch (error) {
    next(error);
  }
};

module.exports = create;