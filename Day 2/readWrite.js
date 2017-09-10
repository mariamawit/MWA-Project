

const fs = require('fs');
const server = require('https')
        .createServer({
            key: fs.readFileSync('./key.pem'),
            cert: fs.readFileSync('./cert.pem'),
        });



server.on('request',function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
});
server.listen(8081);
            