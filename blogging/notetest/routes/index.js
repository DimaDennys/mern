var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET helloworld page. */
router.get('/helloworld', function(req, res, next) {
  res.render('helloworld', { title: 'Hello world!!!' });
});


/* GET Userlist page. */
  router.get('/userlist', function(req, res) {
    var db = req.db
    var userCollection = db.get('usercollection')
    console.log('userCollection is: ', userCollection)   
    userCollection.find({},{},function(err, data) {
      if (err) throw err
      
      // data = [{
      //   "username" : "testuser1",
      //   "email" : "testuser1@testdomain.com"
      // },
      // {
      //   "username" : "testuser2",
      //   "email" : "testuser2@testdomain.com"
      // },
      // {
      //   "username" : "testuser3",
      //   "email" : "testuser3@testdomain.com"
      // }]

      console.log('req data is: ',data)// data is empty ???
      res.render('userlist', { title: 'Userlist', userlist: data })
    })
  });

  /* GET New User page. */
  router.get('/newuser', function(req, res){
    res.render('newuser', { title: 'New User'})
  })

module.exports = router;
