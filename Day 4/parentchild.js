
const http = require('http');
const urlMod = require('url');
const fs = require('fs');
const path = require('path');
const { fork } = require('child_process');

http.createServer(function (req, res){
    var fileName = urlMod.parse(req.url, true).query.url;    
    if(fileName && fs.existsSync(fileName)){
        const compute = fork('child_process.js');
        compute.send(fileName);
        compute.on('message', r => {
            res.end(r);
        })
    }   
    else {
        res.end("Unable to Locate file");
    }
}).listen(8081)