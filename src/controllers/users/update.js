const _ = require('lodash');
const { sendOne } = require('../../middleware/index');
const { MethodNotAllowed } = require('rest-api-errors');

const signIn = ({ User }) => async (req, res, next) => {
  try {
    const user = await User
      .findById(req.user.id)
      .populate('profile.address');
    const { fullName, avatar, phoneNumber,userName, address } = req.body;
    if (!user) {
      throw new MethodNotAllowed(405, 'Permission denied');
    }
    _.extend(user, {
      profile: {
        fullName: fullName,
        avatar: avatar,
        phoneNumber: phoneNumber,
        userName: userName,
        address: address     
      },
    });

    await user.save();
    return sendOne(res, { user });

  } catch (error) {
    next(error);
  }
};

module.exports = signIn;