const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  addon: {
    type: String,    
    required: [true],
  },
  description:{
    type : String,    
    required: [true]
  },
  cost:{
  	type : Number,  	
  	required: [true]
  },
});

module.exports = { schema };
