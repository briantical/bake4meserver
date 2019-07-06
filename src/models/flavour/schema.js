const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({  
  flavour:{
    type : String,    
    required: [true]
  },
  description: {
    type: String,    
    required: [true],
  },
  cost: {
    type: Number,    
    required: [true]
  },
  amount:{
    type: Number,    
    required: [true]
  }
});

module.exports = { schema };
