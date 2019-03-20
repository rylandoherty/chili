


// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('LogRecordCtrl', LogRecordCtrl);

// Inject my dependencies
LogRecordCtrl.$inject = ['$routeParams','$scope','$window','userlist'];

// Now create our controller function with all necessary logic

function LogRecordCtrl($routeParams, $scope, $window, userlist) {
	
	$scope.thisGuy = $window.user;
	console.log($scope.thisGuy);
	var district = "District Sanat";
	$scope.settings = {};
	
	$scope.loadlogrecord = function (){
		var x = loadProxy.loadAccessCode($scope.settings.recordone);
		$scope.settings.thisCode = x.applicationnumber;
		$scope.settings.thisCodeTwo = encode(x.pin, "1123");
		$scope.settings.thisCodeTwo = encode($scope.settings.thisCodeTwo, x.key);
		
		$scope.settings.thisUser = x.username;
		
			
		}
	
	
	$scope.saveThis = function (){
		var today = new Date();
		
		var hour = today.getHours();
  		
	 	var min  = today.getMinutes();
    	var year = today.getFullYear();
    	var month = today.getMonth();
    	var day = today.getDate();
    	var wholeDate = year+""+month+""+day;
		var key = hour+min;
		var e = encode($scope.settings.recordtwo , key);
		var f = encode( e , "1123");
		console.log(e );
		console.log(f );
		$scope.settings.status = loadProxy.saveAccessCode($scope.settings.recordone, f , $scope.thisGuy.userid , key, wholeDate);
		
		$scope.settings.lastupload = $scope.settings.recordone;
		$scope.settings.encrypt = e;
		$scope.settings.recordone = "";
		$scope.settings.recordtwo = "";
	}
	
	

	var encode = function (s, k) {
		var enc = "";
		var str = "";
		// make sure that input is string
		str = s.toString();
		for (var i = 0; i < s.length; i++) {
			// create block
			var a = s.charCodeAt(i);
			// bitwise XOR
			var b = a ^ k;
			enc = enc + String.fromCharCode(b);
		}
		return enc;
	}



   
    	
	
}


