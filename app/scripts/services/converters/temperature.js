'use strict';

angular.module('converterApp')
  .factory('TemperatureConverter', ['AbstractConverter',
                                     function TemperatureConverterF(AbstractConverter) {

    return AbstractConverter.extend({


      rules: {
        'celsius-fahrenheit' : function(value) { return (+value * 9 / 5) + 32; },
        'fahrenheit-celsius' : function(value) { return (+value - 32) * 5 / 9; },
        'celsius-kelvin'     : function(value) { return +value + 273.15; },
        'kelvin-celsius'     : function(value) { return +value - 273.15; },
        'fahrenheit-kelvin'  : function(value) { var celsius = this['fahrenheit-celsius'](value); celsius = this['celsius-kelvin'](celsius); return celsius; },
        'kelvin-fahrenheit'  : function(value) { var celsius = this['kelvin-celsius'](value); celsius = this['celsius-fahrenheit'](celsius); return celsius; }
      },

      convert: function(value, isValueIn) {
        if(this.unitIn === this.unitOut) {
          return value;
        }

        isValueIn = (isValueIn === false) ? false : true;
        var result;
        if(isValueIn === true) {
          result = this.rules[this.unitIn + '-' + this.unitOut](value);
        } else {
          result = this.rules[this.unitOut + '-' + this.unitIn](value);
        }

        return this.round(result);
      }
    });
  }]);