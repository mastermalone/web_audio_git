module.exports.server = (function devServer() {
  'use strict';
  
  var connect = require('connect');
  var http = require('http');
  var app = connect();
  var serveStatic = require('serve-static');
  var path = require('path');
  
  
  var Server = {
    init: function init(port) {
       //app = connect();
       var port_val = port || 3003;
       
       app.use(serveStatic(path.join(__dirname, '../../'), {index:['index.html']}));
       console.log('Listening on port:', port);
       http.createServer(app).listen(port);
    }
  };
  
  return Server;
}());
