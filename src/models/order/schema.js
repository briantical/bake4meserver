const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({  
  description: {
    type: String,    
    required: [true],
  },
  customer:{
    type: ObjectId,
    ref: 'Customer',
    required: [true],
  },
  orderDate:{
    type: Date,
    required: [true],
  }
});

module.exports = { schema };
