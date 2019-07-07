const mongoose = require('mongoose');
const { schema } = require('./schema');

const AddressModel = mongoose.model('AddressModel', schema);
module.exports = { AddressModel };