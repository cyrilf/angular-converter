'use strict';

angular.module('converterApp')
  .factory('AbstractConverter', function AbstractConverterF(Class) {
    var AbstractConverter = Class.extend({

      id:      '',
      name:    '',
      units:   {},
      unitIn:  '',
      unitOut: '',

      /**
       * Convert the value based on the units (in and out) and the specific rules
       * @param  {float}   value      value to convert
       * @param  {Boolean} isValueIn  either we convert the value in or out
       * @return {float}             value converted
       */
      convert: function(value, isValueIn) {
        var ratio = 1;
        isValueIn = (isValueIn === false) ? false : true;

        var ruleIn  = this.units[this.unitIn]  ? this.units[this.unitIn].value  : 1;
        var ruleOut = this.units[this.unitOut] ? this.units[this.unitOut].value : 1;

        ratio = (isValueIn === true) ? ruleIn / ruleOut : ruleOut / ruleIn;

        var result = ratio * value;

        return this.round(result);
      },

      /**
       * Round the value to x decimals
       * @param  {float} value   value  to round
       * @param  {int}   decimal how many decimals
       * @return {float}         value with x decimals
       */
      round: function(value, decimal) {
        decimal = decimal || 4;
        return +(Math.round(value + 'e+' + decimal) + 'e-' + decimal);
      },

      getUnitsSelect: function() {
        var units = [],
            unit;

        angular.forEach(this.units, function(obj, id) {
          unit = { value: id, text: obj.text };
          units.push(unit);
        });

        return units;
      },

      /**
       * Set the unit of this converter
       * @param {unit} unit unit in
       */
      setUnitIn: function(unit) {
        this.unitIn = unit;
      },

      /**
       * Set the unit out of this converter
       * @param {unit} unit unit out
       */
      setUnitOut: function(unit) {
        this.unitOut = unit;
      }
    });

    return AbstractConverter;
  });