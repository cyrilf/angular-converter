'use strict';

angular.module('converterApp')
  .controller('ConverterCtrl', ['$scope', 'lengthConverter', 'temperatureConverter', function ($scope, lengthConverter, temperatureConverter) {
    // Var assignements
    $scope.categories = [
      { value: 'temperature',    text: 'Temperature', converter: temperatureConverter },
      { value: 'length',         text: 'Length',      converter: lengthConverter },
      { value: 'mass',           text: 'Mass' },
      { value: 'speed',          text: 'Speed' },
      { value: 'volume',         text: 'Volume' },
      { value: 'area',           text: 'Area' },
      { value: 'time',           text: 'Time' },
      { value: 'digitalStorage', text: 'Digital storage' }
    ];
    $scope.category = $scope.categories[1];

    $scope.valueIn  = 1;
    $scope.valueOut = undefined;

    $scope.units = {
      'temperature' : [
        { value: 'celsius',    text: 'Celsius' },
        { value: 'fahrenheit', text: 'Fahrenheit' },
        { value: 'kelvin',     text: 'Kelvin' }
      ],
      'length' : [
        { value: 'kilometer',    text: 'Kilometer' },
        { value: 'meter',        text: 'Meter' },
        { value: 'centimeter',   text: 'Centimeter' },
        { value: 'millimeter',   text: 'Millimeter' },
        { value: 'mile',         text: 'Mile' },
        { value: 'yard',         text: 'Yard' },
        { value: 'foot',         text: 'Foot' },
        { value: 'inch',         text: 'Inch' },
        { value: 'nauticalMile', text: 'Nautical mile' }
      ]
    };

    $scope.updateUnits = function() {
      $scope.unitIn  = $scope.units[$scope.category.value][0];
      $scope.unitOut = $scope.units[$scope.category.value][1];
    };

    $scope.updateUnits();

    // Handle which input is being edited
    $scope.edited = undefined;
    $scope.markEdited = function(which) {
      $scope.edited = which;
    };

    // Watcher for the 2 value inputs
    $scope.$watch('valueIn', function(value) {
      if($scope.edited === 'in') {
        updateValueOut(value);
      }
    });

    $scope.$watch('valueOut', function(value) {
      if($scope.edited === 'out') {
        updateValueIn(value);
      }
    });

    // Watcher for the 2 units inputs
    $scope.$watch('unitIn', function(unit, oldUnit) {
      $scope.category.converter.setUnitIn(unit.value);
      // If the unit in and out are equal, we switch them
      if(unit.value === $scope.unitOut.value) {
        $scope.unitOut = oldUnit;
      }

      updateValueOut($scope.valueIn);
    });

    $scope.$watch('unitOut', function(unit, oldUnit) {
      $scope.category.converter.setUnitOut(unit.value);
      if(unit.value === $scope.unitIn.value) {
        $scope.unitIn = oldUnit;
      }

      updateValueOut($scope.valueIn);
    });

    function updateValueIn(value) {
      $scope.valueIn = $scope.category.converter.convert(value, false);
    }

    function updateValueOut(value) {
      $scope.valueOut = $scope.category.converter.convert(value);
    }
  }]);