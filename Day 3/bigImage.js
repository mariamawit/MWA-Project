var fs = require('fs');

var path = require('path');

var http = require('http');

http.createServer(function(req, res){

var readable = fs.createReadStream(path.join('./image.jpg'));

readable.pipe(res);

}).listen(8081);

