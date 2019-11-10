const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let itemsSchema = new Schema({
  cake: {
    type:ObjectId,
    ref: "Cake",   
    required: [false]
},
  snack:{
    type:ObjectId,
    ref: "Snack",   
    required: [false]
  }
});

const schema = new Schema({
  payment:{
    type : String,
    default: 'Mobile Money',
    required : [true]
  },
  totalCost:{
    type: Number,
    default: 0,
    required: [true]
  },
  checkedOut:{
    type: Boolean,
    default: false,
    required: [true]
  },
  items:[
    itemsSchema
  ]
}); 

module.exports = { schema };