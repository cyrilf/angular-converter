'use strict';

angular.module('converterApp')
  .controller('ConverterCtrl', function ($scope) {
    // Var assignements
    $scope.categories = [
      { value: 'temperature',    text: 'Temperature' },
      { value: 'length',         text: 'Length' },
      { value: 'mass',           text: 'Mass' },
      { value: 'speed',          text: 'Speed' },
      { value: 'volume',         text: 'Volume' },
      { value: 'area',           text: 'Area' },
      { value: 'time',           text: 'Time' },
      { value: 'digitalStorage', text: 'Digital storage' }
    ];
    $scope.category = $scope.categories[1];

    $scope.valueIn  = 5;
    $scope.valueOut = undefined;

    $scope.units = [
      { value: 'kilometer',    text: 'Kilometer' },
      { value: 'meter',        text: 'Meter' },
      { value: 'centimeter',   text: 'Centimeter' },
      { value: 'millimeter',   text: 'Millimeter' },
      { value: 'mile',         text: 'Mile' },
      { value: 'yard',         text: 'Yard' },
      { value: 'foot',         text: 'Foot' },
      { value: 'inch',         text: 'Inch' },
      { value: 'nauticalMile', text: 'Nautical mile' }
    ];
    $scope.unitIn   = $scope.units[0];
    $scope.unitOut  = $scope.units[1];

    // Handle which input is being edited
    $scope.edited = undefined;
    $scope.markEdited = function(which) {
      $scope.edited = which;
    };

    // Watcher for the 2 value inputs
    $scope.$watch('valueIn', function(value) {
      if($scope.edited === 'in') {
        $scope.valueOut = +value + 3;
      }
    });

    $scope.$watch('valueOut', function(value) {
      if($scope.edited === 'out') {
        $scope.valueIn = +value - 3;
      }
    });
  });