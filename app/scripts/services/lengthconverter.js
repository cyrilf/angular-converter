'use strict';

angular.module('converterApp')
  .service('lengthConverter', function LengthConverter() {
    this.unitIn = 'kilometer';
    this.unitOut = 'meter';

    // Conversion rules
    this.rules = {
      kilometer    : 1000,
      meter        : 1,
      centimeter   : 0.01,
      millimeter   : 0.001,
      mile         : 1609.34,
      yard         : 0.9144,
      foot         : 0.3048,
      inch         : 0.0254,
      nauticalMile : 1852
    };

    /**
     * Convert the value based on the units (in and out) and the specific rules
     * @param  {float}   value      value to convert
     * @param  {Boolean} isValueIn  either we convert the value in or out
     * @return {float}             value converted
     */
    this.convert = function(value, isValueIn) {
      var ratio = 1;
      isValueIn = (isValueIn === false) ? false : true;

      if(isValueIn === true) {
        ratio = this.rules[this.unitIn] / this.rules[this.unitOut];
      } else {
        ratio = this.rules[this.unitOut] / this.rules[this.unitIn];
      }

      var result = ratio * value;

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