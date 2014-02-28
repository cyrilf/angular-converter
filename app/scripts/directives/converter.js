'use strict';

angular.module('converterApp')
  .directive('converter', function () {
    return {
      templateUrl: '/views/partials/converter.html',
      restrict: 'EA'
    };
  });
