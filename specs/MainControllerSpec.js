describe('MainControllerSpec', function() {

  beforeEach(module('app'));

  var $$controller;
  var $$httpBackend;

  var repositoriesMock = [{}, {}, {}];

  beforeEach(inject(function($controller, $httpBackend){
    $$controller = $controller;
    $$httpBackend = $httpBackend;

    $$httpBackend.when("GET", "https://api.github.com/users/renanborgez/repos").respond(repositoriesMock);
    $$httpBackend.when("GET", "https://api.github.com/users/test/repos").respond(404, {});
    
  }));

  describe('$scope.getUserRepositories', function() {
    it('gets the repositories from a github user with 200 status', function() {
      var $scope = {};
      var controller = $$controller('MainController', { $scope: $scope });
      var mockedForm = {
        username: 'renanborgez'
      };

      $scope.userModel = [];
      $scope.getUserRepositories(mockedForm);

      $$httpBackend.flush();

      expect($scope.userModel.length).toEqual(3);
      expect($scope.status).toEqual(200);
      
    });

    it('gets not found user and 404 status', function() {
      var $scope = {};
      var controller = $$controller('MainController', { $scope: $scope });
      var mockedForm = {
        username: 'test'
      };

      $scope.userModel = [];
      $scope.getUserRepositories(mockedForm);

      $$httpBackend.flush();

      expect($scope.status).toEqual(404);
      expect($scope.userModel.length).toEqual(0);
    });

    it('geting user shows searching status as 0 and then 200 after found', function() {
      var $scope = {};
      var controller = $$controller('MainController', { $scope: $scope });
      var mockedForm = {
        username: 'renanborgez'
      };
      $scope.getUserRepositories(mockedForm);

      expect($scope.status).toEqual(0);

      $$httpBackend.flush();
      expect($scope.status).toEqual(200);
    });

    it('showing the searched user after form submit', function() {
      var $scope = {};
      var controller = $$controller('MainController', { $scope: $scope });
      var mockedForm = {
        username: 'renanborgez'
      };

      $scope.getUserRepositories(mockedForm);
      $$httpBackend.flush();
      expect($scope.searchedUsername).toEqual('renanborgez');
    });
  });
});