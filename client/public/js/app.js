var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './client/views/partials/home.html',
    controller: 'appController'
  });
});