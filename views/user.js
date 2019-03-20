

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('UserCtrl', UserCtrl);

// Inject my dependencies
UserCtrl.$inject = ['$routeParams','$scope','$window','userlist', '$location'];

// Now create our controller function with all necessary logic

function UserCtrl($routeParams, $scope, $window,userlist, $location ) {
	//Html scope variables
	$scope.thisGuy = $window.user;
	//Load stuff settings;
	//Load real Stuff;
	//get all user stuff at once. 
	//load all the user stuff for atleast that one person
	//user.gethours array
	
	$window.userlist = userlist.gethoursworkedbystore(2017,11);
	 $scope.deleteCookie = function(){
	 
	e.removeUserCookie();
	$window.location.href ="/#/Logout";
	
	}
	$scope.uploadContainer = {};
		$scope.uploadThing = loadProxy.getUploads();
		$scope.uploadtypes = ['hours','pdr','salesbyinvoice','schedule','clockhours'];
			$scope.findTopUploads = function(){
				for(var dem in $scope.uploadThing){
					var thisUpload =  $scope.uploadThing[dem];
					if(typeof $scope.uploadContainer[thisUpload.type] == 'undefined'){
						$scope.uploadContainer[thisUpload.type]={};
						$scope.uploadContainer[thisUpload.type]['topten']=[];
						$scope.uploadContainer[thisUpload.type]['top']=0;
					}
					if($scope.uploadContainer[thisUpload.type]['topten'].length<10)
					{
						$scope.uploadContainer[thisUpload.type]['topten'].push(thisUpload.time);
						$scope.uploadContainer[thisUpload.type]['top'] = thisUpload.time;
					}
					else {
						
								$scope.uploadContainer[thisUpload.type]['topten'].shift();
								$scope.uploadContainer[thisUpload.type]['topten'].push(thisUpload.time);
								$scope.uploadContainer[thisUpload.type]['top'] = thisUpload.time;
							}
						
					}
					
					
							
			}
			
	
$scope.findTopUploads();
	 console.log($scope.uploadContainer);
	$window.uploadContainer = $scope.uploadContainer;
	
	
	
}