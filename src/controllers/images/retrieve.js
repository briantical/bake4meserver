const { sendOne } = require('../../middleware/index');

const retrieve = ({ Image }) => async (req, res, next) => {
  try {  
    const { _id } = req.params;
    const image = await Image.findOne({ _id });
    
    return sendOne(res, { image });
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;