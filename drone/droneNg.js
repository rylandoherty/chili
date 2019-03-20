  var app = angular.module("myApp", ["ngRoute", 'fileUpload']);
  angular.module('myApp')


.controller('DogCtrl', DogCtrl);

// Inject my dependencies
DogCtrl.$inject = ['$routeParams','$scope','$window'];


function DogCtrl ($scope, $window, $route) {
  
  	}
  	
  	
app.config(function($routeProvider) {
    $routeProvider
    
    .when("/a", {
        templateUrl : "view/a.htm"
    })
    .when("/spots", {
        templateUrl : "view/spots.cfm",
        controller: 'spotCtrl',
        controllerAs: 'spot'
    })
    .when("/upload", {
        templateUrl : "view/upload.cfm",
        controller: 'MyCtrl',
        controllerAs: 'upload'
         
        
    })
    .when("/b", {
        templateUrl : "view/b.htm"
    })
    .otherwise(
                   {
                            redirectTo: "/spots"
                     }
                    );
});