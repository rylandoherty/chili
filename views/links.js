

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('LinkCtrl', LinkCtrl);

// Inject my dependencies
LinkCtrl.$inject = ['$routeParams','$scope','$window','userlist','$location'];

// Now create our controller function with all necessary logic

function LinkCtrl($routeParams, $scope, $window, userlist, $location) {
	//Html scope variables
	$scope.thisGuy = $window.user;
	//Load stuff settings;
	//Load real Stuff;
	var district = "District Sanat";
	
	$scope.linkList =[];
	
	
	$scope.linkObj = {};

	$scope.openLink= function(theLink){
		$window.open(theLink);
	}

	$scope.addLink = function(a){
		console.log($scope.thisGuy);
		
		a.addedby = $scope.thisGuy.userid;
		loadProxy.addlink(a);
		
		$scope.loadLinks();
	}
	$scope.loadLinks = function(){
		$scope.linkList = loadProxy.loadlinks();
		
	}
	$scope.deleteLink = function(a){
		loadProxy.deletelinks(a);
		
		$scope.loadLinks();
	}
	
	$scope.loadLinks();
	
	
	

   
    	
	
}