const mongoose = require('mongoose');
const { schema } = require('./schema');

const DeliveryModel = mongoose.model('DeliveryModel', schema);
module.exports = { DeliveryModel };