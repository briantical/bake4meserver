const { sendOne } = require('../../middleware');
const { User } = require('../../models/user/');

const verify = async (req, res ,next) => {
  const { token, user } = req; 
  return sendOne(res, { user, token });

};

module.exports = verify;

const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ User }) => async (req, res, next) => {
  try {    
    const { _token } = req.params;
    const user = await User.findOne({ _token });
    if(_token === user._token){
        const isVerified = true
        _.extend(user, isVerified);
    }

    await user.save();
    return sendUpdated(res, { user });

  } catch (error) {
    next(error);
  }
};

module.exports = update;
