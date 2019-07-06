const mongoose = require('mongoose');
const { schema } = require('./schema');

const Flavour = mongoose.model('Flavour', schema);
module.exports = { Flavour };