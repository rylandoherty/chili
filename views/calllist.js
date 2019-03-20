

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('CallListCtrl', CallListCtrl);

// Inject my dependencies
CallListCtrl.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function CallListCtrl($routeParams, $scope, $window ) {
		$scope.thisGuy = $window.user;
	//Load stuff settings;
	//Load real Stuff;
	var district = "District Sanat";
	
	$scope.vars = {};
	$scope.vars.store = {};
	$scope.vars.storelist = loadProxy.loadDistrict(district);
	console.log($scope.vars.storelist);
	$scope.vars.completed = false;
	
	$scope.calllist = loadProxy.loadCallList();
	 $scope.vars.callresults = ["Appointment","Left Voicemail", "No Answer","Made Sale", "Call Back"];
    	
$scope.updateCall = function(thisCall){
	thisCall.completedby = $scope.thisGuy.userid;
	loadProxy.updateCallList(thisCall);
		
	}
	
	
	
	
}

