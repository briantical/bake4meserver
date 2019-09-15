const mongoose = require('mongoose');
const { EMAIL } = require('../../utils/regexes');
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
		_token:{
			type: String,
		},
		isVerified:{
			type: Boolean,
			default: false
		}
	},
});

module.exports = { schema };