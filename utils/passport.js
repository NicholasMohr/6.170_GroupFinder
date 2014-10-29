var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/users');
var utils = require('../utils/utils');

/**
Passport Utilities
Written by Danielle
**/
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
                    return done(null, false, { message: 'That email is already taken.' });
                } else {
                    var new_user = new User({
                        authentication: {
                            username: username
                        },
                        projects: [],
                        info: {
                            name: req.param('name', ''),
                            email: req.param('email', ''),
                            phone: req.param('phone', ''),
                            location: req.param('location', ''),
                            availability: [],
                            skills: [],
                            timing: .5
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
                return done(null, false, { message: 'Incorrect Username.' });
            }
            if (!user.valid_password(password)) {
                return done(null, false, { message: 'Incorrect Password.' });
            }
            return done(null, user);
        });
    }));

};