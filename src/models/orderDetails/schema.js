const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({  
  orderDetails:{
    type: ObjectId,
    ref: 'Order',
    required: [true],
  },
  cost: {
    type: Number,    
    required: [true],
  },
  delivery: {
    type: ObjectId,
    ref: 'Delivery',
    required: [true],
  }
});

module.exports = { schema };
