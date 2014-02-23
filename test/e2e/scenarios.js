'use strict';

describe('Converter app', function() {
  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should be initialized with default value', function() {
    expect(input('valueIn').val()).toEqual('1');
    expect(input('valueOut').val()).toEqual('1000');
  });

  it('should update the valueOut on valueIn change', function() {
    input('valueIn').enter(23);
    expect(input('valueOut').val()).toEqual('23000');
  });

  it('should update the valueIn on valueOut change', function() {
    input('valueOut').enter(10000);
    expect(input('valueIn').val()).toEqual('10');
  });

  it('should switch the units on same units value', function() {
    select('unitIn').option('1');
    // Out in now
    expect(input('valueOut').val()).toEqual('0.001');
  });
});