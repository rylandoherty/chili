

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('AdminCtrl', AdminCtrl);

// Inject my dependencies
AdminCtrl.$inject = ['$routeParams','$scope','$window','userlist'];

// Now create our controller function with all necessary logic

function AdminCtrl($routeParams, $scope, $window, userlist) {
	//Html scope variables
	$scope.thisGuy = $window.user;
	//Load stuff settings;
	//Load real Stuff;
	var district = "District Sanat";
	$scope.days= {};
	//console.log(f.getclockinclockout("20171001","20171130","District Sanat"));
	//load all the goals and all the users hours
	$window.userlist = userlist.gethoursworkedbystore(2017,11);
	$scope.drawlist =  gethoursformonthfordraw($window.datesStore.year,$window.datesStore.month,district);
	console.log($scope.drawlist);
	
	$scope.cat = {};
	
	var x1 = document.getElementsByClassName('progress-bar');
	
	
	
	
	
}