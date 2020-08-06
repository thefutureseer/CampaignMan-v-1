const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000

app.get("/simpleserver", function(req, res) {
  res.end('This is added to the browser')
});

app.listen(PORT, function(req, res) {
  console.log("Listening on 3000")
});