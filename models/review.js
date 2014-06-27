var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
  _userId: String,
  _bakeryId: String,
  foodReview: String,
  placeReview: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

var Review = new mongoose.model('Review', reviewSchema);

module.exports = Review;