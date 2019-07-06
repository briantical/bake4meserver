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
			required: [true],
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
		}
	},
});

module.exports = { schema };