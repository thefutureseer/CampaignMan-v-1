//Logic to return credentials

if (process.env.NODE_ENV === 'production') {
  //Return production
  module.exports = require('./prod');
} else {
  //Return developer
  module.exports = require('./dev');
};