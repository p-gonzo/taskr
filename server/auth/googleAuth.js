var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var saveGoogleUser = require('../models/userModels.js').saveGoogleUser;
var populateGoogleProfile = require('../models/userModels.js').populateGoogleProfile;

require('dotenv').config();

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:9000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    saveGoogleUser(profile._json, () => {
      return populateGoogleProfile(profile._json, (err, user) => {
        return done(err, user);
      });
    });
  }));

module.exports = passport;