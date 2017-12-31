

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('usersettingsCtrl', usersettingsCtrl);

// Inject my dependencies
usersettingsCtrl.$inject = ['$routeParams','$scope','$window','userlist'];

// Now create our controller function with all necessary logic

function usersettingsCtrl($routeParams, $scope, $window, userlist ) {
	//Html scope variables
	$scope.thisGuy = $window.user;
	
	//Load stuff settings;
	//Load real Stuff;
	$scope.d={};
	
	$scope.setpassword = function (user,newpw){
		
	
		
		userlist.setpassword(user,newpw);
		 
	
		 
	}
	
	
	
}