const path = require('path');

module.exports = {
  bodyLimit: '100kb',
  gmail_user: 'finalyearprojectsystem@gmail.com',
  gmail_pass: 'cocisgroup4*',
  emailTime: new Date(new Date().getTime() + 60 * 60 * 24 * 1000).getTime(), //60*60*24 -> After 24 hours
  passport: {
    tokenTime: 2592000, // 60*60*24*30 -> 30 days
    secretAuthToken: process.env.SECRET_TOKEN,
    resetPasswordExpires: 3600000 * 24, // 24 hour
  }
};
