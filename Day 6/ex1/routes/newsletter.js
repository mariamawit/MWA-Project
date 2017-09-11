var express = require('express');
var bodyParser = require('body-parser');
var csrf = require('csurf');
var fs = require('fs');
var appRootDir = require('app-root-dir').get();
var path = require('path');

// setup route middlewares 
var csrfProtection = csrf({ cookie: true })
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var router = express.Router();

let error = null;

router.post('/', csrfProtection, urlencodedParser, 
  
  function(req, res, next) {
    req.checkBody('email', 'must be an email').isEmail();
    const err = req.validationErrors(true );    
    

    if(err || req.session.csrfToken !== req.body._csrf ){
      req.session.csrfToken = req.csrfToken();
      res.render('newsletter', {title: 'Subscribe', error:"A valid Email is Required", csrfToken: req.session.csrfToken });
    }
    else{
      req.session.email = req.body.email;
      
      return next();
    }
  
  },
  
  function(req, res) {
    let t = req.body.email + '\r\n';
    fs.appendFile(path.join(appRootDir,'/temp/subscribers.txt' ), t, function (err) {
      if (err) throw err;
      console.log('Saved!');
      res.redirect('/newsletter/thankyou');
    });
  }
);

router.get('/thankyou', function(req, res, next) {
 
  if(req.session.email){
    let email = req.session.email;
    //destroy session
    req.session.email = null;
    req.session.csrfToken = null;
    res.render('thanks', {title: 'Thank You', email });
  } 
  else{
    res.redirect('/newsletter');
  }

});

/* GET subscribe form */
router.get('/', csrfProtection, function(req, res, next) {
    req.session.csrfToken = req.csrfToken();
    res.render('newsletter', {title: 'Subscribe', error:null, csrfToken: req.session.csrfToken });
});

module.exports = router;
