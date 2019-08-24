const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  user :{
    type: ObjectId,
    ref: "User",
    required: [true]
  },
  paymentChoice:{
  	type : String,  	
  	required: [true]
  },
});

module.exports = { schema };