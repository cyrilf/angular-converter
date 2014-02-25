'use strict';

angular.module('converterApp')
  .controller('ConverterCtrl', ['$scope', 'converterManager',
                                function ($scope, converterManager) {
    // Var assignements
    $scope.categories = [
      { value: 'temperature'    , text: 'Temperature'     },
      { value: 'length'         , text: 'Length'          },
      { value: 'mass'           , text: 'Mass'            },
      { value: 'speed'          , text: 'Speed'           },
      { value: 'volume'         , text: 'Volume'          },
      { value: 'area'           , text: 'Area'            },
      { value: 'time'           , text: 'Time'            },
      { value: 'digitalStorage' , text: 'Digital storage' }
    ];
    $scope.category = $scope.categories[1];

    $scope.valueIn  = 1;
    $scope.valueOut = undefined;

    $scope.units = {
      'temperature' : [
        { value: 'celsius'    , text: 'Celsius'    },
        { value: 'fahrenheit' , text: 'Fahrenheit' },
        { value: 'kelvin'     , text: 'Kelvin'     }
      ],
      'length' : [
        { value: 'kilometer'    , text: 'Kilometer'     },
        { value: 'meter'        , text: 'Meter'         },
        { value: 'centimeter'   , text: 'Centimeter'    },
        { value: 'millimeter'   , text: 'Millimeter'    },
        { value: 'mile'         , text: 'Mile'          },
        { value: 'yard'         , text: 'Yard'          },
        { value: 'foot'         , text: 'Foot'          },
        { value: 'inch'         , text: 'Inch'          },
        { value: 'nauticalMile' , text: 'Nautical mile' }
      ],
      'mass' : [
        { value: 'metricTon' , text: 'Metric ton' },
        { value: 'kilogram'  , text: 'Kilogram'   },
        { value: 'gram'      , text: 'Gram'       },
        { value: 'milligram' , text: 'Milligram'  },
        { value: 'mcg'       , text: 'Microgram'  },
        { value: 'longTon'   , text: 'Long ton'   },
        { value: 'shortTon'  , text: 'Short ton'  },
        { value: 'stone'     , text: 'Stone'      },
        { value: 'pound'     , text: 'Pound'      },
        { value: 'ounce'     , text: 'Ounce'      }
      ],
      'speed' : [
        { value: 'milesHour' , text: 'Miles/hour'      },
        { value: 'feetSec'   , text: 'Feet/sec'        },
        { value: 'metersSec' , text: 'Meters/sec'      },
        { value: 'kmHour'    , text: 'Kilometers/hour' },
        { value: 'knot'      , text: 'Knot'            }
      ],
      'volume' : [
        { value: 'usGallon'       , text : 'US gallon'           },
        { value: 'usQuart'        , text : 'US quart'            },
        { value: 'usPint'         , text : 'US pint'             },
        { value: 'usCup'          , text : 'US cup'              },
        { value: 'usOunce'        , text : 'US ounce'             },
        { value: 'usTbsp'         , text : 'US tablespoon'       },
        { value: 'usTsp'          , text : 'US teaspoon'         },
        { value: 'cubicMeter'     , text : 'Cubic meter'         },
        { value: 'liter'          , text : 'Liter'               },
        { value: 'milliliter'     , text : 'Milliliter'         },
        { value: 'imperialGallon' , text : 'Imperial gallon'     },
        { value: 'imperialQuart'  , text : 'Imperial quart'      },
        { value: 'imperialPint'   , text : 'Imperial pint'       },
        { value: 'imperialOunce'  , text : 'Imperial ounce'      },
        { value: 'imperialTbsp'   , text : 'Imperial tablespoon' },
        { value: 'imperialTsp'    , text : 'Imperial teaspoon'   },
        { value: 'cubicFoot'      , text : 'Cubic foot'          },
        { value: 'cubicInch'      , text : 'Cubic inch'          }
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
      // Retrieve the current converter (based on the category)
      var converter = converterManager.getConverter($scope.category.value);
      converter.setUnitIn(unit.value);
      // If the unit in and out are equal, we switch them
      if(unit.value === $scope.unitOut.value) {
        $scope.unitOut = oldUnit;
      }

      updateValueOut($scope.valueIn);
    });

    $scope.$watch('unitOut', function(unit, oldUnit) {
      var converter = converterManager.getConverter($scope.category.value);
      converter.setUnitOut(unit.value);
      if(unit.value === $scope.unitIn.value) {
        $scope.unitIn = oldUnit;
      }

      updateValueOut($scope.valueIn);
    });

    function updateValueIn(value) {
      var converter = converterManager.getConverter($scope.category.value);
      $scope.valueIn = converter.convert(value, false);
    }

    function updateValueOut(value) {
      var converter = converterManager.getConverter($scope.category.value);
      $scope.valueOut = converter.convert(value);
    }
  }]);