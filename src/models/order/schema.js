const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  customer: {
    type: ObjectId,
    ref: "User",
    required: [true]
  },
  cart: {
    type: ObjectId,
    ref: "Cart",
    required: [true]
  },
  comments: {
    type: String,
    required: [true]
  },
  orderDate: {
    type: Date,
    default: new Date(),
    required: [true]
  },
  orderStatus: {
    type: String,
    default: "Not accepted",
    required: [true]
  },
  deliveryAddress: {
    type: String,
    required: [true]
  }
});

module.exports = { schema };
