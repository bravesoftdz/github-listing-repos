app.factory('UserFactory', function($http, GLOBAL_VARIABLES){
  var baseReposUrl = GLOBAL_VARIABLES.GITHUB_URL + 'users/{0}/repos';
  
  return {
    getUserRepositories: function(username, successCallback, failCallback){
      return $http({
        url: baseReposUrl.replace('{0}', username),
        method: 'GET'
      }).then(successCallback, failCallback);
    }
  };
});