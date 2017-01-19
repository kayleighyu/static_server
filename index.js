var express = require('express'); //gets to the file 'express' in the node_modules folder
var server = express();


var port = 8080; //think of this as the door number to the static_server

server.listen(port, function(){
  console.log('Now listening on port', port);
});
