const mongoose = require('mongoose');
const { schema } = require('./schema');

const Addons = mongoose.model('Addons', schema);
module.exports = { Addons };