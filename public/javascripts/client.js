var User = Backbone.Model.extend({
  idAttribute: "_id",
  urlRoot: "/users"
});

var UsersCollection = Backbone.Collection.extend({
  model: User,
  url: "/admin/users" // idk ?
});

var Review = Backbone.Model.extend({
  idAttribute: "_id"
});

var ReviewsCollection = Backbone.Collection.extend({
  model: Review,
  url: "/admin/reviews" // idk ?
});

var Bakery = Backbone.Model.extend({
  idAttribute: "_id"
});

var BakeriesCollection = Backbone.Collection.extend({
  model: Bakery,
  url: "/admin" // idk ?
});

var AppRouter = Backbone.Router.extend({
});
