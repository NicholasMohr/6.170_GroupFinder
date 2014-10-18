var mongoose = require('mongoose');

var user_schema = mongoose.Schema({
	authentication: {
		name: String,
		username: String,
		password: String
	},
	projects: [{ type: String, ref: "Projects"}],
	info: {
		location: String,
		availability: [String],
		skills: [String],
		workstyle : {
			grade: Number,
			interaction: Number,
			dedication: Number,
			timing: Number
		}
	}
});

var User = mongoose.model('User', user_schema);

module.exports = User;