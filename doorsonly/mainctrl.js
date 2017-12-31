security = "";
// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('MainCtrl', MainCtrl);

// Inject my dependencies
MainCtrl.$inject = ['$route', '$routeParams','$scope', '$location','$window','$controller'];

// Now create our controller function with all necessary logic
function MainCtrl($route, $routeParams,$scope, $location, $window, $controller) {
	
    this.$route = $route;
    
    this.$location = $location;
    this.$routeParams = $routeParams;
  




   
    
 $scope.passUserData = function () {
 	
 	
 	  var userid = "rylan.doherty";
	//console.log(userid.value);
	
	 var pass = "fvCD13qw";
	//console.log(pass.value);
	  $scope.$parent['loggedIn']= false;
	$window.userStuff = f.validateAndReturnUser();
	
	if($window.userStuff=='wrong pass'){
	$window.message = "wrong pass";	
	}
	else{
		
	$window.userTag =userid.value;
	storeStuff = e.loadStoreStuff();
	//$window.commList = storeStuff.COMMS;
	//$window.receivedList = storeStuff.RECEIVEDLIST;
	//$window.rmaList = storeStuff.RMALIST;
	//$window.transfers = storeStuff.TRANSFERSLIST;
	$window.theProductList = storeStuff.PRODUCTLIST;
	$window.storeList = storeStuff.STORELIST;
	$window.uploadRecord = storeStuff.UPLOADRECORD;
	//$window.receivedInvoiceList = storeStuff.RECEIVEDINVOICELIST; 
	//$window.userList = storeStuff.USERLIST;
	//$window.userQuery = storeStuff.USERLIST;
	
	
	
	
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