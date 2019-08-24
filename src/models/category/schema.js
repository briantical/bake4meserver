const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,    
    required: [true],
  },
  description:{
    type : String,    
    required: [true]
  },
  priceRange : {
    type : String,
    default : "100000 - 3000000",
    required : [true]
  }
  //Add a price range for each category
});

module.exports = { schema };