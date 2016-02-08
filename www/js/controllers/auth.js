angular.module('app.auth', [])

.controller('AuthController', function ($scope, $location, Auth, Url) {

  $scope.fbLogin = function(){
    // var authUrl = Url.url() + '/auth/facebook'
    // authUrl = "http://www.yahoo.com"
    // console.log(authUrl)
    // $location.path(authUrl)
    Auth.login()
  }
});