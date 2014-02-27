'use strict';

angular.module('converterApp')
  .factory('TimeConverter', ['AbstractConverter',
                              function TimeConverterF(AbstractConverter) {

    return AbstractConverter.extend({
      rules: {
        nanosecond  : 0.0000000000000115740740740740736,
        microsecond : 0.00000000001157407407407407360,
        millisecond : 0.00000001157407407407407360,
        second      : 0.00001157407407407407360,
        minute      : 0.000694444,
        hour        : 0.0416667,
        day         : 1,
        week        : 7,
        month       : 30.4368,
        year        : 365.242,
        decade      : 3652.42,
        century     : 36524.2
      }
    });
  }]);