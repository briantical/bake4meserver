const mongoose = require('mongoose');
const { schema } = require('./schema');

const AddonsModel = mongoose.model('AddonsModel', schema);
module.exports = { AddonsModel };