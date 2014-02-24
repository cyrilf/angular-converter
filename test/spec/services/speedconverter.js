'use strict';

describe('Service: speedConverter', function () {

  // load the service's module
  beforeEach(module('converterApp'));

  // instantiate service
  var speedConverter;
  beforeEach(inject(function (_speedConverter_) {
    speedConverter = _speedConverter_;
    speedConverter.setUnitIn('milesHour');
    speedConverter.setUnitOut('feetSec');
  }));

  it('should be defined', function () {
    expect(!!speedConverter).toEqual(true);
  });

  it('should be initialized with valid units value', function() {
    expect(speedConverter.unitIn).toEqual('milesHour');
    expect(speedConverter.unitOut).toEqual('feetSec');
  });

  it('should have valid setters', function() {
    speedConverter.setUnitIn('kmHour');
    expect(speedConverter.unitIn).toEqual('kmHour');
    speedConverter.setUnitOut('knot');
    expect(speedConverter.unitOut).toEqual('knot');
  });

  it('should convert correctly', function() {
    expect(speedConverter.convert(50)).toEqual(73.3332);
    expect(speedConverter.convert(0.001)).toEqual(0.0015);

    speedConverter.setUnitIn('kmHour');
    expect(speedConverter.convert(100)).toEqual(91.1344);
    expect(speedConverter.convert(0.1)).toEqual(0.0911);

    speedConverter.setUnitIn('knot');
    speedConverter.setUnitOut('metersSec');
    expect(speedConverter.convert(1)).toEqual(0.5144);
    expect(speedConverter.convert(23)).toEqual(11.8322);

    expect(speedConverter.convert(50, false)).toEqual(97.1922);
    expect(speedConverter.convert(-790, false)).toEqual(-1535.6371);

    expect(speedConverter.convert(0)).toEqual(0);
  });
});