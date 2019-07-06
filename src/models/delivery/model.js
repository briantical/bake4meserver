const mongoose = require('mongoose');
const { schema } = require('./schema');

const Delivery = mongoose.model('Delivery', schema);
module.exports = { Delivery };