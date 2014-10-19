var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  	//TODO: RETURN LIST OF PROJECTS
  	//still hasn't been done!
  	data.Project.find({}).exec(function(e,projects){
  		res.json(projects);
  	})
  	//res.render('index', { title: 'Project Request'});
});

router.post('/', function(req, res) {
	var newProject = new data.Project({
	  name: req.body.text,
	  end_date: req.body.date,//should be some nice date representation
	  users: []
	})
	newProject.save(function(err){
		if(err){
			res.send(err);
		}
	})
  	//TODO: Add a new project
}); 

router.get('/:project_name/users', function(req, res) {
  	data.Project.find({"name" : req.params.project_name}).populate('users').exec(function(err, docs){
  		res.json(docs[0].users);
  	});
});

router.get('/:project_name/users/filter', function(req, res) {
	var currentUsername=req.session.user; 
	var name=req.param('project_name');
	var location=req.param('location')?req.param('location') :1;
	var availability=req.param('availability')?req.param('availability') :1;	
	var grade=req.param('grade')?req.param('grade') :1;
	var interaction=req.param('interaction')?req.param('interaction') :1;	
	var dedication=req.param('dedication')?req.param('dedication') :1;
	var timing=req.param('timing')?req.param('timing') :1;	
	var skills=req.param('skills')?req.param('skills') :1;
	var skillset=req.param('skillset')?req.param('skillset') :[];		
	data.Project.find({name:name}).exec(function(err,doc){	
		if(err || doc.length==0){   
            res.send("That project could not be found");
		}
		var usernames=doc[0].users;
		data.User.find({name:currentUsername}).exec(function(err,doc){
			if(errs || docs.length==0){   
				res.send("The project could not find the user");
			}
			var currentUser=doc[0];
			data.User.find({name:{$in: usernames}}).exec(function(errs,docs){
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
			});
			
		});
		

	});
	
});


router.post('/:project_name/users', function(req, res) {
  	//TODO: Add a user to the project
  	if(req.user){
  		data.Project.find({"name" : req.params.project_name}).exec(function(err, docs){
  			data.Project.update({username: req.session.user},{$addToSet: {"users": {_id: req.session.user}}}).exec(function(e,docs){
  				res.send('worked!');
  			});
  		});
  	}

  	

});

router.delete('/:project_name/users', function(req, res) {
  	//TODO: delete the logged in user from the project

  	if(req.user){
  		data.Project.find({"name" : req.params.project_name}).populate('users').exec(function(err, docs){
  			docs.users.remove(req.session.user)
  			user.save(function(){
  				res.send('worked!');
  			})
  		});
  	}
});

router.delete('/:project_name', function(req, res) {
  	if(req.user){
  		data.Project.remove({name:req.params.project_name});
  	}
});
module.exports = router;