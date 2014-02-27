'use strict';

describe('Service: VolumeConverter', function () {

  // load the service's module
  beforeEach(module('converterApp'));

  // instantiate service
  var VolumeConverter, volumeConverter;
  beforeEach(inject(function (_VolumeConverter_) {
    VolumeConverter = _VolumeConverter_;
    volumeConverter = new VolumeConverter();
    volumeConverter.setUnitIn('usGallon');
    volumeConverter.setUnitOut('usQuart');
  }));

  it('should be defined', function () {
    expect(!!volumeConverter).toEqual(true);
  });

  it('should be initialized with valid units value', function() {
    expect(volumeConverter.unitIn).toEqual('usGallon');
    expect(volumeConverter.unitOut).toEqual('usQuart');
  });

  it('should have valid setters', function() {
    volumeConverter.setUnitIn('liter');
    expect(volumeConverter.unitIn).toEqual('liter');
    volumeConverter.setUnitOut('cubicMeter');
    expect(volumeConverter.unitOut).toEqual('cubicMeter');
  });

  it('should convert correctly', function() {
    expect(volumeConverter.convert(50)).toEqual(199.9999);
    expect(volumeConverter.convert(0.001)).toEqual(0.004);

    volumeConverter.setUnitIn('cubicFoot');
    expect(volumeConverter.convert(100)).toEqual(2992.2027);
    expect(volumeConverter.convert(0.1)).toEqual(2.9922);

    volumeConverter.setUnitIn('imperialPint');
    volumeConverter.setUnitOut('usOunce');
    expect(volumeConverter.convert(1)).toEqual(19.2152);
    expect(volumeConverter.convert(23)).toEqual(441.9498);

    expect(volumeConverter.convert(50, false)).toEqual(2.6021);
    expect(volumeConverter.convert(-790, false)).toEqual(-41.1133);

    expect(volumeConverter.convert(0)).toEqual(0);
  });
});