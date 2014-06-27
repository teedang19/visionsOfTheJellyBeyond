// var express = require('express');
// var router = express.Router();

/* GET home page. */
// app.get('/', function(req, res) {
//   res.render('index', { title: 'Chicago Bakery Hunt' });
// });

// module.exports = router;
module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('index', { title: 'Chicago Bakery Hunt' });
  });
  
}