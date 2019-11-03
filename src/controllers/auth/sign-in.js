const { sendOne } = require('../../middleware');
const { User } = require('../../models/user/');

const signIn = async (req, res ,next) => {
  try {    
    let { token, user:{_id, verification:{isVerified}}} = req;
  
    const user = await User
      .findById(_id)
      .populate('cart');

    let message = 'User is not verified';
    isVerified ?  sendOne(res, { user, token }) : sendOne(res, { message });

  } catch (error) {
    next(error);
  }
};

module.exports = signIn;