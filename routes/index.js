var User = require('../models/user');

function createUsers() {
  console.log('createUsers has been called');

  var userObjs = [
    { "username": "tamdang", "fullName": "Tam Dang", "admin": false },
    { "username": "paigecrum", "fullName": "Paige Crum", "admin": false },
    { "username": "clarkkampfe", "fullName": "Clark Kampfe", "admin": false },
    { "username": "fraugoop", "fullName": "Frau Goop the Ruthless Cat", "admin": false },
    { "username": "kevinsolorio", "fullName": "Kevin Solorio", "admin": false },
    { "username": "paulyshore", "fullName": "Pauly Shore", "admin": true}
  ];

  userObjs.forEach(function(userAttributes){
    var newUser = new User(userAttributes);

    newUser.save(function(err, user){
      if(err){
        console.log(err);
        console.log("error in saving new users");
      } else {
        console.log("success in creating new users");
      }
    });

  });
};

module.exports = function(app) {

  app.get('/', function(req, res) {

    User.find({}, function(err, allUsers) {
      if (err) {
        // please god implement some error handling
        console.log("ERROR ERROR HALP")
        console.log(err)
        return;
      } else {
        if(allUsers.length == 0) {
          createUsers();
        } else {
          console.log("length is not zero")
        }
        console.log("no errors");
        res.render('index', { title: 'Chicago Bakery Hunt' });
      }
    });

  });

  app.get('/admin/users', function(req, res){
    User.find({}, function(err, allUsers) {
      if (err) {
        return "serious error handling needed soon";
      } else{
        res.json(allUsers);
      }
    })
  });

  app.post('/users', function(req, res){
    // console.log(req);
    // console.log("XXXXXXXXX");
  });

}
