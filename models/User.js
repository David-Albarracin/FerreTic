const { Schema, model } = require('mongoose');

var userSchema = new Schema({
	username: { type: String },
	password: { type: String },
	nombre: { type: String },
},
	{
		timestamps: true
	});

module.exports = model('User', userSchema);