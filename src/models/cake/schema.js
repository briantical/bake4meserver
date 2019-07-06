const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  cake: {
    type: String,    
    required: [true],
  },
  cakeType:{
    type: String,
    default: "Birthday",
    required: [true]
  },
  description:{
    type : String,    
    required: [true]
  },
  cost:{
  	type : Number,  	
  	required: [true]
  },
  cakeDetails:[{
    unitWeight:{
      type: Number,
      required: [true]
    },
    shape:{
      type: String,
      default: "Custom",
      required: [true]
    },
    tiers:{
      type: Number,
      default: 1,
      required: [true]
    }
  }]
});

module.exports = { schema };
