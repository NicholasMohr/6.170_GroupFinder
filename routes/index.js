var express = require('express');
var cookieparser = require('cookie-parser');

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Welcome to Fritter', error: false});
	
});

/* GET followers tweets list page*/
router.get('/followerslist', function(req, res) {
	 	var db = req.db;
		var collection = db.get('usercollection');
		var tweetcollection = db.get('tweetcollection');								     
		collection.find({username:req.cookies.username},function(err,doc){	
			var followers=doc[0].followers;
			followers= (followers==undefined)? []:followers;
			tweetcollection.find({username: {$in: followers }},function(e,docs){
				res.location("followerslist");
				res.render('tweetlist', {
					"tweetlist" : docs.reverse(), "user":req.cookies.username, "justfollowers":true
				});
			});
					
    	});

});

/* GET tweetlist page. */
router.get('/tweetlist', function(req, res) {
	if(req.cookies.username!=undefined){
    var db = req.db;
    var collection = db.get('tweetcollection');
	var ucollection = db.get('usercollection');
	ucollection.find({username:req.cookies.username},function(err,doc){	
		var followers=doc[0].followers	
		followers= (followers==undefined)? []:followers;
		collection.find({},{},function(e,docs){
			res.render('tweetlist', {
				"tweetlist" : docs.reverse(), "user":req.cookies.username, "justfollowers":false, following: followers
			});
		});
	});
	}
	else{
		     res.location("/");
            // And forward to login page
            res.render('index', { title: 'Welcome to Fritter', error: false});
	}
});

/* GET New Tweet page  WORKING*/
router.get('/newtweet', function(req, res) {
    res.render('newtweet', { title: 'Create A New Tweet' });
});

/* POST to Add Tweet Service WORKING*/
router.post('/addtweet', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.cookies.username
    var content = req.body.content;

    // Set our collection
    var collection = db.get('tweetcollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "content" : content
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the tweet to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say 
            res.location("tweetlist");
            // And forward to success page
            res.redirect("tweetlist");
        }
    });
});

/* GET Edit Tweet page  WORKING*/
router.post('/edittweet', function(req, res) {
	var id=req.body.edittweetid;
	var db = req.db;
	var collection = db.get('tweetcollection');
	collection.find({_id:id}, function(err,docs){
		if(docs!=undefined && docs.length>0){
			 var oldcontent= docs[0].content;
			 res.render('edtweet', { title: 'Edit your Tweet' , oldcontent: oldcontent, id:id});
		}
		else{
			res.send("There was a problem finding that tweet.");
		}
	
	});
   
});

/* Post to edit Tweet Service  WORKING*/
router.post('/edttweet', function(req, res) {
	
    // Set our internal DB variable
    var db = req.db;
    // Get our form values. These rely on the "name" attributes
    var content = req.body.content;
	var id=req.body.tweetid;
    // Set our collection
    var collection = db.get('tweetcollection');
    collection.update({_id: id},{$set: {content: content}}, function (err, doc) {
				if (err) {
					// If it failed, return error
					res.send("There was a problem editing the tweet in the database.");
				}
				else {
					// If it worked, set the header so the address bar
					res.location("tweetlist");
					// And forward to success page
					res.redirect("tweetlist");
				}
			});
});

/* Post to edit User Followers  WORKING*/
router.post('/followuser', function(req, res) {
	
    // Set our internal DB variable
    var db = req.db;
    // Get our form values. These rely on the "name" attributes
	var username=req.body.followusername;
	var user = req.cookies.username;
    // Set our collection
    var collection = db.get('usercollection');
    collection.update({username: user},{$addToSet: { followers: username } }, function (err, doc) {
				if (err) {
					// If it failed, return error
					res.send("There was a problem following this person in the database.");
				}
				else {
						res.location("followerslist");
					// And forward to success page
					res.redirect("followerslist");

				}
			});
});

/* Post to edit User Followers  WORKING*/
router.post('/unfollowuser', function(req, res) {
	
    // Set our internal DB variable
    var db = req.db;
    // Get our form values. These rely on the "name" attributes
	var username=req.body.followusername;
	var user = req.cookies.username;
    // Set our collection
    var collection = db.get('usercollection');
    collection.update({username: user},{$pull: { followers: username } }, function (err, doc) {
				if (err) {
					// If it failed, return error
					res.send("There was a problem unfollowing this person in the database.");
				}
				else {
						res.location("followerslist");
					// And forward to success page
					res.redirect("followerslist");

				}
			});
});


/* POST to delete Tweet Service  WORKING*/
router.post('/deletetweet', function(req, res) {
    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
	var id=req.body.tweetid;

    // Set our collection
    var collection = db.get('tweetcollection');

    // Submit to the DB
    collection.remove({ _id: id}, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem finding your tweet to delete.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("tweetlist");
            // And forward to success page
            res.redirect("tweetlist");
        }
    });
});


/* GET to login User  WORKING*/
router.post('/search', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var query = req.body.query;
	 var collection = db.get('tweetcollection');
	 var ucollection = db.get('usercollection');
	ucollection.find({username:req.cookies.username},function(err,doc){	
		var followers=doc[0].followers
		followers= (followers==undefined)? []:followers;
			
		collection.find({"content": {$regex : ".*"+query+".*"}}, function(err,docs){
				res.location("tweetlist");
				res.render('tweetlist', {
					"tweetlist" : docs.reverse(), "user":req.cookies.username, "justfollowers":false, following:followers
				});
		
	});

	});
});


/* GET to login User  WORKING*/
router.post('/loginuser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var username = req.body.username;
	var password= req.body.password;

    // Set our collection
    var collection = db.get('usercollection');
	// get user with respective password and username
	var myuser=collection.find({username:username, password:password}, function(err,docs){
		if(docs!=undefined && docs.length>0){
			res.cookie('username', docs[0].username);
	    // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("tweetlist");
            // And forward to success page
            res.redirect("tweetlist");
		}
		else{
				res.location("/");
				// And forward to login page
				res.render('index', { title: 'Welcome to Fritter', error: true});
		}
		
	});


});

/* post to login User  WORKING*/
router.get('/logoutuser', function(req, res) {
    	    res.cookie('username', undefined);
			res.location("/");
            // And forward to login page
            res.redirect("/");
});


/* GET New User page WORKING */
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Create A New User Account', error: false});
});

/* POST to Add User Service WORKING*/
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userPassword = req.body.password;

    // Set our collection
    var collection = db.get('usercollection');
	
	collection.find({"username":userName}, function(err,docs){
	if(docs==undefined || docs.length==0){
		res.cookie('username', userName);
    // Submit to the DB
    collection.insert({
        "username" : userName,
        "password" : userPassword,
		"followers" : [],
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header 
            res.location("tweetlist");
            // And forward to success page
            res.redirect("tweetlist");
        }
    });
	}
	else{
		res.location("newuser");
		 res.render('newuser', { title: 'Create A New User Account', error: true});
	}
	
	
	});
	
	
});

module.exports = router;