'use strict';

angular.module('converterApp')
  .factory('VolumeConverter', ['AbstractConverter',
                                function VolumeConverterF(AbstractConverter) {
    return AbstractConverter.extend({
      rules: {
        usGallon       : 3.78541,
        usQuart        : 0.946353,
        usPint         : 0.473176,
        usCup          : 0.236588,
        usOunce        : 0.0295735,
        usTbsp         : 0.0147868,
        usTsp          : 0.00492892,
        cubicMeter     : 1000,
        liter          : 1,
        milliliter     : 0.001,
        imperialGallon : 4.54609,
        imperialQuart  : 1.13652,
        imperialPint   : 0.568261,
        imperialOunce  : 0.0284131,
        imperialTbsp   : 0.0177582,
        imperialTsp    : 0.00591939,
        cubicFoot      : 28.3168,
        cubicInch      : 0.0163871
      }
    });
  }]);