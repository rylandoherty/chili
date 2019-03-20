
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
	 				
					var userInput = document.getElementById("userid");
					var passInput = document.getElementById("psw");
					
					
					
					
				
	$scope.user = {};
	doThing = function(target){
	 	
	 	$scope.htmlThings = {};
	 	$scope.htmlThings['list-4'];
	     var b = document.getElementsByClassName(target);
	    
	     if(b[0].style.display == "none"){
	     	$(".list-4").fadeIn(100);
	     	
	     }
	     else{
	     	$(".list-4").fadeOut(100);
	     
	    // b[0].style.display = "none";
	 	 }
	 	//var test = f.getUserListHoursPerWeek("District Sanat",2017,12);
	 	
	 	//console.log(test);
	 } 
	
	$scope.sendPassword = function(){
	
	//var tuser = $window.document.getElementById('userid').value;
		//f.sendEmailForPassword(tuser);
	}
	
	
	
	$scope.user.name;
	$scope.user.pass;
	$scope.user.level;
	$scope.user.district; 
	//$window.userlist = userlist.gethoursworkedbystore($window.datesStore.year,$window.datesStore.month);
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
	
	

	$scope.passUserData = function (userid, pass ){
	  var resultz = '';
	
	 $window.district = "District Sanat";
		if( userid == '' ||pass == ''){
	var userid = document.getElementById('userid');
	 var pass = document.getElementById('psw');
	resultz = e.validateAndReturnUser(userid.value , pass.value);
	}
	else{
		
	 resultz = e.validateAndReturnUser(userid ,pass);
	}
	//console.log(resultz);
	 if(resultz.username=='rhi'){
	 	
	 	$location.url("/Rhi");
	 }
	
	
	$scope.righthere = resultz; 
	if(resultz=="wrong pass"){
		$scope.load2 = "Wrong Password";
		
	}
	else if(resultz=="not found"){
		$scope.load2 = "Username not found";
		//$window.location.href ="/#/Login";
	} 
	 
	else if(resultz!="wrong pass"){
			loadProxy.setActivity(resultz.userid);
		$scope.load2 = "User Found";
	 $scope.setUser(resultz);
	 $window.user = resultz;
	 
	 
	 $window.datesStore= {};
	  var today = new Date();
	  var lastMonthDate = new Date (today.getFullYear(), today.getMonth()-1);
	  $window.datesStore.lastyear = lastMonthDate.getFullYear();
	 $window.datesStore.lastmonth = lastMonthDate.getMonth()+1;
	 $window.datesStore.year = today.getFullYear();
	 $window.datesStore.month = today.getMonth()+1;
	 var lastmonthfirstday = new Date(today.getFullYear(), today.getMonth()) ;
	 var start = lastmonthfirstday.getFullYear()+""+("0"+(lastmonthfirstday.getMonth()+1)).slice(-2)+("0"+lastmonthfirstday.getDate()).slice(-2)+"0000";
	 var end = today.getFullYear()+("0"+(today.getMonth()+1)).slice(-2)+("0"+today.getDate()).slice(-2)+"0000";
	// var lastmonthsalary = gethoursformonthfordraw($window.datesStore.lastyear,$window.datesStore.lastmonth,$window.district );
	// var thismonthsalary = gethoursformonthfordraw($window.datesStore.year,$window.datesStore.month,$window.district );
	 
	 
	//$window.lastmonthsalary = gethoursformonthfordraw($window.datesStore.lastyear,$window.datesStore.lastmonth,$window.district );
	//console.log(lastmonthsalary);
	//console.log(thismonthsalary);
	
	 
    	
    	
    var sales;	
  $window.sales.dateSystem = {};
  $window.sales.toWrite={};
   // sales = loadProxy.getproductdetails(start,end);
    
    
	$window.clocks = {};
	
	$window.datesStore.district='District Sanat';
	
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
    $window.sales.dateSystem['Load'] = {};
    $scope.load2="Loading";
   
		
   
   
    //console.log($window.sales.dateSystem['MTD']);
    
    

	
	
	   
	    
	    
	   // $window.sales.dateSystem['LastMonth'] = finalizecontainer( $window.sales.toWrite['LastMonth']);
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
	
	
	 if(resultz.accesslevel<=1){
	 	$location.url("/commview");
	 }
		
	 else if(resultz.accesslevel<=2){
	 	$location.url("/commview");
	 }
	 
	 else if(resultz.accesslevel<=3){
	 	$location.url("commview");
	 }
	
	 
	 if(resultz.userid == 15){
	 	$location.url("/DailyReport");
	 }
	 if(resultz.userid == 1){
	 	$location.url("/Sam");
	 }
		
	 return resultz;
	 }
	 
	 
}

	
	
 $scope.deleteCookie = function(){
	e.removeUserCookie();
	 //var userid = window.document.getElementById('userid');
	// var pass = window.document.getElementById('psw');
	 //userid.value = "";
	// pass.value = "";
	 
	 $window.location.href ="http://greenchili.space";
	 //console.log($window.location);
	// $window.location.hostname("greenchili.space");
}
$scope.setUser = function(result){
	$scope.user.id =result.id;
	$scope.user.name =result.name;
	$scope.user.pass =result.password;
	$scope.user.level =result.accesslevel; 
	
}
$scope.returnUser = function(){
	return $scope.user;
}

//$scope.passUserData();
}


