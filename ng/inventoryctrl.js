// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('InventoryCtrl', InventoryCtrl);

// Inject my dependencies
InventoryCtrl.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function InventoryCtrl($routeParams, $scope, $window) {
		
 		$scope.productList =  $window.theProductList;
 		$scope.storeArray = $window.salesQuery;
 		$scope.apple = "clvzap";
 		
	$scope.setTyper = function (text){
		
		$scope.typer = text;
		
	}
 	
 		
  	
  }
  
 
  
