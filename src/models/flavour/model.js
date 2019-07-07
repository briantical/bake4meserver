const mongoose = require('mongoose');
const { schema } = require('./schema');

const FlavourModel = mongoose.model('FlavourModel', schema);
module.exports = { FlavourModel };