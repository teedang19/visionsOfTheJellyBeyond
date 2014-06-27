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
        // if so, populate database
        // if not, uhm, continue ...
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