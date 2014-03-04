'use strict';

angular.module('converterApp')
  .factory('LengthConverter', ['AbstractConverter',
                              function LengthConverterF(AbstractConverter) {

    return AbstractConverter.extend({

      id:   'length',
      name: 'Length',
      units: {
        'kilometer'    : { text: 'Kilometer'    , value: 1000    },
        'meter'        : { text: 'Meter'        , value: 1       },
        'centimeter'   : { text: 'Centimeter'   , value: 0.01    },
        'millimeter'   : { text: 'Millimeter'   , value: 0.001   },
        'mile'         : { text: 'Mile'         , value: 1609.34 },
        'yard'         : { text: 'Yard'         , value: 0.9144  },
        'foot'         : { text: 'Foot'         , value: 0.3048  },
        'inch'         : { text: 'Inch'         , value: 0.0254  },
        'nauticalMile' : { text: 'Nautical mile', value: 1852    }
      }
    });
  }]);