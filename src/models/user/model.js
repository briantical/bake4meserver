const mongoose = require('mongoose');
const { schema } = require('./schema');
const passportLocalMongoose = require('passport-local-mongoose');

schema.plugin(passportLocalMongoose, {
  usernameField: 'email',
});

const UserModel = mongoose.model('UserModel', schema);
module.exports = { UserModel };