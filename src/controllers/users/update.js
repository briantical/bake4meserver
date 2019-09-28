const _ = require('lodash');
const { sendOne } = require('../../middleware/index');
const { MethodNotAllowed } = require('rest-api-errors');

const signIn = ({ User }) => async (req, res, next) => {
  try {
    const user = await User
      .findById(req.user.id)
      .populate('profile.address');
    const { fullName, avatar, phoneNumber,userName ,coordinates} = req.body;
    const type = 'Point';
    const complete = true;

    if (!user) {
      throw new MethodNotAllowed(405, 'Permission denied');
    }
    _.extend(user, {
      profile: {
        ...user.profile,
        fullName,
        avatar,
        phoneNumber,
        userName,
        location:{
          type,
          coordinates
        },
        complete   
      },
    });

    await user.save();
    return sendOne(res, { user });

  } catch (error) {
    next(error);
  }
};

module.exports = signIn;