$(function() {
  new AppRouter();
  Backbone.history.start();
});

// check to see if a user is logged in. SESSIONS?
// if not, render login page
// if so, redirect to bakery start ...