const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  cart: {
    type: String,    
    required: [true],
  },
  description:{
    type : String,    
    required: [true]
  },
  items:[{
  	order:{
      type: ObjectId,
      ref: 'Order',
      required: [true],
    }
  }],
  cost:{
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
