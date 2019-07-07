const mongoose = require('mongoose');
const { schema } = require('./schema');

const PaymentModel = mongoose.model('PaymentModel', schema);
module.exports = { PaymentModel };