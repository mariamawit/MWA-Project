
var fs = require('fs');
var zlib = require('zlib');
var gzip = zlib.createGzip();


var unzip = zlib.createGunzip();
var compressed2 = fs.createReadStream(__dirname + '/destination.jpg.gz');
var unzipped = fs.createWriteStream(__dirname + '/unzipped.jpg');

compressed2.pipe(unzip).pipe(unzipped);
