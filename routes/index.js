var User = require('../models/user');

module.exports = function(app) {

  app.get('/', function(req, res) {

    User.find(function(err, allUsers) {
      if (err) {
        // please god implement some error handling
        conosle.log("ERROR ERROR HALP")
        console.log(err)
        return;
      } else {
        // check if allUsers is empty
        if(allUsers.length == 0) {
          // if so, populate database
          console.log("length is zero");
        } else {
        // if not, uhm, continue ...
          console.log("length is not zero")
        }
        
        console.log("no errors");
        res.render('index', { title: 'Chicago Bakery Hunt' });
      }
    });

  });

}

// GIVEN, reconfigured.

// var express = require('express');
// var router = express.Router();

/* GET home page. */
// app.get('/', function(req, res) {
//   res.render('index', { title: 'Chicago Bakery Hunt' });
// });

// module.exports = router;