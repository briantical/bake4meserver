const mongoose = require('mongoose');
const { schema } = require('./schema');

const Shipping = mongoose.model('Shipping', schema);
module.exports = { Shipping };