var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var readLink = require('./findlink');

var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send(readLink.data);
});

module.exports = router;