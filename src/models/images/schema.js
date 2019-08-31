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
  file_id:{
    type : ObjectId,
    ref: 'criteriafiles.files', 	
  	required: [true]
  },
});

module.exports = { schema };