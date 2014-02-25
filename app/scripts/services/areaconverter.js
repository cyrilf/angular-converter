'use strict';

angular.module('converterApp')
  .factory('AreaConverter', ['AbstractConverter',
                              function LengthConverterF(AbstractConverter) {

    return AbstractConverter.extend({
      rules: {
        squareKm    : 1000000,
        hectare     : 10000,
        squareMeter : 1,
        squareMile  : 2.58998811,
        acre        : 4046.86,
        squareYard  : 0.836127,
        squareFoot  : 0.092903,
        squareInch  : 0.00064516
      }
    });
  }]);