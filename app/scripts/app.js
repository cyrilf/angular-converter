'use strict';

angular.module('converterApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'Class'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
