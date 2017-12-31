

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('UserCtrl', UserCtrl);

// Inject my dependencies
UserCtrl.$inject = ['$routeParams','$scope','$window','userlist'];

// Now create our controller function with all necessary logic

function UserCtrl($routeParams, $scope, $window,userlist ) {
	//Html scope variables
	$scope.thisGuy = $window.user;
	//Load stuff settings;
	//Load real Stuff;
	//get all user stuff at once. 
	//load all the user stuff for atleast that one person
	//user.gethours array
	
	$window.userlist = userlist.gethoursworkedbystore(2017,11);
	
	
	
	
	
}