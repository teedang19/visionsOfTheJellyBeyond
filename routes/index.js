var User = require('../models/user');
var Bakery = require('../models/bakery');

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
        console.log("error in saving new user");
      } else {
        console.log("success in creating new user");
      }
    });
  });
};

function createBakeries() {
  console.log('createBakeries has been called');

  var bakeryObjs = [
    {"name": "Insomnia Cookies", "address": "2260 North Lincoln Ave", "website":"www.insomniacookies.com", "contactName": "Cindy Baker", "description": "A good treat never sleeps.", "treatDescription": "white chocolate macadamia cookie. A special at Insomnia!"},
    {"name": "Pleasant House Bakery", "address": "964 W. 31st St", "website":"www.pleasanthousebakery.com", "contactName": "Ethel Berrymore", "description": "Happy times require happy smells", "treatDescription": "chocolate mousse cupcake. Filled with a creamy center sure to give you good vibes."},
    {"name": "Delightful Pastries", "address": "1710 N. Wells St", "website":"www.delightfulpastries.com", "contactName": "Joseph Jazzlegs", "description": "Because, Polish Doughnuts -- the best in Chicago.", "treatDescription": "traditional Polish dougnut. You won't regret it."},
    {"name": "Hoosier Mama Pie Company", "address": "1618 W. Chicago Ave", "website":"www.hoosiermamapie.com", "contactName": "Mama Hoosier", "description": "Pies, just like grandma used to make.", "treatDescription": "slice of blueberry pie with homemade vanilla ice cream. Share it for even more fun!"},
    {"name": "Rose’s Cafe and Bakery", "address": "2901 Central St", "website":"www.rosesbakery.com", "contactName": "Rosalee June", "description": "Enjoy coffee and baked goods in our homey dining room or patio garden!", "treatDescription": "strawberry short-cupcake, or two, or three ..."},
    {"name": "Floriole Cafe and Bakery", "address": "1220 W. Webster Ave", "website":"www.floriole.com", "contactName": "Florent Tran", "description": "Voulez-vous coucher avec ... des desserts?", "treatDescription": "glazed French donut, stuffed with strawberry jam."},
    {"name": "Bruno's Bakery", "address": "3341 S. Lituanica Ave", "website":"www.brunomars.com", "contactName": "Bruno MarsBars", "description": "Make our tiramisu part of your lazy day.", "treatDescription": "traditional Italian cannoli, with chocolate chips and powdered sugar."},
    {"name": "Bot Bakery", "address": "Logan Square Farmer's Market", "website":"www.facebook.com/botbakery", "contactName": "AI 59872x4", "description": "Try a cookie made entirely by robots!", "treatDescription": "peanut butter cookie. Every cookie is QA guaranteed to be identical!"},
    {"name": "Bang Bang Pie Shop", "address": "2051 N. California Ave", "website":"www.bangbangpie.com", "contactName": "Mark Banger", "description": "Desserts with a BANG!", "treatDescription": "slice of boom-crash-bang lemon-meringue. It'll knock you off your feet!"},
    {"name": "Dinkel's", "address": "3329 N. Lincoln Ave", "website":"www.dinkels.com", "contactName": "Jaime Dinkelburg", "description": "A goofy name to make you smile, and a cupcake to go with it!", "treatDescription": "slice of angel-food cake, topped with fresh raspberries! A favorite here at Dinkel's!"}
  ];

  bakeryObjs.forEach(function(bakeryAttributes){
    var newBakery = new Bakery(bakeryAttributes);
    newBakery.save(function(err, bakery){
      if(err){
        console.log(err);
        console.log("error in saving new bakery");
      } else {
        console.log("success in creating new bakery");
      }
    });
  });
};

// attempt at DRYing up population of database with bakeries & users -- figure out later
// function findModels(model) {
//   model.find({}, function(err, allFound) {
//     if (err) {
//       // please god implement some error handling
//       console.log("ERROR ERROR HALP")
//       console.log(err)
//       return;
//     } else {
//       if(allFound.length == 0) {
//         createUsers();
//       } else {
//         console.log("users length is not zero")
//       }
//       console.log("no errors");
//     }
//   });
// }

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
          console.log("users length is not zero")
        }
        console.log("no errors");
      }
    });

    Bakery.find({}, function(err, allBakeries) {
      if (err) {
        // please god implement some error handling
        console.log("BAKERY RETRIEVAL ERROR HALP");
        console.log(err);
        return;
      } else {
        if(allBakeries.length == 0) {
          createBakeries();
        } else {
          console.log("bakeries length is not zero");
        }
        console.log("no errors");
      }
    });

    res.render('index', { title: 'Chicago Bakery Hunt' });
  });

  app.get('/bakeries/:name', function(req, res) {
    Bakery.findOne({"name": req.params.name}, function(err, bakery){
      if(err){
        console.log(err);
      } else {
        res.json(bakery);
      }
    })
  });

  app.get('/admin/users', function(req, res){
    User.find({}, function(err, allUsers) {
      if (err) {
        return "serious error handling needed soon";
      } else {
        res.json(allUsers);
      }
    })
  });

  app.post('/users', function(req, res){
    // console.log(req);
    // console.log("XXXXXXXXX");
  });

}
