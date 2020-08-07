//Common J.S. modules to bring in express with the require key word to create a server
const express = require('express');
//Use a variable to hold express functionality ready to rock and roll
const app = express();
//Use a variable to hold the port and the process.env functionality for hosting the application
const PORT = process.env.PORT || 5000
//Express app to register this Route handler with. Watch for incoming http requests with GET method.
//Watch for requests trying to access "/simpleserver". req is the object representing the incoming request
//res is the object representing the outgoing response. Immediately send some json back "to browser user requesting this".
app.get("/simpleserver", function(req, res) {
  res.send({msg: 'This is added to the browser'})
});
//Make express app listen on the port and console what port we are listening.
app.listen(PORT, function(req, res) {
  console.log(`Listening on ${PORT}`)
});