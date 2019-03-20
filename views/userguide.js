

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('UserGuideCtrl', UserGuideCtrl);

// Inject my dependencies
UserGuideCtrl.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function UserGuideCtrl($routeParams, $scope, $window ) {
	//Html scope variables
	
	
	//Load stuff settings;
	//Load real Stuff;
	
	//Html scope variables
	$scope.thisGuy = $window.user;
	
}