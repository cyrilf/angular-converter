'use strict';

describe('Service: lengthConverter', function () {

  // load the service's module
  beforeEach(module('converterApp'));

  // instantiate service
  var lengthConverter;
  beforeEach(inject(function (_lengthConverter_) {
    lengthConverter = _lengthConverter_;
  }));

  it('should do something', function () {
    expect(!!lengthConverter).toBe(true);
  });

});
