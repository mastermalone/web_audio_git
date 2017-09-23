(function startServer() {
  'use strict';
  
  var server = require('./dev-server/0.1/server').server;
  
  server.init(3005);
}());
