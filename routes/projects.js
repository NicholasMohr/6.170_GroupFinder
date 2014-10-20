var express = require('express');
var router = express.Router();

var User = require('../models/users');
var Project = require('../models/projects');
var utils = require('../utils/utils');
router.get('/', function(req, res) {
  	//TODO: RETURN LIST OF PROJECTS
  	Project.find({},function(e,projects){
		console.log(projects[0].name);
  		res.json(projects);
  	});
});
//WORKING
router.post('/', function(req, res) {

	//TODO: make sure there is not already a project!!!
	var newProject = new Project({
	  name: req.body.name,
	  end_date: req.body.end_date 
	})
	newProject.save(function(err){
		if(err){
			res.send(err);
		}
		else{
			console.log(newProject);
			res.json(newProject);
		}
	})
}); 
//WORKING
router.get('/:project_name/users', function(req, res) {

  	Project.findOne({"name" : req.params.project_name},function(err, docs){
		if(err){
			//TODO: THROW ERROR
		}
  		res.json(docs.users);
  	});

});
//NOT SURE IF WORKING
router.get('/:project_name/users/filter', function(req, res) {
	var userID=req.session.passport.user; 
	var name=req.param('project_name');
	var location=req.query.location?req.query.location :1;
	var availability=req.query.availability?req.query.availability :1;	
	var grade=req.query.grade?req.query.grade :1;
	var interaction=req.query.interaction?req.query.interaction :1;	
	var dedication=req.query.dedication?req.query.dedication :1;
	var timing=req.query.timing?req.query.timing :1;	
	var skills=req.query.skills?req.query.skills :1;
	var skillset=req.query.skillset?req.query.skillset :[];		
	Project.findOne({name:name},function(err,project){
		if(err||project==null){   
            utils.sendErrResponse(res, 404, 'The project could not be found.');
		}
		else{
			var projectID=project.id;
			var usernames=doc.users;
			User.findOne({id:userID} ,function(err,user){
				if(err||user==null){   
					utils.sendErrResponse(res, 404, 'The user could not be found');
				}
				else{
					var currentUser=user;
					User.find({name:{$in: usernames}},function(errs,docs){
						if(errs){
							utils.sendErrResponse(res, 500, 'An unknown error occurred.');
						}
						else{
								
							docs.forEach(function(user){
								var score=0;
								// Add 1 if the location is the same. Otherwise add 0
								if(user.location==currentUser.location){
									score+= location
								}
								// number of same hours availible over total number of hours current user is available
								// times the user-inputted weight
								if(currentUser.availibility.length!=0){
								var result = currentUser.availibility.filter(function(c) {
									return user.availibility.indexOf(c) !== -1;
								});
									score+=(result.length*availability)/currentUser.availibility.length
								}
								// for grade, interaction, dedication, and timing the score is 1 minus the difference 
								// times the user-inputed weight
								if(currentUser.grade){
									score+=score+ (1-Math.abs(currentUser.grade-user.grade))*grade;
								}
								if(currentUser.interaction){
									score+=(1-Math.abs(currentUser.interaction-user.interaction))*interaction;
								}
								if(currentUser.dedication){
									score+= (1-Math.abs(currentUser.dedication-user.dedication))*dedication;
								}
								if(currentUser.timing){
									score+=(1-Math.abs(currentUser.timing-user.timing))*timing;
								}
								// number of matched requested skills divided by the total number of requested skills
								// times the user-inputted weight
								if(skillset.length!=0){
								var result = skillset.filter(function(c) {
									return user.skillset.indexOf(c) !== -1;
								});
									score+=(result.length*skills)/skillset.length
								}
								// add score to user
								user.score=score;
							});
							// return users sorted by ascending scores
							res.json(users.sort(function(a, b) {return a.score - b.score;}));
						}
					});
				}
			});
		}

	});
	
});


router.post('/:project_name/users', function(req, res) {
  	//TODO: Add a user to the project
  	if(req.user){
		Project.updateOne({"name": req.params.project_name},{$addToSet: {"users": {_id: req.user._id}}},function(e,docs){
			if(e){
				console.log("THIS IS BAD");
				//TODO: THROW ERROR
			}
			else{
				console.log(docs);
				res.json(docs)
			}
			
		});
  	}
  	else{
  		res.send('no session, make sure you\'re logged in!');
  	}
  	

});

router.delete('/:project_name/users', function(req, res) {
  	//TODO: delete the logged in user from the project

  	if(req.user){
  		Project.find({"name" : req.params.project_name}).populate('users').exec(function(err, docs){
  			docs.users.remove(req.user._id)
  			user.save(function(err){
  				if(err){
					res.send(err);
				}
				else{
					console.log(user);
					res.json(newProject);
				}
  			})
  		});
  	}
  	else{
  		res.send('no session, make sure you\'re logged in!');
  	}
});

router.delete('/:project_name', function(req, res) {
  	if(req.user){
  		Project.remove({name:req.params.project_name});
  	}
  	else{
  		res.send('no session, make sure you\'re logged in!');
  	}
});
module.exports = router;