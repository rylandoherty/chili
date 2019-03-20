

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('OpErrorCtrl', OpErrorCtrl);

// Inject my dependencies
OpErrorCtrl.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function OpErrorCtrl($routeParams, $scope, $window ) {
	//Html scope variables
	$scope.thisGuy = $window.user;
	//Load stuff settings;
	//Load real Stuff;
	var district = "District Sanat";
	
	$scope.storeslist = loadProxy.loadDistrict("dd");
	$scope.theseusers = loadProxy.getEmployeeList();
	$scope.opTypes = loadProxy.loadOpTypes();
	$scope.opLogs = loadProxy.loadOpLog();
	
	 var datetoday = new Date();
	   var thisMonthFormatted = datetoday.getMonth()+1;
		  if(thisMonthFormatted.length==1){
			  thisMonthFormatted = "0"+thisMonthFormatted;
		  }
		  var thisDateFormatted = datetoday.getDate();
		  console.log(thisDateFormatted.toString().length);
		  
		  if(thisDateFormatted.toString().length==1){
			  thisDateFormatted = "0"+thisDateFormatted;
		  }
		 
	var today = new Date();
	 var setDateForUpload = document.getElementById("datepickerstart");
	
	 
	$scope.vari = {};
	$scope.vari.selectedDateForNew = thisMonthFormatted+"/"+thisDateFormatted+"/"+datetoday.getFullYear();
	$scope.vari.selectedStoreForNew = "";
	$scope.vari.selectedUserForNew = "";
    $scope.vari.selectedTypeForNew =  "";
	$scope.vari.commentForNew = "";
	
	
	$scope.addOpLog = function(){
		$scope.vari.selectedDateForNew = document.getElementById("datepickerstart").value;
	 console.log(setDateForUpload);
		loadProxy.newOpError($scope.vari);
		$scope.opLogs = loadProxy.loadOpLog();
		$scope.vari = {};
	$scope.vari.selectedDateForNew = thisMonthFormatted+"/"+thisDateFormatted+"/"+datetoday.getFullYear();
	}
	$scope.changeStatus = function(type,id){
		if(type=='delete'){
			loadProxy.deleteOp(id);
		}
		if(type=='hide'){
			loadProxy.hideOp(id);
		}
			$scope.opLogs = loadProxy.loadOpLog();
	}
	
}