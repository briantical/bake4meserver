const mongoose = require('mongoose');
const { schema } = require('./schema');

const CartModel = mongoose.model('CartModel', schema);
module.exports = { CartModel };