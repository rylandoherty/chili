security = "";
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
    
   
    
 $scope.passUserData = function () {
 	
 	 var userid = $window.document.getElementById('userid');
 	  var userid = "rylan.doherty";
	//console.log(userid.value);
	 var pass = $window.document.getElementById('psw');
	 var pass = "fvCD13qw";
	//console.log(pass.value);
	  $scope.$parent['loggedIn']= false;
	$window.userStuff = f.validateAndReturnUser(userid.value,pass.value);
	
	if($window.userStuff=='wrong pass'){
	$window.message = "wrong pass";	
	}
	else{
		
	$window.userTag =userid.value;
	storeStuff = e.loadStoreStuff();
	console.log(storeStuff.storeList);
	$window.receivedList = $window.storeStuff.receivedList;
	$window.rmaList = $window.storeStuff.rmaList;
	$window.transfers = $window.storeStuff.transfersList;
	$window.theProductList = $window.storeStuff.productList;
	$window.salesQuery = $window.storeStuff.storeList;
	$window.uploadRecord = $window.storeStuff.uploadRecord;
	$window.receivedInvoice = $window.storeStuff.receivedList; 
	console.log($window.storeStuff);
	}
	
	

 			
 			
 		
 		
 		
 		
	//$window.theProductList = e.loadProductList();
	//$window.salesQuery = e.loadStoresSalesItems();
	
	
	
	
	if($scope.userStuff == 0){
		
		$scope.userStuff = "not found";
	}
	else{
		 //Ctrl1($scope,sharedProperties);
		 //$scope.thin = Ctrl2($scope, sharedProperties);
		   $scope.$parent['level'] = $window.userStuff['level'];
		 $scope.$parent['level'] = $window.userStuff['level'];
		 
	}
	
   // $scope.login = user;
   // $scope.pass = pw;
   //console.log(login);
}

 	
  
  

 

}