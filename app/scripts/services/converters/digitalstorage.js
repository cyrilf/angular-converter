'use strict';

angular.module('converterApp')
  .factory('DigitalStorageConverter', ['AbstractConverter',
                              function DigitalStorageConverterF(AbstractConverter) {

    return AbstractConverter.extend({

      id: 'digitalStorage',
      name: 'Digital Storage',
      units: {
        'bit'     : { text: 'Bit'     , value: 0.0000009536743164 },
        'byte'    : { text: 'Byte'    , value: 0.000007629394531  },
        'kilobit' : { text: 'Kilobit' , value: 0.0009765625       },
        'kilobyte': { text: 'Kilobyte', value: 0.0078125          },
        'megabit' : { text: 'Megabit' , value: 1                  },
        'megabyte': { text: 'Megabyte', value: 8                  },
        'gigabit' : { text: 'Gigabit' , value: 1024               },
        'gigabyte': { text: 'Gigabyte', value: 8192               },
        'terabit' : { text: 'Terabit' , value: 1048580            },
        'terabyte': { text: 'Terabyte', value: 8388610            },
        'petabit' : { text: 'Petabit' , value: 1073741800         },
        'petabyte': { text: 'Petabyte', value: 8589934600         }
      }
    });
  }]);