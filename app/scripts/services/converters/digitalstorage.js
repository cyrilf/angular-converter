'use strict';

angular.module('converterApp')
  .factory('DigitalStorageConverter', ['AbstractConverter',
                              function DigitalStorageConverterF(AbstractConverter) {

    return AbstractConverter.extend({
      rules: {
        'bit'      : 0.0000009536743164,
        'byte'     : 0.000007629394531,
        'kilobit'  : 0.0009765625,
        'kilobyte' : 0.0078125,
        'megabit'  : 1,
        'megabyte' : 8,
        'gigabit'  : 1024,
        'gigabyte' : 8192,
        'terabit'  : 1048580,
        'terabyte' : 8388610,
        'petabit'  : 1073741800,
        'petabyte' : 8589934600,
      }
    });
  }]);