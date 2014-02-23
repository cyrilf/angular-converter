'use strict';

describe('Controller: ConverterCtrl', function () {

  // load the controller's module
  beforeEach(module('converterApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('ConverterCtrl', {
      $scope: scope
    });
  }));

  it('should have default model set to valid values', function () {
    expect(scope.valueIn).toEqual(1);
    expect(scope.unitIn.value).toEqual('kilometer');
    expect(scope.unitOut.value).toEqual('meter');
  });
});
