//Common J.S. modules to bring in express with the require key word to create a server.
const express = require('express');

//Keys to mongodb
const keys = require('./config/keys');

//Mongo atlas database
const mongoose = require('mongoose');

//Require passport just need to run the passport file. Nothing being returned.
require('./services/passport')

//Connect to mongo atlas
mongoose.connect(keys.mongoURI)

//Use a variable to hold express functionality. declaration ready to rock and roll.
const app = express();

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