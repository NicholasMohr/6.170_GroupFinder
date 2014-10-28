// Written by Danielle, Nick and Marissa
var mongoose = require('mongoose');

var user_schema = mongoose.Schema({
	authentication: {
		username: String,
		password: String
	},
	projects: [{
		proj_id: {type: String, ref: "Project"},
		desired_grade: Number,
		interaction: Number,
		dedication: Number
	}],
	info: {
		name: String,
		email: String,
		phone: String,
		location: String,
		availability: [String],
		skills: [String],
		timing: Number
	}
});

user_schema.methods.set_password = function(password) {
    this.authentication.password = password;
};
 
user_schema.methods.valid_password = function(password) {
    return this.authentication.password === password;
};

var User = mongoose.model('User', user_schema);
module.exports = User;