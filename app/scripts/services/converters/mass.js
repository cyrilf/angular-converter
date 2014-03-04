'use strict';

angular.module('converterApp')
  .factory('MassConverter', ['AbstractConverter',
                              function MassconverterF(AbstractConverter) {

    return AbstractConverter.extend({

      id:   'mass',
      name: 'Mass',
      units: {
        'metricTon' : { text: 'Metric ton' , value: 1000      },
        'kilogram'  : { text: 'Kilogram'   , value: 1         },
        'gram'      : { text: 'Gram'       , value: 0.001     },
        'milligram' : { text: 'Milligram'  , value: 1 + 'e-6' },
        'mcg'       : { text: 'Microgram'  , value: 1 + 'e-9' },
        'longTon'   : { text: 'Long ton'   , value: 1016.05   },
        'shortTon'  : { text: 'Short ton'  , value: 907.185   },
        'stone'     : { text: 'Stone'      , value: 6.35029   },
        'pound'     : { text: 'Pound'      , value: 0.453592  },
        'ounce'     : { text: 'Ounce'      , value: 0.0283459 }
      }
    });
  }]);