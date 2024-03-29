const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  paymentType: {
    type: String,
    default: "mobile money",
    required: [true]
  },
  paymentStatus: {
    type: Boolean,
    default: false,
    required: [true]
  },
  paymentDetails: {
    primaryAccount: {
      type: String,
      default: "0700000000",
      required: [true]
    },
    secondaryAccount: {
      type: String,
      default: "0700000000"
    }
  }
});

module.exports = { schema };
