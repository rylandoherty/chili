

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('AdminCtrl', AdminCtrl);

// Inject my dependencies
AdminCtrl.$inject = ['$routeParams','$scope','$window','userlist', '$location'];

// Now create our controller function with all necessary logic

function AdminCtrl($routeParams, $scope, $window, userlist, $location) {
	//Html scope variables
	$scope.thisGuy = $window.user;
	//Load stuff settings;
	//Load real Stuff;
	var district = "District Sanat";
	$scope.days= {};
	$scope.DDD = {};
	
	$scope.vars = {};
	$scope.vars.selectedInvoice = ""; 
	$scope.vars.litemode=true;
	//console.log(f.getclockinclockout("20171001","20171130","District Sanat"));
	//load all the goals and all the users hours
	$window.userlist = userlist.gethoursworkedbystore(2017,11);
	$scope.vars.selectedUser="";
	$scope.vars.selectedStore="";
	$scope.vars.selectedStat="";
	//console.log($scope.drawlist);
	
	$scope.cat = {};
	$scope.colorful = 0;
	
$scope.selectInvoice = function(a){
	$scope.vars.selectedInvoice = a;
	
}

			var colorscheme = [ {low:-1000,high:-1,  r:224,g:0,b:4, rx:-.003,gx:-.003,bx:0},
							{low:0,high:100,  r:140,g:140,b:140, rx:1,gx:1,bx:1},
						   {low:101,high:300,    r:175,g:111,b:8, rx:.5,gx:.5,bx:0},
						   {low:301,high:700,     r:203,g:214,b:8, rx:-1,gx:0,bx:0},
						  
						   {low:701,high:1500,    r:8,g:214,b:186, rx:0,gx:-0.2,bx:0}];
						
					
						
					$scope.onload = function(){
						
						$scope.DDD = invoiceProxy.getInvoice();
						console.log($scope.DDD);
						
						for( var those in $scope.DDD){
	var thisInvoice = $scope.DDD[those];
	for(var each in colorscheme){
		var thisColor = colorscheme[each];
		if(thisInvoice.GP>thisColor.low&&thisInvoice.GP<=thisColor.high){
			var r = thisColor.r+(thisColor.rx*(thisInvoice.GP-thisColor.low));
			var g = thisColor.g+(thisColor.gx*(thisInvoice.GP-thisColor.low));
			var b = thisColor.b+(thisColor.bx*(thisInvoice.GP-thisColor.low));
			thisInvoice.COLOR="rgb("+Math.round(r)+","+Math.round(g)+","+Math.round(b)+")";
		
		}
	}
}
}



				$scope.onload();	
						
console.log($scope.DDD);

	
	

	
	

   
    	
	
}