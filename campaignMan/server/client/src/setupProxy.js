const {createProxyMiddleware} = require('http-proxy-middleware');
module.exoports = function (app) {
 app.use(
   ['/api', '/auth/google'], 
   createProxyMiddleware({
     target: 'http://localhost:5000'
   })
 );
};