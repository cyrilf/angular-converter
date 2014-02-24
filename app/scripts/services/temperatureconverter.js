'use strict';

angular.module('converterApp')
  .service('temperatureConverter', function temperatureConverter() {
    this.unitIn = 'celsius';
    this.unitOut = 'fahrenheit';

    // Conversion rules
    this.rules = {
      'celsius-fahrenheit' : function(value) { return (+value * 9 / 5) + 32; },
      'fahrenheit-celsius' : function(value) { return (+value - 32) * 5 / 9; },
      'celsius-kelvin'     : function(value) { return +value + 273.15; },
      'kelvin-celsius'     : function(value) { return +value - 273.15; },
      'fahrenheit-kelvin'  : function(value) { var celsius = this['fahrenheit-celsius'](value); celsius = this['celsius-kelvin'](celsius); return celsius; },
      'kelvin-fahrenheit'  : function(value) { var celsius = this['kelvin-celsius'](value); celsius = this['celsius-fahrenheit'](celsius); return celsius; }
    };

    /**
     * Convert the value based on the units (in and out) and the specific rules
     * @param  {float}   value      value to convert
     * @param  {Boolean} isValueIn  either we convert the value in or out
     * @return {float}             value converted
     */
    this.convert = function(value, isValueIn) {
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

      return +(Math.round(result + 'e+4') + 'e-4');
    };


    // Set the unit of this converter
    this.setUnitIn = function(unit) {
      this.unitIn = unit;
    };

    this.setUnitOut = function(unit) {
      this.unitOut = unit;
    };
  });