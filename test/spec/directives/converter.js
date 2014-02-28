'use strict';

describe('Directive: converter', function () {

  // load the directive's module
  beforeEach(module('converterApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make wait the developer to write some valid tests', inject(function ($compile) {
    element = angular.element('<converter></converter>');
    element = $compile(element)(scope);
    // expect(element.text()).toBe('this is the converter directive');
    expect(true).toBe(true);
  }));
});
