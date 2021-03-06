app.controller('MainController', function($scope, $location, UserFactory)
{
  $scope.userModel = [];
  $scope.status = null;
  $scope.username;

  $scope.getUserRepositories = function (form){
    $scope.searchedUsername = form.username;
    $scope.status = 0;

    UserFactory.getUserRepositories(form.username, function(res){
      $scope.status = res.status;
      if(res.status === 200){
        $scope.userModel = res.data;
        return;
      }
      $scope.userModel = []
    }, function(res){
      $scope.status = res.status;
      $scope.userModel = []
    });
  }
});