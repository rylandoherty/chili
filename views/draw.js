

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('DrawCtrl', DrawCtrl);

// Inject my dependencies
DrawCtrl.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function DrawCtrl($routeParams, $scope, $window) {
	//Html scope variables
	$scope.thisGuy = $window.user;
	//Load stuff settings;
	//Load real Stuff;
	$scope.settings={};
	$scope.settings.show=false;
	var district = "District Sanat";
	$scope.days= {};
	$scope.settings.addPerson;
	$scope.fulluserlist = f.getUserList();
	$scope.userlist = f.getUserListByDistrict(district);
	//console.log(f.getclockinclockout("20171001","20171130","District Sanat"));
	//load all the goals and all the users hours
	$scope.year = $window.datesStore.year;
	$scope.month = $window.datesStore.month;
	$scope.monthString=("0"+$scope.month).slice(-2);
	$scope.district = district;
	$scope.drawlist =  f.getUserListHoursPerWeek($scope.district, $scope.year, $scope.month);
	
	$scope.setDistrictForUser = function(){
		console.log($scope.settings);
		f.setUserDistrict($scope.settings.addPerson,$scope.district)
		$scope.userlist = f.getUserListByDistrict(district);
		$scope.drawlist =  f.getUserListHoursPerWeek($scope.district, $scope.year, $scope.month);
	}
	$scope.setWage = function(person,wage){
		f.setWageForUser(person,wage);
	}
	$scope.removeUser = function(user){
		
		f.setUserHidden(user)
		$scope.userlist = f.getUserListByDistrict(district);
		
	}
	
	$scope.addSums = function(person){
		var sums = 0;
		for(weeks in $scope.drawlist.BYUSER){
			//console.log($scope.drawlist.BYUSER[weeks]['user']);
			//console.log(person);
			sums= parseInt($scope.drawlist.BYUSER[weeks]['user'][person].HOURS)-parseInt($scope.drawlist.BYUSER[weeks]['user'][person].HOURSNOTFORDRAW) + sums;
		}
		return sums;
	}
	$scope.addDraw = function(person){
		var sums = 0;
		for(weeks in $scope.drawlist.BYUSER){
			sums= parseInt($scope.drawlist.BYUSER[weeks]['user'][person]['draw']) + sums;
		}
		return sums;
	}
	$scope.changeMonth = function(change){
	 	$scope.month=parseInt($scope.month)+parseInt(change);
	 	//console.log($scope.monthCode);
	 	if($scope.month>12){
		 	$scope.month=1;
		 	$scope.year=$scope.year+1;
	 	}
	 	else if($scope.month==0){
	 		$scope.month=12;
		 	$scope.year=$scope.year-1;
	 	}
	 	$scope.monthString =("0"+$scope.month).slice(-2);
	 	
	 	
	 	
	 	$scope.drawlist =  f.getUserListHoursPerWeek($scope.district, $scope.year, $scope.month);
	 	console.log($scope.drawlist);
	}
	//$scope.cat = {};
	
	//var x1 = document.getElementsByClassName('progress-bar');
	
	
	
	
	

   
    	
	
}