const mongoose = require('mongoose');
const { schema } = require('./schema');

const OrderModel = mongoose.model('OrderModel', schema);
module.exports = { OrderModel };