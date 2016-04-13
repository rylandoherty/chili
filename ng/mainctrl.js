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
    
   
    $scope.abc = $window.theReturn;
      
    
    $scope.code = [['Franklin','FRA'],['Bridgewater','EBR'],['Halifax','HAL']];
 	
  
  

  $scope.salesByStore = [[],[],[]];
  $scope.storeDetails = [[0],[0]];
  $scope.bridgewater = [];
  $scope.franklin = [];
   $scope.halifax = [];
  for(var sales in $scope.abc){
  	//console.log($scope.abc[sales]['salesid']);
  	for(var stores in $scope.code){
  		//console.log(code[stores]);
  		switch($scope.abc[sales]['salesid'].substring(0,3)){
  			case $scope.code[stores][1]:
  			$scope.salesByStore[stores].push($scope.abc[sales]);
  			break;	
  		}
  	}
  }
  
 $scope.trex = getNewLines($scope.salesByStore);

 

}