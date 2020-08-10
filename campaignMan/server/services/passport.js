//Bring in passport
const passport = require('passport');
//Bring in passport google oauth20 and export .strategy property. Exactly how to authenticate users
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//Bring in Mongoose and keep it clean without creating too many models
const mongoose = require('mongoose'); 
const keys = require('../config/keys');

//Require mongoose model class without creating too many user models
//Can use this to create and save a new instance
const User = mongoose.model('users');

//Take passport library and inform it how to make use of GoogleStrategy
//new instance of the passport strategy
passport.use(
  new GoogleStrategy(
   {
     clientID: keys.googleClientID,
     clientSecret: keys.googleClientSecret,
     callbackURL: '/auth/google/callback'
   },
   (accessToken, refreshToken, profile, done) => {
    //Use model class to create new model instance in the database
    new User({googlClientID: profile.id}).save();
   }
  )
 );