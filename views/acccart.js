


// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('AccCartCtrl', AccCartCtrl);

// Inject my dependencies
AccCartCtrl.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function AccCartCtrl($routeParams, $scope, $window ) {
$scope.vars = {};	
$scope.vars.VendorList = accCartProxy.getVendor();
$scope.vars.StoreList = loadProxy.loadDistrict(district);
$scope.vars.VendorStatusList = accCartProxy.getStatusList();
$scope.vars.cont = {};
updateStatus(vars.cont[store.storeid][vend.vendorname].status)

for(store in $scope.vars.StoreList ){
	var thisStore = $scope.vars.StoreList[store];
	if(typeof $scope.vars.cont[thisStore.storeid] == 'undefined'){
		$scope.vars.cont[thisStore.storeid] = {};
		for(vends in $scope.vars.VendorList){
			var thisVend = 0;
		}
	}
}


for(var those in $scope.vars.VendorStatusList ){
	var thisStatus = $scope.vars.VendorStatusList[those];
	
	
}




}