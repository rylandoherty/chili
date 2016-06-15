security = "";
// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('MainCtrl', MainCtrl);

// Inject my dependencies
MainCtrl.$inject = ['$route', '$routeParams','$scope', '$location','$window','$controller','sharedProperties'];

// Now create our controller function with all necessary logic
function MainCtrl($route, $routeParams,$scope, $location, $window, $controller, sharedProperties) {
	
    this.$route = $route;
    
    this.$location = $location;
    this.$routeParams = $routeParams;
  
 $scope.thin = Ctrl2($scope, sharedProperties);


function Ctrl2($scope, sharedProperties) {
    
    $scope.both = sharedProperties.getProperty();
    return $scope.both;
}
    
   
    

 	
  
  

 

}