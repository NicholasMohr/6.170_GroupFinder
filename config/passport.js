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
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    }, function(req, email, password, done) {
        process.nextTick(function() {
            User.findOne({ 'local.email' :  email }, function(err, user) {
                if (err)
                    return done(err);
                if (user) {
                    return done(null, false, { message: 'That email is already taken.' });
                } else {
                    var new_user = new User();
                    new_user.local.email    = email;
                    new_user.local.password = password;
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
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {
        User.findOne({ 'local.email' :  email }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect Username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect Password.' });
            }
            return done(null, user);
        });
    }));

};