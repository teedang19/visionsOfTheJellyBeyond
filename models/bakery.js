var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bakerySchema = new Schema({
  name: String,
  address: String,
  website: String,
  contactName: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

var Bakery = mongoose.model('Bakery', bakerySchema);

module.exports = Bakery;