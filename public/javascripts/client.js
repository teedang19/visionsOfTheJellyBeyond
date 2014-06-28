$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
      if (o[this.name] !== undefined) {
          if (!o[this.name].push) {
              o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || '');
      } else {
          o[this.name] = this.value || '';
      }
  });
  return o;
};

// USER STUFF
var User = Backbone.Model.extend({
  idAttribute: "username",
  urlRoot: "/users"
});

var UsersCollection = Backbone.Collection.extend({
  model: User,
  url: "/admin/users" // idk
});

var LoginView = Backbone.View.extend({
  el: '#login',
  events: {
    'submit #login-form': 'findUser'
  },

  findUser: function(event){
    event.preventDefault();
    var loginDetails = $(event.currentTarget).serializeObject();
    console.log(loginDetails);
    var user = new User(loginDetails);
    user.fetch({
      data: {password: loginDetails.password},
      success: function(user){
      }
    })
  }
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
  },

});