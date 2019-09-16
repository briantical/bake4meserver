const mongoose = require('mongoose');
const { EMAIL } = require('../../utils/regexes');
const { config } = require('../../../config');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({

	email: {
		type: String,
		required: [true],
		unique: true,
		validate: {
			validator: email => EMAIL.test(email),
			message: 'Field [email] wrong format.',
		},
	},
	verification:{
		_token:{
			type: String,
		},
		isVerified:{
			type: Boolean,
			default: false
		},
		expiry:{
			type: Date,
			default: config.emailTime
		},
		verified_at:{
			type: Date
		}
	},
	profile: {
		fullName: {
			type: String,
			required: [false],
		},
		avatar: {
			type: String,
		},
		phoneNumber:{
			type: String,
		},
		userName:{
			type: String,
		},
		address:{
			type: ObjectId,
			ref: 'Address',
			required: [false]  		
		},
		active:{
			type:Boolean,
			default:false
		}
	},
});

module.exports = { schema };