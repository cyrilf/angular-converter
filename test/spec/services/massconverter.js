'use strict';

describe('Service: MassConverter', function () {

  // load the service's module
  beforeEach(module('converterApp'));

  // instantiate service
  var MassConverter, massConverter;
  beforeEach(inject(function (_MassConverter_) {
    MassConverter = _MassConverter_;
    massConverter = new MassConverter();
    massConverter.setUnitIn('metricTon');
    massConverter.setUnitOut('kilogram');
  }));

  it('should do something', function () {
    expect(!!massConverter).toEqual(true);
  });

  it('should be initialized with valid units value', function() {
    expect(massConverter.unitIn).toEqual('metricTon');
    expect(massConverter.unitOut).toEqual('kilogram');
  });

  it('should have valid setters', function() {
    massConverter.setUnitIn('stone');
    expect(massConverter.unitIn).toEqual('stone');
    massConverter.setUnitOut('pound');
    expect(massConverter.unitOut).toEqual('pound');
  });

  it('should convert correctly', function() {
    expect(massConverter.convert(50)).toEqual(50000);
    expect(massConverter.convert(0.001)).toEqual(1);

    massConverter.setUnitIn('stone');
    expect(massConverter.convert(100)).toEqual(635.029);
    expect(massConverter.convert(7999)).toEqual(50795.9697);

    massConverter.setUnitIn('pound');
    massConverter.setUnitOut('ounce');
    expect(massConverter.convert(1)).toEqual(16.002);
    expect(massConverter.convert(23)).toEqual(368.0467);

    expect(massConverter.convert(50, false)).toEqual(3.1246);
    expect(massConverter.convert(-790, false)).toEqual(-49.3687);

    expect(massConverter.convert(0)).toEqual(0);
  });
});