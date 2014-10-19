var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/users');

// expose functions to app
module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

 	passport.use('local-signup', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true
    }, function(req, username, password, done) {
        process.nextTick(function() {
            User.findOne({ 'authentication.username' :  username }, function(err, user) {
                if (err)
                    return done(err);
                if (user) {
                    console.log("That email is already taken.");
                    return done(null, false, { message: 'That email is already taken.' });
                } else {
                    var new_user = new User({
                        authentication: {
                            name: req.param('name', ''),
                            username: username,
                        },
                        projects: [],
                        info: {
                            location: '',
                            availability: [],
                            skills: [],
                            workstyle : {
                                grade: -1,
                                interaction: -1,
                                dedication: -1,
                                timing: -1
                            }
                        }
                    });
                    new_user.set_password(password);
                    new_user.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, new_user);
                    });
                }
            });    
        });
    }));

    passport.use('local-login', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, username, password, done) {
        User.findOne({ 'authentication.username' :  username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                console.log("Incorrect Username.");
                return done(null, false, { message: 'Incorrect Username.' });
            }
            if (!user.valid_password(password)) {
                console.log("Incorrect Password.");
                return done(null, false, { message: 'Incorrect Password.' });
            }
            console.log("should have been success")
            return done(null, user);
        });
    }));

};