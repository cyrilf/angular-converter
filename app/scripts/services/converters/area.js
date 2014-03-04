'use strict';

angular.module('converterApp')
  .factory('AreaConverter', ['AbstractConverter',
                              function LengthConverterF(AbstractConverter) {

    return AbstractConverter.extend({

      id:   'area',
      name: 'Area',
      units: {
        'squareKm'   : { text: 'Square km'   , value: 1000000    },
        'hectare'    : { text: 'Hectare'     , value: 10000      },
        'squareMeter': { text: 'Square meter', value: 1          },
        'squareMile' : { text: 'Square mile' , value: 2.58998811 },
        'acre'       : { text: 'Acre'        , value: 4046.86    },
        'squareYard' : { text: 'Square yard' , value: 0.836127   },
        'squareFoot' : { text: 'Square foot' , value: 0.092903   },
        'squareInch' : { text: 'Square inch' , value: 0.00064516 }
      }
    });
  }]);