

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('ActErrorCtrl', ActErrorCtrl);

// Inject my dependencies
ActErrorCtrl.$inject = ['$routeParams','$scope','$window','userlist'];

// Now create our controller function with all necessary logic

function ActErrorCtrl($routeParams, $scope, $window, userlist) {
	//Html scope variables
	$scope.thisGuy = $window.user;
	//Load stuff settings;
	//Load real Stuff;
	var district = "District Sanat";
	
	$scope.errorList =[];
	
	
	$scope.errorObj = {};


	$scope.addError = function(){
		console.log($scope.errorObj);
		loadProxy.adderror($scope.errorObj);
		$scope.loadErrors();
	}
	$scope.loadErrors = function(){
		$scope.errorList = loadProxy.geterrors();
		console.log($scope.errorList);
	}
	$scope.deleteerror = function(thisItem){
		loadProxy.deleteerror(thisItem);
		$scope.loadErrors();
	}
	$scope.setfixed = function(thisItem){
		console.log(thisItem);
		loadProxy.fixerror(thisItem);
		$scope.loadErrors();
	}
	$scope.setunfixed = function(thisItem){
		loadProxy.unfixerror(thisItem);
		$scope.loadErrors();
	}
	
	$scope.loadErrors();
	
	
	

   
    	
	
}