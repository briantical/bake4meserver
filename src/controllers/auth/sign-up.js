const { withoutErrors } = require('../../middleware');
const { NotAcceptable } = require('rest-api-errors');
const { PASSWORD } = require('../../utils/regexes');

const nodemailer = require('nodemailer');


const signUp = ({ User }, { config }) => (req, res, next) => {
  const { email, password} = req.body;

  if (!PASSWORD.test(password)) {
    return next(new NotAcceptable(406, 'Password is in wrong format.'));
  }
  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.googlemail.com', // Gmail Host
        port: 465, // Port
        secure: true, // this is true as port is 465
        auth: {
            user: config.gmail_user, //Gmail username
            pass: config.gmail_pass // Gmail password
        }
    });
    
    let mailOptions = {
        from: '"CRITERIA CAKES" <admin@criteriacakes.ug>',
        to: email, 
        subject: 'Confirm Email',
        text: 'This is the email sent through Gmail SMTP Server.'
    };
 
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
});

  const user = new User({
    email: email
  });

  User.register(user, password,
    withoutErrors(next, () => next()));
};

module.exports = signUp;
