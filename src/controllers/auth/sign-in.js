const { sendOne } = require('../../middleware');
const { User } = require('../../models/user/');

const signIn = async (req, res ,next) => {
  try {    
    let { token, user , user:{verification:{isVerified}}} = req;
    let message = 'User is not verified';
    isVerified ?  sendOne(res, { user, token }) : sendOne(res, { message });

  } catch (error) {
    next(error);
  }
};

module.exports = signIn;