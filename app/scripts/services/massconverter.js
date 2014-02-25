'use strict';

angular.module('converterApp')
  .factory('MassConverter', ['AbstractConverter',
                              function MassconverterF(AbstractConverter) {

    return AbstractConverter.extend({


      rules: {
        metricTon : 1000,
        kilogram  : 1,
        gram      : 0.001,
        milligram : 1 + 'e-6',
        mcg       : 1 + 'e-9',
        longTon   : 1016.05,
        shortTon  : 907.185,
        stone     : 6.35029,
        pound     : 0.453592,
        ounce     : 0.0283459
      }
    });
  }]);