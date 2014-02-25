'use strict';

describe('Service: AreaConverter', function () {

  // load the service's module
  beforeEach(module('converterApp'));

  // instantiate service
  var AreaConverter, areaConverter;
  beforeEach(inject(function (_AreaConverter_) {
    AreaConverter = _AreaConverter_;
    areaConverter = new AreaConverter();
    areaConverter.setUnitIn('squareKm');
    areaConverter.setUnitOut('hectare');
  }));

  it('should be defined', function () {
    expect(!!areaConverter).toEqual(true);
  });

  it('should be initialized with valid units value', function() {
    expect(areaConverter.unitIn).toEqual('squareKm');
    expect(areaConverter.unitOut).toEqual('hectare');
  });

  it('should have valid setters', function() {
    areaConverter.setUnitIn('acre');
    expect(areaConverter.unitIn).toEqual('acre');
    areaConverter.setUnitOut('squareFoot');
    expect(areaConverter.unitOut).toEqual('squareFoot');
  });

  it('should convert correctly', function() {
    expect(areaConverter.convert(50)).toEqual(5000);
    expect(areaConverter.convert(0.001)).toEqual(0.1);

    areaConverter.setUnitIn('squareYard');
    expect(areaConverter.convert(100)).toEqual(0.0084);
    expect(areaConverter.convert(77777)).toEqual(6.5031);

    areaConverter.setUnitIn('squareYard');
    areaConverter.setUnitOut('squareInch');
    expect(areaConverter.convert(1)).toEqual(1295.9994);
    expect(areaConverter.convert(23)).toEqual(29807.9872);

    expect(areaConverter.convert(500, false)).toEqual(0.3858);
    expect(areaConverter.convert(-790, false)).toEqual(-0.6096);

    expect(areaConverter.convert(0)).toEqual(0);
  });
});