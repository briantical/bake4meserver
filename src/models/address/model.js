const mongoose = require('mongoose');
const { schema } = require('./schema');

const Address = mongoose.model('Address', schema);
module.exports = { Address };