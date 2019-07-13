const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  country: {
    type: String,
    default: "Uganda",
    required: [true],
  },
  region: {
    type: String,
    required: [true],
  },
  district: {
    type: String,
    required: [true],    
  },
  street: {
    type: String,
    required: [true],
  },    
	location: {
		type: {
			type: String,
			default: 'Point'
		},
		coordinates: [Number]
	},
});

schema.index({ "location": "2dsphere" });

module.exports = { schema };