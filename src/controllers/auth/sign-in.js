const { sendOne } = require('../../middleware');
const { User } = require('../../models/user/');

const signIn = async (req, res ,next) => {
  const { token, user } = req; 
  return sendOne(res, { user, token });

};

module.exports = signIn;