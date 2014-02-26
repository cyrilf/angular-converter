'use strict';

describe('Service: DigitalStorageConverter', function () {

  // load the service's module
  beforeEach(module('converterApp'));

  // instantiate service
  var DigitalStorageConverter, digitalStorageConverter;
  beforeEach(inject(function (_DigitalStorageConverter_) {
    DigitalStorageConverter = _DigitalStorageConverter_;
    digitalStorageConverter = new DigitalStorageConverter();
    digitalStorageConverter.setUnitIn('bit');
    digitalStorageConverter.setUnitOut('byte');
  }));

  it('should be defined', function () {
    expect(!!digitalStorageConverter).toEqual(true);
  });

  it('should be initialized with valid units value', function() {
    expect(digitalStorageConverter.unitIn).toEqual('bit');
    expect(digitalStorageConverter.unitOut).toEqual('byte');
  });

  it('should have valid setters', function() {
    digitalStorageConverter.setUnitIn('gigabit');
    expect(digitalStorageConverter.unitIn).toEqual('gigabit');
    digitalStorageConverter.setUnitOut('terabit');
    expect(digitalStorageConverter.unitOut).toEqual('terabit');
  });

  it('should convert correctly', function() {
    expect(digitalStorageConverter.convert(8)).toEqual(1);
    expect(digitalStorageConverter.convert(77)).toEqual(9.625);

    digitalStorageConverter.setUnitIn('kilobyte');
    expect(digitalStorageConverter.convert(100)).toEqual(102400);
    expect(digitalStorageConverter.convert(0.3)).toEqual(307.2);

    digitalStorageConverter.setUnitIn('terabit');
    digitalStorageConverter.setUnitOut('petabit');
    expect(digitalStorageConverter.convert(1000)).toEqual(0.9766);
    expect(digitalStorageConverter.convert(50003)).toEqual(48.8312);

    expect(digitalStorageConverter.convert(50, false)).toEqual(51199.8035);
    expect(digitalStorageConverter.convert(-790, false)).toEqual(-808956.896);

    expect(digitalStorageConverter.convert(0)).toEqual(0);
  });
});