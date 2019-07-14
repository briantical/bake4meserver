const { sendOne } = require('../../middleware/index');

const socket_io = require('socket.io');
let io = socket_io();

const retrieve = ({ Cake }) => async (req, res, next) => {
  try {    
    const { _id } = req.params;
    const cake = await Cake.findOne({ _id });
    return sendOne(res, { cake });

  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;