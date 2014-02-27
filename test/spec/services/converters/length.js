'use strict';

describe('Factory: LengthConverter', function () {

  // load the service's module
  beforeEach(module('converterApp'));

  // instantiate service
  var LengthConverter, lengthConverter;
  beforeEach(inject(function (_LengthConverter_) {
    LengthConverter = _LengthConverter_;
    lengthConverter = new LengthConverter();
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
    expect(lengthConverter.convert(1)).toEqual(1.0936);
    expect(lengthConverter.convert(23)).toEqual(25.1531);

    expect(lengthConverter.convert(50, false)).toEqual(45.72);
    expect(lengthConverter.convert(-790, false)).toEqual(-722.376);

    expect(lengthConverter.convert(0)).toEqual(0);
  });
});