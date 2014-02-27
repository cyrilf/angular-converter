'use strict';

describe('Service: TemperatureConverter', function () {

  // load the service's module
  beforeEach(module('converterApp'));

  // instantiate service
  var TemperatureConverter, temperatureConverter;
  beforeEach(inject(function (_TemperatureConverter_) {
    TemperatureConverter = _TemperatureConverter_;
    temperatureConverter = new TemperatureConverter();
    temperatureConverter.setUnitIn('celsius');
    temperatureConverter.setUnitOut('fahrenheit');
  }));

  it('should be defined', function () {
    expect(!!temperatureConverter).toEqual(true);
  });

  it('should be initialized with valid units value', function() {
    expect(temperatureConverter.unitIn).toEqual('celsius');
    expect(temperatureConverter.unitOut).toEqual('fahrenheit');
  });

  it('should have valid setters', function() {
    temperatureConverter.setUnitIn('kelvin');
    expect(temperatureConverter.unitIn).toEqual('kelvin');
    temperatureConverter.setUnitOut('celsius');
    expect(temperatureConverter.unitOut).toEqual('celsius');
  });

  it('should convert correctly', function() {
    expect(temperatureConverter.convert(50)).toEqual(122);
    expect(temperatureConverter.convert(0.001)).toEqual(32.0018);

    temperatureConverter.setUnitIn('fahrenheit');
    temperatureConverter.setUnitOut('celsius');
    expect(temperatureConverter.convert(100)).toEqual(37.7778);
    expect(temperatureConverter.convert(0.1)).toEqual(-17.7222);

    temperatureConverter.setUnitIn('kelvin');
    temperatureConverter.setUnitOut('celsius');
    expect(temperatureConverter.convert(1)).toEqual(-272.15);
    expect(temperatureConverter.convert(23)).toEqual(-250.15);
    expect(temperatureConverter.convert(350)).toEqual(76.85);

    expect(temperatureConverter.convert(1, false)).toEqual(274.15);
    expect(temperatureConverter.convert(50, false)).toEqual(323.15);
  });
});