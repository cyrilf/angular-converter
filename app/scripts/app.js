'use strict';

angular.module('converterApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ConverterCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
