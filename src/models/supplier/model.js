const mongoose = require('mongoose');
const { schema } = require('./schema');

const Supplier = mongoose.model('Supplier', schema);
module.exports = { Supplier };