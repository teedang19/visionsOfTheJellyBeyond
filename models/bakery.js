var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bakerySchema = new Schema({

});

var Bakery = new mongoose.model('Bakery', bakerySchema);

module.exports = Bakery;