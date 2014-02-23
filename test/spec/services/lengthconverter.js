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
    expect(!!lengthConverter).toEqual(true);
  });

  it('should be initialized with valid units value', function() {
    expect(lengthConverter.unitIn).toEqual('kilometer');
    expect(lengthConverter.unitOut).toEqual('meter');
  });

  it('should have valid setters', function() {
    lengthConverter.setUnitIn('meter');
    expect(lengthConverter.unitIn).toEqual('meter');
    lengthConverter.setUnitOut('kilometer');
    expect(lengthConverter.unitOut).toEqual('kilometer');
  });

  it('should convert correctly', function() {
    expect(lengthConverter.convert(50)).toEqual(50000);
    expect(lengthConverter.convert(0.001)).toEqual(1);

    lengthConverter.setUnitIn('centimeter');
    expect(lengthConverter.convert(100)).toEqual(1);
    expect(lengthConverter.convert(0.1)).toEqual(0.001);

    lengthConverter.setUnitIn('meter');
    lengthConverter.setUnitOut('yard');
    expect(lengthConverter.convert(1)).toEqual(1.0936132983377078);
    expect(lengthConverter.convert(23)).toEqual(25.15310586176728);

    expect(lengthConverter.convert(0)).toEqual(0);
  });
});