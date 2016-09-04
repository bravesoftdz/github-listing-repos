var app = angular.module('app',['ngRoute']);
 
app.config(function($routeProvider, $locationProvider, $httpProvider)
{
  $httpProvider.defaults.timeout = 5000;
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: '../views/Main.html',
      controller: 'MainController',
    })
 
  .otherwise ({ redirectTo: '/' });
});