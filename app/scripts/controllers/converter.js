'use strict';

angular.module('converterApp')
  .controller('ConverterCtrl', ['$scope', 'converterManager',
                                function ($scope, converterManager) {

    $scope.categories = converterManager.getCategories();
    $scope.category   = $scope.categories[1];

    $scope.valueIn  = 1;
    $scope.valueOut = undefined;

    $scope.units = [];

    $scope.$watch('category', function(category) {
      $scope.currentConverter = converterManager.getConverter(category.value);
      $scope.units   = $scope.currentConverter.getUnitsSelect();
      // When unitIn is updated, his $watch function run a converter.convert()
      // before the unitOut was set on this converter. This line fix it.
      $scope.currentConverter.setUnitOut($scope.units[1].value);
      $scope.unitIn  = $scope.units[0];
      $scope.unitOut = $scope.units[1];
    });

    // Handle which input is being edited
    $scope.edited = undefined;
    $scope.markEdited = function(which) {
      $scope.edited = which;
    };

    // Watcher for the 2 value inputs
    $scope.$watch('valueIn', function(value) {
      if($scope.edited === 'in') {
        $scope.valueOut = $scope.currentConverter.convert(value);
      }
    });

    $scope.$watch('valueOut', function(value) {
      if($scope.edited === 'out') {
        $scope.valueIn = $scope.currentConverter.convert(value, false);
      }
    });

    // Watcher for the 2 units inputs
    $scope.$watch('unitIn', function(unit, oldUnit) {
      $scope.currentConverter.setUnitIn(unit.value);
      // If the unit in and out are equal, we switch them
      if(unit.value === $scope.unitOut.value) {
        $scope.unitOut = oldUnit;
      }

      $scope.valueOut = $scope.currentConverter.convert($scope.valueIn);
    });

    $scope.$watch('unitOut', function(unit, oldUnit) {
      $scope.currentConverter.setUnitOut(unit.value);
      if(unit.value === $scope.unitIn.value) {
        $scope.unitIn = oldUnit;
      }

      $scope.valueOut = $scope.currentConverter.convert($scope.valueIn);
    });
  }]);