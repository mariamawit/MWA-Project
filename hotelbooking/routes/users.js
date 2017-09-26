var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
      res.setHeader({"content-type":"appliation/json"});
    
      req.db.collection("availablerooms").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);        
       //res.render('users', { result: result, error:null }) 
       res.send(JSON.stringify(result));
      });  
    });   


module.exports = router;
