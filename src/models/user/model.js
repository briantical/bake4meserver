const mongoose = require('mongoose');
const { schema } = require('./schema');
const passportLocalMongoose = require('passport-local-mongoose');

schema.plugin(passportLocalMongoose, {
  usernameField: 'email',
});

const User = mongoose.model('User', schema);
module.exports = { User };