const { withoutErrors, sendOne } = require("../../middleware");
const { NotAcceptable } = require("rest-api-errors");
const { PASSWORD } = require("../../utils/regexes");

const nodemailer = require("nodemailer");
const _ = require("lodash");

const signUp = ({ User }, { config }) => (req, res, next) => {
  const { email, password } = req.body;

  if (!PASSWORD.test(password)) {
    return next(new NotAcceptable(406, "Password is in wrong format."));
  }

  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      host: "smtp.googlemail.com", // Gmail Host
      port: 465, // Port
      secure: true, // this is true as port is 465
      auth: {
        user: config.gmail_user, //Gmail username
        pass: config.gmail_pass // Gmail password
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
      from: '"CRITERIA CAKES" <admin@criteriacakes.ug>',
      to: email,
      subject: "Confirm Email",
      html: `<div>Follow the link below to verify your email.<br><a href='http://localhost:3000/api/v1/auth/verify${_token}'>VERIFY</a></div>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(404).json({ error });
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
  });
};

module.exports = signUp;
