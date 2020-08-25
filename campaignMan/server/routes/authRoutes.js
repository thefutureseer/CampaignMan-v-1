//Require passport
const passport = require('passport');

//Export a function which will be called with 'app'
module.exports = app => {
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google', ));

//Logout
app.get('/api/logout', (req, res) => {
 //Logout function attatched to the request property by passport
 //It takes the cookie and kills the id thats in there
 req.logout();
 //Let frontend know logged out
 res.send(req.user);
});

//Test auth
app.get('/api/current_user', (req, res)=> {
  res.send(req.user);
})
};