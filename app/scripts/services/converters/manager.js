'use strict';

angular.module('converterApp')
  .service('converterManager', ['LengthConverter', 'TemperatureConverter', 'MassConverter', 'SpeedConverter', 'VolumeConverter', 'AreaConverter', 'TimeConverter', 'DigitalStorageConverter',
                                function converterManager(LengthConverter, TemperatureConverter, MassConverter, SpeedConverter, VolumeConverter, AreaConverter, TimeConverter, DigitalStorageConverter) {
    this.converters = {
      'temperature'    : new TemperatureConverter(),
      'length'         : new LengthConverter(),
      'mass'           : new MassConverter(),
      'speed'          : new SpeedConverter(),
      'volume'         : new VolumeConverter(),
      'area'           : new AreaConverter(),
      'time'           : new TimeConverter(),
      'digitalStorage' : new DigitalStorageConverter()
    };

    /**
     * Return the converter based on the type requested
     * (or the first converter as default)
     * @param  {string} type       converter type
     * @return {AbstractConverter} a converter
     */
    this.getConverter = function(type) {
      return this.converters[type] || this.converters[Object.keys(this.converters)[0]];
    };

    /**
     * Return a categories array
     * Loop through all converters and push a new category element
     * @return {Array} list of categories
     */
    this.getCategories = function() {
      var categories = [],
          category;

      angular.forEach(this.converters, function(converter) {
        category = { value: converter.id, text: converter.name };
        categories.push(category);
      });

      return categories;
    };
  }]);