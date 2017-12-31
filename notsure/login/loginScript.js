

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('LoginCtrl', LoginCtrl);

// Inject my dependencies
LoginCtrl.$inject = ['$routeParams','$scope','$window','$location','userData', '$rootScope', '$timeout'];

// Now create our controller function with all necessary logic

function LoginCtrl($routeParams, $scope, $window,$location, userData, $rootScope, $timeout) {
	//Html scope variables
	$scope.user;
	$scope.user.name;
	$scope.user.pass;
	$scope.user.level;
	
	$window.sales = {};
	$scope.load = "";
		$scope.uploadContainer = {};
	$scope.uploadThing = loadProxy.getUploads();
	$scope.uploadtypes = ['hours','pdr','salesbyinvoice','schedule','clockhours'];
$scope.findTopUploads = function(){
	for(dem in $scope.uploadtypes){
		var thisUpload =  $scope.uploadtypes[dem];
		if((typeof $scope.uploadContainer[thisUpload.type] == 'undefined')){
			$scope.uploadContainer[thisUpload.type]={};
			$scope.uploadContainer[thisUpload.type]['topten']=[];
		}
		var thisUpload =  $scope.uploadContainer[thisUpload.type];
		if($scope.uploadContainer == stupid)
		for(thoseuploadtype in $scope.uploadContainer){
				
			}
			$scope.uploadContainer[thisUpload.type]
	}
}
$scope.getDateFromSql= function (time){
		
		time = time.substring(5,time.length);
		var betterSetIt = 0
		var year = time.substring(betterSetIt,betterSetIt+4);
		var month = time.substring(betterSetIt+5,betterSetIt+7);
		var day = time.substring(betterSetIt+8,betterSetIt+10);
		var hour = time.substring(betterSetIt+11,betterSetIt+13);
		var minute = time.substring(betterSetIt+14,betterSetIt+16);
		var d = new Date(year,month-1,day,hour,minute);
		return d;
		//2016-11-06 19:14:48'
	}
	
	

	$scope.passUserData = function (){
	 
	
	 $window.district = "District Sanat";
	
	 var userid = window.document.getElementById('userid');
	
	 var pass = window.document.getElementById('psw');
	
	 var resultz = e.validateAndReturnUser(userid.value,pass.value);
	if(resultz=="wrong pass"){
		$scope.load = "wrong password";
		
	}
	else if(resultz=="not found"){
		$scope.load = "Username not found";
	} 
	 
	else if(resultz!="wrong pass"){
		$scope.load = "User Found";
	 $scope.setUser(resultz);
	 $window.user = resultz;
	 $window.datesStore= {};
	  var today = new Date();
	  $window.datesStore.lastyear = today.getFullYear();
	 $window.datesStore.lastmonth = today.getMonth();
	 $window.datesStore.year = today.getFullYear();
	 $window.datesStore.month = today.getMonth()+1;
	 var lastmonthsalary = gethoursformonthfordraw($window.datesStore.lastyear,$window.datesStore.lastmonth,$window.district );
	 var thismonthsalary = gethoursformonthfordraw($window.datesStore.year,$window.datesStore.month,$window.district );
	
	//console.log(lastmonthsalary);
	//console.log(thismonthsalary);
	
	 var lastmonthfirstday = new Date(today.getFullYear(), today.getMonth()) ;
	 var start = lastmonthfirstday.getFullYear()+""+("0"+(lastmonthfirstday.getMonth()+1)).slice(-2)+("0"+lastmonthfirstday.getDate()).slice(-2)+"0000";
    	
    	var end = today.getFullYear()+("0"+(today.getMonth()+1)).slice(-2)+("0"+today.getDate()).slice(-2)+"0000";
    var sales;	
  $window.sales.dateSystem = {};
  $window.sales.toWrite={};
   // sales = loadProxy.getproductdetails(start,end);
    
    
	$window.clocks = {};
	
	$window.datesStore.district=['District Sanat'];
	
	$window.sales.dateSystem['MTD'] = {};
	$window.sales.toWrite['MTD'] = {};
	$window.sales.toWrite['lastweek'] = {};
	$window.sales.toWrite['Yesterday'] = {};
	$window.sales.toWrite['Today'] = {};
	$window.sales.toWrite['LastMonth'] = {};
    $window.sales.dateSystem['lastweek'] = {};
    $window.sales.dateSystem['Yesterday'] = {};
    $window.sales.dateSystem['Today'] = {};
    $window.sales.dateSystem['LastMonth'] = {};
    $window.sales.dateSystem['Calendar'] = {};
    $scope.load2="Loading";
   
		
   
   
    console.log($window.sales.dateSystem['MTD']);
    
    
$timeout(function() { 
	 $window.sales.toWrite['lastweek'] = saveContainer.loadcontainer("lastweek");
	    $window.sales.toWrite['Yesterday'] = saveContainer.loadcontainer("Yesterday");
	    $window.sales.toWrite['Today'] = saveContainer.loadcontainer("Today");
	    $window.sales.toWrite['LastMonth'] = saveContainer.loadcontainer("LastMonth");
	    $window.sales.toWrite['MTD'] = saveContainer.loadcontainer("MTD");
						
	 
		
	    $window.sales.dateSystem['MTD'] = finalizecontainer( $window.sales.toWrite['MTD']);
	    $window.sales.dateSystem['lastweek'] = finalizecontainer( $window.sales.toWrite['lastweek']);
	    $window.sales.dateSystem['Yesterday'] = finalizecontainer( $window.sales.toWrite['Yesterday']);
	    $window.sales.dateSystem['Today'] = finalizecontainer( $window.sales.toWrite['Today']);
	    $window.sales.dateSystem['LastMonth'] = finalizecontainer( $window.sales.toWrite['LastMonth']);
	/*
    $window.sales.dateSystem['MTD']['container'] = getSalesContainer('MTD',0,0);
   
    
   	$window.sales.dateSystem['LastMonth']['container'] = getSalesContainer('LastMonth',0,0);
   	
    //$scope.load="This Month";
	$window.sales.dateSystem['lastweek']['container'] = getSalesContainer('lastweek',0,0);
	
	$scope.load="Last Week";
	$window.sales.dateSystem['Yesterday']['container'] = getSalesContainer('Yesterday',0,0);
	$scope.load="Yesterday";
	$window.sales.dateSystem['Today']['container'] = getSalesContainer('Today',0,0);
	$scope.load="Today";
	console.log($window.sales.dateSystem);*/
});

	
	
	
	 if(resultz.accesslevel<=0){
	 	$location.url("/Admin");
	 }
		
	 else if(resultz.accesslevel<=2){
	 	
	 }
	 
	 else if(resultz.accesslevel<=3){
	 	$location.url("/User");
	 }
	 	
	 else if(resultz.accesslevel<=4){
	 	$location.url("/User");
	 }
		
	 return resultz;
	 }
	 
	 
}

	
	
 $scope.deleteCookie = function(){
	e.removeUserCookie();
	 var userid = window.document.getElementById('userid');
	 var pass = window.document.getElementById('psw');
	 userid.value = "";
	 pass.value = "";
}
$scope.setUser = function(result){
	$scope.user.name =result.userid;
	$scope.user.pass =result.password;
	$scope.user.level =result.accesslevel; 
	
}
$scope.returnUser = function(){
	return $scope.user;
}

}


