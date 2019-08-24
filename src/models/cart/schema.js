const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  description:{
    type : String,    
    required: [true]
  },
  shipping:{
    type: ObjectId,
    ref: 'Shipping',
    required: [true],
  },
  payment:{
    type : ObjectId,
    ref : 'Payment',
    required : [true]
  },
  totalCost:{
    type: Number,
    required: [true]
  },
  checkedOut:{
    type: Boolean,
    default: false,
    required: [true]
  }
});

module.exports = { schema };