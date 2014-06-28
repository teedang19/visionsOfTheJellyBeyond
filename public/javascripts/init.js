$(function() {
  var router = new AppRouter();
  new LoginView();
  Backbone.history.start();
});
