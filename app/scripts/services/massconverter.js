'use strict';

angular.module('converterApp')
  .service('massConverter', function massconverter() {
    this.unitIn  = 'metricTon';
    this.unitOut = 'kilogram';

    // Conversion rules
    this.rules = {
      metricTon : 1000,
      kilogram  : 1,
      gram      : 0.001,
      milligram : 1 + 'e-6',
      mcg       : 1 + 'e-9',
      longTon   : 1016.05,
      shortTon  : 907.185,
      stone     : 6.35029,
      pound     : 0.453592,
      ounce     : 0.0283459
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