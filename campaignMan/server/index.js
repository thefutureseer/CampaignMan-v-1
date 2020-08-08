//Common J.S. modules to bring in express with the require key word to create a server
const express = require('express');
//Bring in passport
const passport = require('passport');
//Bring in passport google oauth20 and export .strategy property. Exactly how to authenticate users
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

//Use a variable to hold express functionality. declaration ready to rock and roll
const app = express();

//Take passport library and inform it how to make use of GoogleStrategy
//new instance of the passport strategy
passport.use(
 new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
  accessToken => {
   console.log("Access Token Here! :" + accessToken)
  }
 )
);

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  })
  // ,
  // function(req, res) {
  //   res.send(reg.user)
  // }
);

//Use a variable to hold the port and the process.env functionality for hosting the application.
//Hosting: process.env.PORT is listening making sure were on the port Heroku tells us to be on or 5000 for dev.
const PORT = process.env.PORT || 5000

// //Express app to register this Route handler with. Watch for incoming http requests of GET method.
// //Watch for requests trying to access "/". req is the object representing the incoming request
// //res is the object representing the outgoing response. 
// app.get("/", function(req, res) {
//   //No request for it just Immediately send some json back to browser as a test.
//   res.send({msg: 'This is added to the browser'})
// });

//Express app listen on port, empty callback function runs backend console.log for what port were listening to.
app.listen(PORT, () => console.log(`Listening on ${PORT}`));