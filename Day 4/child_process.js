
const fs = require('fs');
const path = require('path');

process.on('message', (fileName) => {
    fs.readFile(fileName, function (err, data) {
        if (err) throw err;
        
        process.send(data.toString());
      });
  });