'use strict';

/**
 * Filter distance
 *
 * Convert meters/foot/.. units
 *
 * Usage:
 *
 * {{value|distance}}
 * {{value|distance:'kmTOm'}}
 */
angular.module('converterFilters', [])
  .filter('distance', function () {
    return function(input, type) {
      type = type || 'kmTOm';

      switch(type) {
        case 'kmTOm':
          return input * 1000;
        case 'kmTOdm':
          return input * 10000;
        case 'kmTOcm':
          return input * 100000;
        default:
          return input * 1000;
      }
    };
  });