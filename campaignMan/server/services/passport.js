//Bring in passport
const passport = require('passport');
//Bring in passport google oauth20 and export .strategy property. Exactly how to authenticate users
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

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
    console.log("Access Token Here! :" + accessToken);
    console.log("Refresh Token Here! :" + refreshToken);
    console.log("Profile Here! :" + profile);
   }
  )
 );