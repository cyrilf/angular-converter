'use strict';

angular.module('converterApp')
  .factory('LengthConverter', ['AbstractConverter',
                              function LengthConverterF(AbstractConverter) {

    return AbstractConverter.extend({


      rules: {
        kilometer    : 1000,
        meter        : 1,
        centimeter   : 0.01,
        millimeter   : 0.001,
        mile         : 1609.34,
        yard         : 0.9144,
        foot         : 0.3048,
        inch         : 0.0254,
        nauticalMile : 1852
      }
    });
  }]);