const mongoose = require('mongoose');
const { schema } = require('./schema');

const Product = mongoose.model('Product', schema);
module.exports = { Product };