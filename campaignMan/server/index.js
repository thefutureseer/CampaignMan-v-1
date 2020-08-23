//Common J.S. modules to bring in express with the require key word to create a server.
const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
//Keys to mongodb
const keys = require('./config/keys');
//Mongo atlas database, mongoose functionality
const mongoose = require('mongoose');
//As app loads mongo loads
require('./models/User');
//Require passport automatically run the passport file. Nothing being returned.
require('./services/passport');

//Connect to mongo atlas
mongoose.connect(keys.mongoURI, {useUnifiedTopology: true, useNewUrlParser: true })

//Use a variable to hold express functionality. declaration ready to rock and roll.
const app = express();

//Tell express it need to make use of cookies in app
//Call a configuration object
app.use(cookieSession({
  //Encrypt cookie
  keys: [keys.cookieKey],
  //How long to last [key] maxAge: (days max) 30 * (hours to a day) 24 * (minutes to an hour) 60 * (seconds to a min) 60 * (milliseconds to one second) 1000
  maxAge: 12 * 60 * 60 * 1000
}));

//Passport
app.use(passport.initialize());
app.use(passport.session());

//Require auth routes and immediately envoke with argument of 'app'.
require('./routes/authRoutes')(app);

//Use a variable to hold the port and the process.env functionality for hosting the application.
//Hosting: process.env.PORT is listening making sure were on the port Heroku tells us to be on or 5000 for dev.
const PORT = process.env.PORT || 5000

// //Express app to register this Route handler with. Watch for incoming http requests of GET method.
// //Watch for requests trying to access "/". req is the object representing the incoming request.
// //res is the object representing the outgoing response. 
// app.get("/", function(req, res) {
//   //No request for it just Immediately send some json back to browser as a test.
//   res.send({msg: 'This is added to the browser'})
// });

//Express app listen on port, empty callback function runs backend console.log for what port were listening to.
app.listen(PORT, () => console.log(`Listening on ${PORT}`));