const mongoose = require('mongoose');
const { schema } = require('./schema');

const OrderDetailsModel = mongoose.model('OrderDetailsModel', schema);
module.exports = { OrderDetailsModel };