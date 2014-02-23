'use strict';

describe('Service: lengthConverter', function () {

  // load the service's module
  beforeEach(module('converterApp'));

  // instantiate service
  var lengthConverter;
  beforeEach(inject(function (_lengthConverter_) {
    lengthConverter = _lengthConverter_;
    lengthConverter.setUnitIn('kilometer');
    lengthConverter.setUnitOut('meter');
  }));

  it('should be defined', function () {
    expect(!!lengthConverter).toBe(true);
  });

  it('should be initialized with valid units value', function() {
    expect(lengthConverter.unitIn).toBe('kilometer');
    expect(lengthConverter.unitOut).toBe('meter');
  });

  it('should have valid setters', function() {
    lengthConverter.setUnitIn('meter');
    expect(lengthConverter.unitIn).toBe('meter');
    lengthConverter.setUnitOut('kilometer');
    expect(lengthConverter.unitOut).toBe('kilometer');
  });

  it('should convert correctly', function() {
    expect(lengthConverter.convert(50)).toBe(50000);
    expect(lengthConverter.convert(0.001)).toBe(1);

    lengthConverter.setUnitIn('centimeter');
    expect(lengthConverter.convert(100)).toBe(1);
    expect(lengthConverter.convert(0.1)).toBe(0.001);

    lengthConverter.setUnitIn('meter');
    lengthConverter.setUnitOut('yard');
    expect(lengthConverter.convert(1)).toBe(1.0936132983377078);
    expect(lengthConverter.convert(23)).toBe(25.15310586176728);

    expect(lengthConverter.convert(0)).toBe(0);
  });
});