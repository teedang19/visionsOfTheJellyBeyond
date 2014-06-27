// USER STUFF
var User = Backbone.Model.extend({
  idAttribute: "_id",
  urlRoot: "/users"
});

var UsersCollection = Backbone.Collection.extend({
  model: User,
  url: "/admin/users" // idk
});

// REVIEW STUFF 
var Review = Backbone.Model.extend({
  idAttribute: "_id"
});

var ReviewsCollection = Backbone.Collection.extend({
  model: Review,
  url: "/admin/reviews" // idk ?
});

// BAKERY STUFF
var Bakery = Backbone.Model.extend({
  idAttribute: "name",
  urlRoot: "/bakeries"
});

var BakeriesCollection = Backbone.Collection.extend({
  model: Bakery,
  url: "/admin" // idk ?
});

var BakeryView = Backbone.View.extend({
  tagName: "p",
  className: "bakery",
  render: function() {
    var template = $('#bakery-template').html();
    var compiled = Handlebars.compile(template);
    var html = compiled(this.model.attributes);
    this.$el.html(html);
    return this;
  }
});

// only used by the admin
var BakeryCollectionView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, "reset", this.render);
  }
});

// ONE AND ONLY ROUTER
var AppRouter = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  index: function() {
    var bangBang = new Bakery( {"name":"Bang Bang Pie Shop"} );
    bangBang.fetch({
      success: function(bakery){
        var bakeryView = new BakeryView( {model: bakery} );
        $('.bakery-info').html(bakeryView.render().el);
      }
    });
  }
});
