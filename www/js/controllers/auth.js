angular.module('app.auth', [])

.controller('AuthController', function ($scope, $location, Auth, Url) {

  $scope.redirect = function(){
    var authUrl = Url.url() + '/auth/facebook'
    console.log(authUrl)
    $location.path(authUrl)
  }
});