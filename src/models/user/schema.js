const mongoose = require("mongoose");
const { EMAIL } = require("../../utils/regexes");
const { config } = require("../../../config");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  email: {
    type: String,
    required: [true],
    unique: true,
    validate: {
      validator: email => EMAIL.test(email),
      message: "Field [email] wrong format."
    }
  },
  verification: {
    _token: {
      type: String
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    expiry: {
      type: Date,
      default: config.emailTime
    },
    verified_at: {
      type: Date
    }
  },
  profile: {
    fullName: {
      type: String,
      required: [false]
    },
    avatar: {
      type: String
    },
    phoneNumber: {
      type: String
    },
    userName: {
      type: String
    },
    location: {
      type: {
        type: String,
        default: "Point"
      },
      coordinates: [Number]
    },
    active: {
      type: Boolean,
      default: false
    },
    complete: {
      type: Boolean,
      default: false
    }
  },
  cart: {
    type: ObjectId,
    ref: "Cart"
  }
});

schema.index({ location: "2dsphere" });

module.exports = { schema };
