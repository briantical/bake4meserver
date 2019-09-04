const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  name: {
    type: String,    
    required: [true],
  },
  description:{
    type : String,    
    required: [true]
  },
  image_url:{
    type : String, 	
  	required: [true]
  },
});

module.exports = { schema };