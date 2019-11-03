const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  payment:{
    type : String,
    default: 'Mobile Money',
    required : [true]
  },
  totalCost:{
    type: Number,
    default: 0,
    required: [true]
  },
  checkedOut:{
    type: Boolean,
    default: false,
    required: [true]
  }
}); 

module.exports = { schema };