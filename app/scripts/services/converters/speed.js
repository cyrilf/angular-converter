'use strict';

angular.module('converterApp')
  .factory('SpeedConverter', ['AbstractConverter',
                               function SpeedConverterF(AbstractConverter) {

    return AbstractConverter.extend({

      id:   'speed',
      name: 'Speed',
      units: {
        'milesHour': { text: 'Miles/hour'     , value: 1.60934 },
        'feetSec'  : { text: 'Feet/sec'       , value: 1.09728 },
        'metersSec': { text: 'Meters/sec'     , value: 3.6     },
        'kmHour'   : { text: 'Kilometers/hour', value: 1       },
        'knot'     : { text: 'Knot'           , value: 1.852   }
      }
    });
  }]);