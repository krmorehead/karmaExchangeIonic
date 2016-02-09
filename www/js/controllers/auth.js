angular.module('app.auth', [])

.controller('AuthController', function ($scope, $location, $window, Auth, Url) {

  window.addEventListener("message", function(data){
    console.log("got a message", data)
  })

  $scope.fbLogin = function(){
    // var authUrl = Url.url() + '/auth/facebook'
    // authUrl = "http://www.yahoo.com"
    // console.log(authUrl)
    // $location.path(authUrl)
    Auth.login()
  }
});