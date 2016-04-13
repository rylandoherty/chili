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
 $scope.thin = Ctrl2($scope, sharedProperties);
 
function Ctrl2($scope, sharedProperties) {
    
    $scope.both = sharedProperties.getProperty();
    return $scope.both;
}
 
	

 $scope.passUserData = function () {
 	
 	 var userid = $window.document.getElementById('userid');
	//console.log(userid.value);
	 var pass = $window.document.getElementById('psw');
	//console.log(pass.value);
	 this.loggedIn = false;
	$scope.userStuff = f.validateAndReturnUser(userid.value,pass.value);
	if($scope.userStuff == 0){
		
		$scope.userStuff = "not found";
	}
	else{
		 
		 Ctrl1($scope,sharedProperties);
		 $scope.thin = Ctrl2($scope, sharedProperties);
		 this.loggedIn = true;
		 
	}
	
   // $scope.login = user;
   // $scope.pass = pw;
   //console.log(login);
}

	
	
  // Logic here
}