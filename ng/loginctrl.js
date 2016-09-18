// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('LoginCtrl', LoginCtrl);

// Inject my dependencies
LoginCtrl.$inject = ['$routeParams','$scope','$window','sharedProperties'];

// Now create our controller function with all necessary logic
function LoginCtrl($routeParams, $scope, $window, sharedProperties) {
	
	
$scope.login ="";
$scope.pass ="";
  this.name = "LoginCtrl";
  this.params = $routeParams;
 this.loggedIn = false;

   function Ctrl1($scope, sharedProperties) {
    $scope.prop2 = true;
    $scope.both = sharedProperties.setProperty($scope.prop2);
}
 $scope.thing = Ctrl2($scope, sharedProperties);
 
function Ctrl2($scope, sharedProperties) {
    
    $scope.both = sharedProperties.getProperty();
    return $scope.both;
}
 
	

 $scope.passUserData = function () {
 	
 	 var userid = $window.document.getElementById('userid');
	//console.log(userid.value);
	 var pass = $window.document.getElementById('psw');
	//console.log(pass.value);
	  $scope.$parent['loggedIn']= false;
	$window.userStuff = f.validateAndReturnUser(userid.value,pass.value);
	
	if($window.userStuff=='wrong pass'){
	$window.message = "wrong pass";	
	}
	else{
		
	$window.userTag = userid.value;
	//$window.storeStuff = e.loadStoreStuff();
	//$window.uploadTimes = $window.storeStuff[3];
	//$window.commList = $window.storeStuff[4];
	/*$window.receivedList = $window.storeStuff.receivedList;
	$window.rmaList = $window.storeStuff.rmaList;
	$window.transfers = $window.storeStuff.transfersList;
	$window.theProductList = $window.storeStuff.productList;
	$window.salesQuery = $window.storeStuff.storeList;
	$window.uploadRecord = $window.storeStuff.uploadRecord;
	$window.receivedInvoice = $window.storeStuff.receivedList;*/ 
	//$window.userQuery = $window.storeStuff[2];
	//console.log($window.storeStuff);
	}
	
	

 			
 			
 		
 		
 		
 		
	//$window.theProductList = e.loadProductList();
	//$window.salesQuery = e.loadStoresSalesItems();
	
	
	
	
	if($scope.userStuff == 0){
		
		$scope.userStuff = "not found";
	}
	else{
		 Ctrl1($scope,sharedProperties);
		 //$scope.thin = Ctrl2($scope, sharedProperties);
		   $scope.$parent['level'] = $window.userStuff['level'];
		 $scope.$parent['level'] = $window.userStuff['level'];
		 
	}
	
   // $scope.login = user;
   // $scope.pass = pw;
   //console.log(login);
}

	
	
  // Logic here
}