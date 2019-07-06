const mongoose = require('mongoose');
const { schema } = require('./schema');

const OrderDetails = mongoose.model('OrderDetails', schema);
module.exports = { OrderDetails };