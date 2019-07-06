const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({  
  deliveryType:{
    type : String,
    default: "Pickup",
    required: [true]
  },
  toBeDelivered: {
    type: Boolean,    
    required: [true],
  },   
  deliveryDetails:{
    isDelivered: {
      type: Boolean,
      default: false,
      required: [true]
    },
    deliveryDate:{
      type: Date,
      default: new Date(),
      required: [true]
    },
    recepient:{
      type: String,
      default: "Owner",
      required: [true]
    },
    address:{
      type: ObjectId,
      ref: 'Address',
      required: [true],
    },
    deliveryCost:{
      type: Number,
      default: 0,
      required: [true]
    }
  }
});

module.exports = { schema };
