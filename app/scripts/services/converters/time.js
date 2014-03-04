'use strict';

angular.module('converterApp')
  .factory('TimeConverter', ['AbstractConverter',
                              function TimeConverterF(AbstractConverter) {

    return AbstractConverter.extend({

      id:   'time',
      name: 'Time',
      units: {
        'nanosecond' : { text: 'Nanosecond' , value: 0.0000000000000115740740740740736 },
        'microsecond': { text: 'Microsecond', value: 0.00000000001157407407407407360   },
        'millisecond': { text: 'Millisecond', value: 0.00000001157407407407407360      },
        'second'     : { text: 'Second'     , value: 0.00001157407407407407360         },
        'minute'     : { text: 'Minute'     , value: 0.000694444                       },
        'hour'       : { text: 'Hour'       , value: 0.0416667                         },
        'day'        : { text: 'Day'        , value: 1                                 },
        'week'       : { text: 'Week'       , value: 7                                 },
        'month'      : { text: 'Month'      , value: 30.4368                           },
        'year'       : { text: 'Year'       , value: 365.242                           },
        'decade'     : { text: 'Decade'     , value: 3652.42                           },
        'century'    : { text: 'Century'    , value: 36524.2                           }
      }
    });
  }]);