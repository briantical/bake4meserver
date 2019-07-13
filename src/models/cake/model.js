const mongoose = require('mongoose');
const { schema } = require('./schema');

const Cake = mongoose.model('CakeModel', schema);
module.exports = { Cake };