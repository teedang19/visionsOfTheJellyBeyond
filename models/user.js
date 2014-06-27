var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: { type: String, default: "password" },
  fullName: String,
  admin: Boolean,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

var User = mongoose.model('User', userSchema);

module.exports = User;