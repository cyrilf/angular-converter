'use strict';

angular.module('converterApp')
  .factory('VolumeConverter', ['AbstractConverter',
                                function VolumeConverterF(AbstractConverter) {
    return AbstractConverter.extend({

      id:   'volume',
      name: 'Volume',
      units: {
        'usGallon'      : { text: 'US gallon'          , value: 3.78541    },
        'usQuart'       : { text: 'US quart'           , value: 0.946353   },
        'usPint'        : { text: 'US pint'            , value: 0.473176   },
        'usCup'         : { text: 'US cup'             , value: 0.236588   },
        'usOunce'       : { text: 'US ounce'           , value: 0.0295735  },
        'usTbsp'        : { text: 'US tablespoon'      , value: 0.0147868  },
        'usTsp'         : { text: 'US teaspoon'        , value: 0.00492892 },
        'cubicMeter'    : { text: 'Cubic meter'        , value: 1000       },
        'liter'         : { text: 'Liter'              , value: 1          },
        'milliliter'    : { text: 'Milliliter'         , value: 0.001      },
        'imperialGallon': { text: 'Imperial gallon'    , value: 4.54609    },
        'imperialQuart' : { text: 'Imperial quart'     , value: 1.13652    },
        'imperialPint'  : { text: 'Imperial pint'      , value: 0.568261   },
        'imperialOunce' : { text: 'Imperial ounce'     , value: 0.0284131  },
        'imperialTbsp'  : { text: 'Imperial tablespoon', value: 0.0177582  },
        'imperialTsp'   : { text: 'Imperial teaspoon'  , value: 0.00591939 },
        'cubicFoot'     : { text: 'Cubic foot'         , value: 28.3168    },
        'cubicInch'     : { text: 'Cubic inch'         , value: 0.0163871  }
      }
    });
  }]);