var express = require('express');
var router = express.Router();

var User = require('../models/users');
var Project = require('../models/projects');
var utils = require('../utils/utils');
router.get('/', function(req, res) {
  	//TODO: RETURN LIST OF PROJECTS
  	Project.find({},function(e,projects){
		//TODO: THROW HTTP ERROR if e
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
			//TODO: THROW HTTP ERROR
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
//WORKING
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
			var userIDs=project.users;
			if(!req.user){   
					utils.sendErrResponse(res, 401, 'You must first login as a user');
				}
			else{
					var currentUser=req.user;
					User.find({_id:{$in: userIDs}},function(errs,docs){
						console.log(docs);
						if(errs){
							utils.sendErrResponse(res, 500, 'An unknown error occurred.');
						}
						else{
							var users=[];	
							docs.forEach(function(user){
								var score=0;
								// Add 1 if the location is the same. Otherwise add 0
								if(currentUser.info.location){
									if(currentUser.info.location==user.info.location){
										console.log('location match'+ user.info.location+ "and"+ currentUser.info.location);
										score+= location
									}
								}
								// number of same hours availible over total number of hours current user is available
								// times the user-inputted weight
								if(currentUser.info.availibility){
								var result = currentUser.info.availibility.filter(function(c) {
									return user.info.availibility.indexOf(c) !== -1;
								});
									score+=(result.length*availability)/currentUser.info.availibility.length
								}
								// for grade, interaction, dedication, and timing the score is 1 minus the difference 
								// times the user-inputed weight
								if(currentUser.info.grade){
									score+=score+ (1-Math.abs(currentUser.info.grade-user.info.grade))*grade;
								}
								if(currentUser.info.interaction){
									score+=(1-Math.abs(currentUser.info.interaction-user.info.interaction))*interaction;
								}
								if(currentUser.info.dedication){
									score+= (1-Math.abs(currentUser.info.dedication-user.info.dedication))*dedication;
								}
								if(currentUser.info.timing){
									score+=(1-Math.abs(currentUser.info.timing-user.info.timing))*timing;
								}
								// number of matched requested skills divided by the total number of requested skills
								// times the user-inputted weight
								if(skillset.length!=0){
								var result = skillset.filter(function(c) {
									return user.info.skillset.indexOf(c) !== -1;
								});
									score+=(result.length*skills)/skillset.length
								}
								// add score to user
								user.score=score;
								console.log(score);
								users.push(user);
							});
							// return users sorted by ascending scores
							res.json(users.sort(function(a, b) {return a.score - b.score;}).reverse());
						}
					});
				}
		}

	});
	
});
//WORKING
router.post('/:project_name/users', function(req, res) {
  	if(req.user){
		Project.update({"name": req.params.project_name},{$addToSet: {"users":  req.user._id}},function(e,docs){
			if(e){
				console.log("THIS IS BAD");
				//TODO: THROW ERROR
			}
			//TODO: add project name to user's project list
			
		});
  	}
  	else{
		//TODO: THROW HTTP ERROR
  		res.send('no session, make sure you\'re logged in!');
  	}
  	

});

router.delete('/:project_name/users', function(req, res) {
  	if(req.user){
  		Project.findOne({"name": req.params.project_name},function(err,docs){
			//TODO: THROW ERROR
  			docs.users.remove(req.user._id);
  			docs.save(function(){
  				console.log("great job");
  			})
  		})
  	}
  	else{
		//TODO: THROW HTTP ERROR
  		res.send('no session, make sure you\'re logged in!');
  	}
});


router.delete('/:project_name', function(req, res) {
  	if(req.user){
  		Project.remove({name:req.params.project_name},function(e,docs){
			//TODO: THROW ERROR
  			console.log("great job");
  		});
  	}
  	else{
	   //TODO: THROW HTTP ERROR
  		res.send('no session, make sure you\'re logged in!');
  	}
});
module.exports = router;