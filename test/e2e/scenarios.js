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

  describe('Speed converter', function() {
    beforeEach(function() {
      // Choose speed
      select('category').option('3');
    });

    it('should switch correctly the category to speed', function() {
      // 1 miles/hour = 1.4667 feet/sec
      expect(input('valueOut').val()).toEqual('1.4667');
    });

    it('should correctly convert speed', function() {
      // Choose km/hour
      select('unitIn').option('3');
      // Choose meter/sec
      select('unitOut').option('2');
      // Set 23 km/hour
      input('valueIn').enter('23');
      // 23 km/hour = 0.2778 meter/sec
      expect(input('valueOut').val()).toEqual('6.3889');
    });
  });

  describe('Volume converter', function() {
    beforeEach(function() {
      // Choose volume
      select('category').option('4');
    });

    it('should switch correctly the category to volume', function() {
      // 1 us gallon = 4 us quart
      expect(input('valueOut').val()).toEqual('4');
    });

    it('should correctly convert volume', function() {
      // Choose liter
      select('unitIn').option('8');
      // Choose us tablespoon
      select('unitOut').option('5');
      // Set 23 liter
      input('valueIn').enter('23');
      // 23 liter = 1555.4413 us tablespoon
      expect(input('valueOut').val()).toEqual('1555.4413');
    });
  });

  describe('Area converter', function() {
    beforeEach(function() {
      // Choose area
      select('category').option('5');
    });

    it('should switch correctly the category to area', function() {
      // 1 square km = 100 hectare
      expect(input('valueOut').val()).toEqual('100');
    });

    it('should correctly convert area', function() {
      // Choose acre
      select('unitIn').option('4');
      // Choose square foot
      select('unitOut').option('6');
      // Set 7 acre
      input('valueIn').enter('7');
      // 7 acre = 304920 square foot
      expect(input('valueOut').val()).toEqual('304920.4008');
    });
  });

  describe('Time converter', function() {
    beforeEach(function() {
      // Choose time
      select('category').option('6');
    });

    it('should switch correctly the category to time', function() {
      // 1 nanosecond = 0.001 microsecond
      expect(input('valueOut').val()).toEqual('0.001');
    });

    it('should correctly convert area', function() {
      // Choose month
      select('unitIn').option('8');
      // Choose day
      select('unitOut').option('6');
      // Set 12 month
      input('valueIn').enter('12');
      // 12 month = 365.2416 day
      expect(input('valueOut').val()).toEqual('365.2416');
    });
  });
});