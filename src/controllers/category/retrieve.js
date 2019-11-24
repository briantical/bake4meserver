const { sendOne } = require("../../middleware/index");

const socket_io = require("socket.io");
let io = socket_io();

const retrieve = ({ Category }) => async (req, res, next) => {
  try {
    const { _id } = req.params;
    const category = await Category.findOne({ _id });
    return sendOne(res, { category });
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;
