const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({  
  order:{
    type: ObjectId,
    ref: 'Order',
    required: [true],
  },
  product: {
    type: ObjectId,
    ref: 'Product',  
    required: [true],
  },
  quantity: {
    type: Number,
    required: [true],
  },
  cart:{
    type: ObjectId,
    ref: 'Cart',
    required : [true]
  }
});

module.exports = { schema };
