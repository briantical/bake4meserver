const _ = require("lodash");
const { sendUpdated } = require("../../middleware/index");

const update = ({ User }, { config }) => async (req, res, next) => {
  try {
    const { _token } = req.params;
    const user = await User.findOne({ "verification._token": _token });

    let verified_at = new Date().getTime();
    if (_token === user.verification._token) {
      if (config.emailTime > verified_at) {
        const isVerified = true;
        const active = true;
        verified_at = verified_at;

        _.extend(user, {
          verification: {
            ...user.verification,
            isVerified,
            verified_at
          },
          profile: {
            ...user.profile,
            active
          }
        });
        await user.save();
        return sendUpdated(res, { user });
      }
    }
  } catch (error) {
    next(error);
  }
};

module.exports = update;
