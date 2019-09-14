const { sendDeleted } = require('../../middleware/index');

const remove = ({ Image }) => async (req, res, next) => {
  try {  
    const { _id } = req.params;
    const image = await Image.findOne({ _id });

    await Image.remove({ _id });  
    return sendDeleted(res, { image });
    
  } catch (error) {
    next(error);
  }
};

module.exports = remove;