const mongoose = require('mongoose');
const { schema } = require('./schema');

const CakeModel = mongoose.model('CakeModel', schema);
module.exports = { CakeModel };