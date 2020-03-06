const { withoutErrors, sendOne } = require("../../middleware");
const { NotAcceptable } = require("rest-api-errors");
const { PASSWORD } = require("../../utils/regexes");

const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const _ = require("lodash");

// const OAuth2 = google.auth.OAuth2;

// const oauth2Client = new OAuth2(
//   process.env.GOOGLE_CLIENT_ID, //Client ID
//   process.env.GOOGLE_CLIENT_SECRET, //Client secret
//   "https://developers.google.com/oauthplayground" // Redirect URL
// );

// oauth2Client.setCredentials({
//   refresh_token: process.env.GOOGLE_REFRESH_TOKEN
// });
// const accessToken = oauth2Client.getAccessToken();

const signUp = ({ User }, { config }) => (req, res, next) => {
  const { email, password } = req.body;

  if (!PASSWORD.test(password)) {
    return next(new NotAcceptable(406, "Password is in wrong format."));
  }

  // const smtpTransport = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     type: "OAuth2",
  //     user: config.gmail_user,
  //     clientId: process.env.GOOGLE_CLIENT_ID,
  //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  //     refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  //     accessToken: accessToken
  //   }
  // });

  var smtpTransport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "21f13fe58f3c78",
      pass: "6b3b47378a6830"
    }
  });

  let _token =
    Math.random()
      .toString(36)
      .substring(7) + new Date().getTime();
  const user = new User({
    email: email
  });

  _.extend(user, {
    verification: {
      _token
    }
  });

  let mailOptions = {
    from: '"BAKE4ME" <noreply@bake4me.ug>',
    to: email,
    subject: "Email Verification",
    html: `<div>Follow the link below to verify your email.<br><a href='${process.env.DOMAIN_NAME}/api/v1/auth/verify${_token}'>VERIFY</a></div>`
  };

  smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(404).json({ error });
      smtpTransport.close();
      return;
    } else {
      console.log("Message sent: %s", info.messageId);
      User.register(
        user,
        password,
        withoutErrors(next, () => next())
      );
    }
  });
};

module.exports = signUp;
