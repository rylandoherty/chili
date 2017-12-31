

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('ManagerCtrl', ManagerCtrl);

// Inject my dependencies
ManagerCtrl.$inject = ['$routeParams','$scope','$window' , 'userlist','$location'];

// Now create our controller function with all necessary logic

function ManagerCtrl($routeParams, $scope, $window,userlist, $location ) {
	//Html scope variables
	$scope.depthViews = [];
	userlist.loaduserList();
	console.log($location);
	//$window.userlist = userlist.gethoursworkedbystore(2017,10);
	//console.log(userlist.gethoursformonthfordraw(2017,10));
	console.log(userlist.gethoursworkedbystore(2017,10));
	$window.admin ={} ;
	$window.admin.userlist ;
	$window.admin.userlist = userlist.getuserList();
	$scope.thisGuy = $window.user;
	console.log($window);
	//Load stuff settings;
	//Load real Stuff;
	$scope.addarrayOfLocations = function (){
		$scope.depthViews.push($location.$$path);
	}
	$scope.backarrayOfLocations = function (vari){
		console.log($location)
		$location.url(vari);
		console.log(vari);
		
	}
	$scope.refreshManager = function (){
	userlist.loaduserList();	
	}
	
}