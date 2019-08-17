const mongoose = require('mongoose');
const { schema } = require('./schema');

const Customer = mongoose.model('Customer', schema);
module.exports = { Customer };