'use strict';

angular.module('converterApp')
  .service('speedConverter', function speedConverter() {
    this.unitIn  = 'milesHour';
    this.unitOut = 'feetSec';

    // Conversion rules
    this.rules = {
      milesHour : 1.60934,
      feetSec   : 1.09728,
      metersSec : 3.6,
      kmHour    : 1,
      knot      : 1.852
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