//Require passport
const passport = require('passport');

//Export a function which will be called with 'app'
module.exports = app => {
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
})
// ,
// function(req, res) {
//   res.send(reg.user)
// }
);

app.get('/auth/google/callback', passport.authenticate('google', ));
};