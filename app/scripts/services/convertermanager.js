'use strict';

angular.module('converterApp')
  .service('converterManager', ['LengthConverter', 'TemperatureConverter', 'MassConverter', 'SpeedConverter', 'VolumeConverter', 'AreaConverter', 'TimeConverter',
                                function converterManager(LengthConverter, TemperatureConverter, MassConverter, SpeedConverter, VolumeConverter, AreaConverter, TimeConverter) {
    this.converters = {
      'length'      : new LengthConverter(),
      'temperature' : new TemperatureConverter(),
      'mass'        : new MassConverter(),
      'speed'       : new SpeedConverter(),
      'volume'      : new VolumeConverter(),
      'area'        : new AreaConverter(),
      'time'        : new TimeConverter()
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
  }]);