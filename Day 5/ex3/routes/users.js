var express = require('express');
var fetch = require('node-fetch');
var Rx = require('rxjs');
var router = express.Router();

const getsUsersAsync = async function(){
  let data;
  try{
    data = await fetch('http://jsonplaceholder.typicode.com/users/');
  }
  catch(err){

  }
  return data || '';
}

router.get('/async', function(req, res, next){
  getsUsersAsync()
  .then(d => { return d.json() })
  .then(d => res.render('users', { userdata: d}))
  .catch(err => console.log(err));
});


router.get('/rxjs', function(req, res, next){
  Rx.Observable.fromPromise(fetch('http://jsonplaceholder.typicode.com/users/')
    .then(d => { return d.json() })
    .catch(err => console.log(err)))
    .subscribe(
      d => res.render('users', { userdata: d}),
      err => console.log(err),
      () => console.log("Done")
    );
});

  

/* GET users listing. */
// router.get('/', function(req, res, next){
//   fetch('http://jsonplaceholder.typicode.com/users/')
//   .then(d => { })
// })

router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  fetch('http://jsonplaceholder.typicode.com/users/')
  .then(d => {   return d.json()  })
  .then(d => res.render('users', { userdata: d}))
  .catch(err => console.log(err));
});

module.exports = router;
