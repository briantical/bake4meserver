const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  name: {
    type: String,
    required: [true],
    unique: true
  },
  description: {
    type: String,
    required: [true]
  },
  images: {
    type: [String],
    required: [true]
  },
  category: {
    type: ObjectId,
    ref: "Category",
    required: [true]
  },
  price: {
    type: Number,
    required: [true]
  },
  required: {
    shapes: {
      type: [String],
      default: "Custom",
      required: [true]
    },
    tiers: {
      type: [Number],
      default: 1,
      required: [true]
    },
    flavours: {
      type: [String],
      required: [true]
    },
    colours: {
      type: [String],
      required: [true]
    },
    weight: {
      type: [Number],
      required: [true]
    }
  },
  options: {
    drinks: [
      {
        name: {
          type: String,
          required: [true]
        },
        price: {
          type: Number,
          required: [true]
        }
      }
    ]
  }
});

module.exports = { schema };
