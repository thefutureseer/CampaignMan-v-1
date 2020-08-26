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

//Define a function and pass it to SerializeUser function. user 
//argument is the user (mongoose model instance) we pull out of the db & done callback. 
passport.serializeUser((user, done) => {
  //1st argument is an error object never expect any errors so I just put "null" no errors
  //2nd argument is user.id which is not the profile id (or googleID) but its the 
  //mongo id. not every user will have googleID but every user has mongo id. and its
  //a shortcut to find the user in mongo
 done(null, user.id);
});

//Turn id back into a user.
passport.deserializeUser((id, done) => {
  //Use model class which is capital u User.
  //Query mongoDB with findById()
  User.findById(id)
  //anytime we access mongodb its asynchronis and assume it 
  //returns a promise resolved after id is found for so call
  //then() with a user model and call done with user we just pulled out
  .then(user => {
    done(null, user)
  })
});

//Take passport library and inform it how to make use of GoogleStrategy
//new instance of the passport strategy
passport.use(
  new GoogleStrategy(
   {
     clientID: keys.googleClientID,
     clientSecret: keys.googleClientSecret,
     callbackURL: '/auth/google/callback',
     proxy: true
   },
    (accessToken, refreshToken, profile, done) => {
    //First search for profile.id then create a new one. Never use 
    //profile id again after user exists.
     User.findOne({ googleId: profile.id }).then(existingUser => {
      if (existingUser) {
        //If user exists do nothing. We already have a record.
        //console.log("Profile id here: " + profile.id (googleID));
        done(null, existingUser);
      } else {
        //If no user found, Use model class to create new model 
        //instance in the database. Save it and make sure its there
         new User({ googleId: profile.id }).save().then(user => {
          done(null, user);
        });
      }
    });
   }
  )
 );