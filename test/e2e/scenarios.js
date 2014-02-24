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
    // Choose meter
    select('unitIn').option('1');
    // value out is now km so 1 meter = 0.001 km
    expect(input('valueOut').val()).toEqual('0.001');
  });

  describe('Length converter', function() {
    beforeEach(function() {
      // Choose length
      select('category').option('1');
    });

    it('should switch correctly the category to length', function() {
      // 1 kilometer = 1000 meter
      expect(input('valueOut').val()).toEqual('1000');
    });

    it('should correctly convert length', function() {
      // Choose mile
      select('unitIn').option('4');
      // Choose yard
      select('unitOut').option('5');
      // Set 8 miles
      input('valueIn').enter('8');
      // 8 miles = 14079.965 yard
      expect(input('valueOut').val()).toEqual('14079.965');
    });
  });

  describe('Temperature converter', function() {
    beforeEach(function() {
      // Choose temperature
      select('category').option('0');
    });

    it('should switch correctly the category to temperature', function() {
      // 1 celsius = 33.8 farenheit
      expect(input('valueOut').val()).toEqual('33.8');
    });

    it('should correctly convert temperature', function() {
      // Choose fahrenheit
      select('unitIn').option('1');
      // Choose kelvin
      select('unitOut').option('2');
      // Set 23 fahrenheit
      input('valueIn').enter('23');
      // 23 fahrenheit = 268.15 kelvin
      expect(input('valueOut').val()).toEqual('268.15');
    });
  });

  describe('Mass converter', function() {
    beforeEach(function() {
      // Choose mass
      select('category').option('2');
    });

    it('should switch correctly the category to mass', function() {
      // 1 metric ton = 1000 kilogram
      expect(input('valueOut').val()).toEqual('1000');
    });

    it('should correctly convert mass', function() {
      // Choose kilogram
      select('unitIn').option('1');
      // Choose ounce
      select('unitOut').option('9');
      // Set 23 kilogram
      input('valueIn').enter('23');
      // 23 kilogram = 35.274 ounce
      expect(input('valueOut').val()).toEqual('811.4048');
    });
  });
});