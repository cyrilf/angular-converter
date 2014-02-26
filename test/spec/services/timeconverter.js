'use strict';

describe('Service: TimeConverter', function () {

  // load the service's module
  beforeEach(module('converterApp'));

  // instantiate service
  var TimeConverter, timeConverter;
  beforeEach(inject(function (_TimeConverter_) {
    TimeConverter = _TimeConverter_;
    timeConverter = new TimeConverter();
    timeConverter.setUnitIn('nanosecond');
    timeConverter.setUnitOut('microsecond');
  }));

  it('should be defined', function () {
    expect(!!timeConverter).toEqual(true);
  });

  it('should be initialized with valid units value', function() {
    expect(timeConverter.unitIn).toEqual('nanosecond');
    expect(timeConverter.unitOut).toEqual('microsecond');
  });

  it('should have valid setters', function() {
    timeConverter.setUnitIn('day');
    expect(timeConverter.unitIn).toEqual('day');
    timeConverter.setUnitOut('month');
    expect(timeConverter.unitOut).toEqual('month');
  });

  it('should convert correctly', function() {
    expect(timeConverter.convert(50)).toEqual(0.05);
    expect(timeConverter.convert(1000)).toEqual(1);

    timeConverter.setUnitIn('minute');
    expect(timeConverter.convert(100)).toEqual(5999996160);
    expect(timeConverter.convert(0.000001)).toEqual(60);

    timeConverter.setUnitIn('year');
    timeConverter.setUnitOut('century');
    expect(timeConverter.convert(1)).toEqual(0.01);
    expect(timeConverter.convert(23)).toEqual(0.23);

    expect(timeConverter.convert(50, false)).toEqual(5000);
    expect(timeConverter.convert(-790, false)).toEqual(-79000);

    expect(timeConverter.convert(0)).toEqual(0);
  });
});