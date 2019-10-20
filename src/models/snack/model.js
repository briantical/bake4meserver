const mongoose = require('mongoose');
const { schema } = require('./schema');

const Snack = mongoose.model('Snack', schema);
module.exports = { Snack };