

// Here we get the module we created in file one
angular.module('ngViewExample')




// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('MonthlyGoalCtrl', MonthlyGoalCtrl);

// Inject my dependencies
MonthlyGoalCtrl.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function MonthlyGoalCtrl($routeParams, $scope ) {
	//Html scope variables
	//$scope.thisGuy = $window.user;
	//Load stuff settings;
	//Load real Stuff;
	//get all user stuff at once. 
	//load all the user stuff for atleast that one person
	//user.gethours array
	
	
	//interface relationships
	$scope.relationobject = {};
	$scope.storething=null;
	$scope.datething=null;
	$scope.selectedusertoadd=null;
	
	$scope.goalemployeecontainer= {};
	
	//load commands
	$scope.formulalist = groupProxy.loadFormula();
	$scope.theseusers = loadProxy.getEmployeeList();
	$scope.storelist = loadProxy.loadDistrict();
	
	
	
	
	$scope.monthlygoalobject = {};
	$scope.districtgoals = [];
	$scope.selectdate = 0;
	$scope.searchuserstring = "";
	$scope.goalcolumnchart = {};
	
	$scope.listofgoaltypes = {};
	$scope.hidenewgoal = false;
	$scope.userfilter = [];
	
	$scope.addLetter = function(searchfor){
		$scope.userfilter = [];
		
		searchfor = searchfor.toLowerCase();
		var thisperson = "";
		for(thosepeople in $scope.theseusers )
		{
			thisperson = $scope.theseusers[thosepeople].userid.toLowerCase();
			if(thisperson.search(searchfor)>=0){
			$scope.userfilter.push($scope.theseusers[thosepeople].userid);
		}
			
		}
		
		}
		
	$scope.addUserToGoal = function(){
		var objecttosend = {};
		
		console.log($scope.relationobject.position);
		
		if($scope.relationobject.position == "Sales"){
			
			objecttosend.username = $scope.relationobject.selectedusertoadd;
			objecttosend.storename = $scope.storething;
			objecttosend.year = $scope.monthlygoalobject.year ;
			objecttosend.month = $scope.monthlygoalobject.month;
			console.log(objecttosend);
			monthlygoalProxy.newgoalforemployee(objecttosend);
			$scope.reload();
		}
				
		 }
		
		$scope.updatepercentageeffort = function(thing,percent){
			monthlygoalProxy.setgoalpercenteffort(thing, percent);
		}
		
		
		
		
	
	$scope.newm = function(){
		
		monthlygoalProxy.newmonthlygoal($scope.monthlygoalobject);
		$scope.reload();
		}
	$scope.selectTarget = function(store, date){
		$scope.storething=store;
		$scope.datething=date;
		$scope.monthlygoalobject.storename = store;
		$scope.monthlygoalobject.year=date.substring(0,4);
		$scope.monthlygoalobject.month=date.substring(4,6);
	}
	$scope.deletegoal = function(theid){
		console.log(theid);
		monthlygoalProxy.deletemonthlygoal(theid);
		$scope.reload();
	}
	$scope.addSums = function(theResult){
		var sums = 0;
		for(theItems in theResult){
			sums= parseInt(theResult[theItems].percentageeffort) + sums;
		}
		return sums;
	}
	$scope.reload = function(){
		$scope.listofgoaltypes = {};
		$scope.goalcolumnchart= {};
		$scope.districtgoals = monthlygoalProxy.loadmonthlygoals();
		$scope.goalemployeecontainer = monthlygoalProxy.loademployeegoals();
		
		
		var yeardate = "";
		var store = "";
		var goaltype = "";
		var values = 0;
		var thisid = 0;
		console.log($scope.districtgoals);
		for(eachgoal in $scope.districtgoals){
			thisid = $scope.districtgoals[eachgoal].id;
			console.log(thisid);
			yeardate = $scope.districtgoals[eachgoal].year+""+$scope.districtgoals[eachgoal].month;
			store = $scope.districtgoals[eachgoal].storename;
			goaltype = $scope.districtgoals[eachgoal].formulaname;
			values = $scope.districtgoals[eachgoal].quantity;
		if(typeof $scope.goalcolumnchart[yeardate] == 'undefined'){
			$scope.listofgoaltypes[yeardate] = {};
			$scope.goalcolumnchart[yeardate] ={};
		}
		if(typeof $scope.listofgoaltypes[yeardate][goaltype] == 'undefined'){
			$scope.listofgoaltypes[yeardate][goaltype] = goaltype;
		}
		if(typeof $scope.goalcolumnchart[yeardate][store] == 'undefined'){
			$scope.goalcolumnchart[yeardate][store] ={};
			$scope.goalcolumnchart[yeardate][store].storename = store;
		}
		
		if(typeof $scope.goalcolumnchart[yeardate][store][goaltype] == 'undefined'){
		$scope.goalcolumnchart[yeardate][store][goaltype] = {};
		$scope.goalcolumnchart[yeardate][store][goaltype].value=values;
		$scope.goalcolumnchart[yeardate][store][goaltype].id=thisid;
		}
		
	}
	console.log($scope.listofgoaltypes);
	console.log($scope.goalcolumnchart);
	}
	
	
	$scope.reload();
	$scope.addLetter($scope.searchuserstring);
}