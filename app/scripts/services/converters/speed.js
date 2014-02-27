'use strict';

angular.module('converterApp')
  .factory('SpeedConverter', ['AbstractConverter',
                               function SpeedConverterF(AbstractConverter) {

    return AbstractConverter.extend({


      rules: {
        milesHour : 1.60934,
        feetSec   : 1.09728,
        metersSec : 3.6,
        kmHour    : 1,
        knot      : 1.852
      }
    });
  }]);