var express = require('express');
var router = express.Router();
var User = require('../models/users');
var Project = require('../models/projects');
var utils = require('../utils/utils');


/**
Returns the profile information for the requested user.
**/
router.get('/:username', function(req, res) {
	User.findOne({'authentication.username': req.params.username}, function (err, user) {
		if(err){
			utils.sendErrResponse(res, 500, 'An unexpected error occured.');
		}
		else{
			res.json(req.user.info);
		}
		
	});
});

// returns success if there is a currently logged in user
router.get('/', function(req, res) {
  if (req.user) {
    utils.sendSuccessResponse(res, {loggedIn: true, user: req.user});
  } else {
    utils.sendSuccessResponse(res, {loggedIn: false});
  }
});

/**
Returns a list of projects associated with the requested user.
**/
router.get('/:username/projects', function(req, res) {
	User.findOne({'authentication.username': req.params.username}).populate("projects.proj_id").exec({}, function (err, user) {
		if(err){
		utils.sendErrResponse(res, 500, 'An unexpected error occured.');
		}
		else{
			console.log(projects);
			res.json(user.projects);
		}
	});
});

/**
Updates user info. Users can update:
  password, name, email, phone, location, availability, skills, timing
**/
router.put('/', function (req,res) {
	var password = req.user.authentication.password;
	var info = req.user.info;
	if (req.body.password) { password = req.body.password; } 
	if (req.body.name) { info.name = req.body.name; }
	if (req.body.email) { info.email = req.body.email; }
	if (req.body.phone) { info.phone = req.body.phone; }
	if (req.body.location) { info.location = req.body.location; }
	if (req.body.availability) { info.availability = req.body.availability; }
	if (req.body.skills) { info.skills = req.body.skills; }
	if (req.body.timing) { info.timing = req.body.timing; }
	
	User.update({'_id': req.user._id}, {
		$set: { 'info': info , 'authentication.password': password}
	}, function (err) {
		if (err) {
			utils.sendErrResponse(res, 500, 'An unexpected error occured. Could not update information');
		} else {
			res.json(req.user);
		}
	});
});

/**
Deletes a user based on their ID.
**/
router.delete('/', function(req, res) {
  	if(req.user){
  		User.remove({_id:req.user._id},function(e,docs){
			if(e){
				 utils.sendErrResponse(res, 500, 'An unexpected error occurred. We could not add the user to the project.');
			}
			else{
				utils.sendSuccessResponse(res, 'Sucessfully removed user from project');
			}
  		});
  	}
  	else{
		utils.sendErrResponse(res, 401, 'You must first login as a user');
  	}
});

module.exports = router;