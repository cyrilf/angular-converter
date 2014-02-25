'use strict';

describe('Service: AbstractConverter', function () {

  // load the service's module
  beforeEach(module('converterApp'));

  // instantiate service
  var AbstractConverter, abstractConverter;
  beforeEach(inject(function (_AbstractConverter_) {
    AbstractConverter = _AbstractConverter_;
    abstractConverter = new AbstractConverter();
  }));

  it('should be defined', function () {
    expect(!!AbstractConverter).toEqual(true);
  });

  it('should implement a convert function', function() {
    expect(typeof abstractConverter.convert).toEqual('function');
  });

  it('should implement a round function', function() {
    expect(typeof abstractConverter.round).toEqual('function');
  });

  it('should implement a setUnitIn function', function() {
    expect(typeof abstractConverter.setUnitIn).toEqual('function');
  });

  it('should implement a setUnitOut function', function() {
    expect(typeof abstractConverter.setUnitOut).toEqual('function');
  });
});