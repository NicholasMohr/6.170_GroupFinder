var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
	name: String,
	end_date: Date,
	users: [{type: String, ref: 'User'}]
});

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;