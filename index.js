var express = require('express'); //gets to the file 'express' in the node_modules folder
var server = express();


var port = 8080; //think of this as the door number to the static_server

server.get('/', function(request, response){
  response.sendFile('index.html', {root: __dirname + '/public/html'});
});
server.listen(port, function(){
  console.log('Now listening on port', port);
});
