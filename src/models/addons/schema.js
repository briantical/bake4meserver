const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  category: {
    type: ObjectId, 
    ref: "Category",   
    required: [true],
  },
  name:{
    type : String,    
    required: [true]
  },
  description:{
    type : String,    
    required: [true]
  },
  image:{
    type: String,
    required : [true]
  },
  cost:{
  	type : Number,  	
  	required: [true]
  },
});

module.exports = { schema };
