//Export an object where the values are being pulled from the environment 
//variables in the heroku environment
module.exports = 
{
 //Look for environment variables
 googleClientID: process.env.GOOGLE_CLIENT_ID,
 googleClientSecret: process.env.GOOGLE_CLIENT_SECRETS,
 mongoURI: process.env.MONGO_URI,
 cookieKey: process.env.COOKIE_KEY
};