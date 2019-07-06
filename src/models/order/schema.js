const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({  
  order:{
    type : String,    
    required: [true]
  },
  description: {
    type: String,    
    required: [true],
  },
  items: [{
    cake:{
      type: ObjectId,
      ref: 'Cake',
      required: [true],
    },
    addons:{
      type: ObjectId,
      ref: 'Addons',
      required: [true],
    }
  }]
});

module.exports = { schema };
