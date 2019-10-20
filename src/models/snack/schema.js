const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  category:{
    type: ObjectId,
    ref: "Category",
    required: [true]
  },
  name:{
    type : String,
    required: [true],
    unique : true,    
  },
  description:{
    type : String,    
    required: [true]
  },
  image:{
    type: String,
    required: [true]
  },
  snackDetails:{
    weight:{
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
    },
    flavour:{
      type: String,
      required: [true]
    },
    cost:{
      type : Number,  	
      required: [true]
    },
  }
});

module.exports = { schema };
