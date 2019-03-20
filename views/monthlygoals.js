

// Here we get the module we created in file one
angular.module('ngViewExample')




// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('MonthlyGoalCtrl', MonthlyGoalCtrl);

// Inject my dependencies
MonthlyGoalCtrl.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function MonthlyGoalCtrl($routeParams, $scope,$window ) {
	//Html scope variables

	
	      var times = {};
	
	var today = new Date();
	times.today = new Date();
	times.year = today.getFullYear();
	times.month = today.getMonth()+1;
	
    
    times.endofmonth = new Date(times.year,(times.month),0);
    times.startoffirstweek = new Date(times.year,times.month-1,1);
    times.start = times.startoffirstweek.getFullYear()+""+("0"+(times.startoffirstweek.getMonth()+1)).slice(-2)+("0"+times.startoffirstweek.getDate()).slice(-2);
    times.end = times.endofmonth.getFullYear()+("0"+(times.endofmonth.getMonth()+1)).slice(-2)+("0"+times.endofmonth.getDate()).slice(-2);
	$scope.selectdate = $window.datesStore.year+""+"11";
	
	$scope.rightcontainer ={};
	      var time1 = times.start;
	      var time2 = times.end;
	
	var firstDay = new Date();
	var lastDay = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0);
	var date1 = firstDay.getDate();
	var date2 = lastDay.getDate();
	$scope.trend = date2/date1;
	
	
	
    
    //month to date
    
	
	
	$scope.thisGuy = $window.user;
	console.log($scope.thisGuy);
	//Load stuff settings;
	//Load real Stuff;
	//get all user stuff at once. 
	//load all the user stuff for atleast that one person
	//user.gethours array
	
	$scope.district= "District Sanat";
	//interface relationships
	$scope.relationobject = {};
	$scope.storething=null;
	$scope.datething=null;
	$scope.selectedusertoadd=null;
	
	$scope.goalemployeecontainer= {};
	
	//load commands
	
	$scope.theseusers = loadProxy.getEmployeeList();
	$scope.storelist = loadProxy.loadDistrict();
	console.log($scope.theseusers);
	
	
	
	$scope.monthlygoalobject = {};
	$scope.districtgoals = [];
	
	
	console.log($window.datesStore);
	$scope.monthlygoalobject.year=times.year;
	$scope.monthlygoalobject.month=times.month;
	$scope.selectstorename = "";
	$scope.searchuserstring = "";
	$scope.goalcolumnchart = {};
	
	$scope.listofgoaltypes = {};
	$scope.hidenewgoal = false;
	$scope.userfilter = [];
	
	
	
	//MONTHLY SALES
	
	$scope.mtdz = {};
	$scope.mtdz.datetype = 'MTD';
	$scope.container = {};
	
	
	$scope.groupz = groupProxy.loadFormula();
	$scope.colorFormula = {};
	$scope.groups = [];
	for(var thoseform in $scope.groupz){
		$scope.groups[$scope.groupz[thoseform]['orderlocation']-1]=$scope.groupz[thoseform];
		if(typeof $scope.groupz[thoseform].color != 'undefined'){
		$scope.colorFormula[$scope.groupz[thoseform].name] = $scope.groupz[thoseform].color;
		}
	}
	console.log($scope.groups);
	console.log($scope.groupz);
    $scope.categories = groupProxy.getGroups();
	
	$scope.mtdz.formulatoview = {};
	$scope.mtdz.sortType = '';
	
	
	$scope.simpleContainer = [];
	
	

	
	$scope.setForcastForStore = function (goalz){
		monthlygoalProxy.setStoreForcast(goalz);
	}
	$scope.setFinalizeForStore = function (goalz){
		monthlygoalProxy.setStoreFinal(goalz);
	}
	
	
	$scope.updateEmp = function(empobj,list){
		var thisEmp = $scope.empbystorewithstats[empobj];
		thisEmp.username = empobj;
		var thisEmpstat = thisEmp[list];
		var newempobj = {};
		
		thisEmp.formula = list;
		thisEmp.average = thisEmpstat.average;
		thisEmp.forcast = thisEmpstat.forcast;
		thisEmp.finalized = thisEmpstat.finalized;
		thisEmp.beatbest = thisEmpstat.beatbest;
		console.log(thisEmp);
		var dog = monthlygoalProxy.updateEmpGoal(thisEmp);
		console.log(dog);
		
			
	}
	$scope.addLetter = function(searchfor){
		$scope.userfilter = [];
		
		searchfor = searchfor.toLowerCase();
		var thisperson = "";
		for(thosepeople in $scope.theseusers )
		{
			thisperson = $scope.theseusers[thosepeople].name.toLowerCase();
			if(thisperson.search(searchfor)>=0){
			$scope.userfilter.push($scope.theseusers[thosepeople].name);
		}
			
		}
		
		}
		
	$scope.addUserToGoal = function(){
		var objecttosend = {};
		
		//console.log($scope.relationobject.position);
		
		
			
			objecttosend.username = $scope.relationobject.selectedusertoadd;
			objecttosend.storename = $scope.selectstorename;
			objecttosend.year = times.year;
			objecttosend.month = times.month;
			console.log(objecttosend);
			monthlygoalProxy.newgoalforemployee(objecttosend);
			$scope.reload();
		
				
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
		$scope.monthlygoalobject.year=times.year;
		$scope.monthlygoalobject.month=times.month;
	}
	$scope.deletegoal = function(theid){
		//console.log(theid);
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
		
		
		
		
		$scope.empbystorewithstats ={};
		console.log($scope.districtgoals);
		console.log($scope.goalemployeecontainer);
		for(var itch in $scope.goalemployeecontainer){
			var thisEmpGoal = $scope.goalemployeecontainer[itch];
			if(times.year!=thisEmpGoal.year||times.month!=thisEmpGoal.month){
				
			}
			else {
			if(typeof $scope.empbystorewithstats[thisEmpGoal.username] == 'undefined'){
				$scope.empbystorewithstats[thisEmpGoal.username]={};
				$scope.empbystorewithstats[thisEmpGoal.username]['stats']={};
				for(var tem in $scope.simpleContainer){
					var eachperson = $scope.simpleContainer[tem];
					//console.log(eachperson);
					if(eachperson.name.toUpperCase()==thisEmpGoal.username.toUpperCase()){
						for(var those in eachperson){
							if(those!='name')
							
							$scope.empbystorewithstats[thisEmpGoal.username]['stats'][those] = eachperson[those];
						}
					}
			
				}
				$scope.empbystorewithstats[thisEmpGoal.username]['username']=thisEmpGoal.username;
				$scope.empbystorewithstats[thisEmpGoal.username]['storename']=thisEmpGoal.storename;
				$scope.empbystorewithstats[thisEmpGoal.username]['month']=thisEmpGoal.month
				$scope.empbystorewithstats[thisEmpGoal.username]['year']=thisEmpGoal.year;
				}
				if (typeof $scope.empbystorewithstats[thisEmpGoal.username][thisEmpGoal.formula] == 'undefined'){
					$scope.empbystorewithstats[thisEmpGoal.username][thisEmpGoal.formula]={};
				
				
				if(typeof thisEmpGoal.beatbest != "undefined"){
					thisEmpGoal.beatbest = thisEmpGoal.beatbest.toString();
					$scope.empbystorewithstats[thisEmpGoal.username][thisEmpGoal.formula]['beatbest']
				= thisEmpGoal.beatbest.replace("," , "").replace("$", "");
				}
				
				if(typeof thisEmpGoal.finalized != "undefined"){
					thisEmpGoal.finalized = thisEmpGoal.finalized;
					$scope.empbystorewithstats[thisEmpGoal.username][thisEmpGoal.formula]['finalized']
				= thisEmpGoal.finalized;
				}
				
				if(typeof thisEmpGoal.forcast != "undefined"){
					thisEmpGoal.forcast = thisEmpGoal.forcast.toString();
					$scope.empbystorewithstats[thisEmpGoal.username][thisEmpGoal.formula]['forcast']
				= thisEmpGoal.forcast.replace("," , "").replace("$", "");
				}
				if(typeof thisEmpGoal.average != "undefined"){
					thisEmpGoal.average = thisEmpGoal.average.toString();
					$scope.empbystorewithstats[thisEmpGoal.username][thisEmpGoal.formula]['average']
				= thisEmpGoal.average.replace("," , "").replace("$", "");
				}
				
				
				$scope.empbystorewithstats[thisEmpGoal.username][thisEmpGoal.formula]['lastyear']
				= thisEmpGoal.lastyear ;
			}
			}
			
		}
		console.log($scope.empbystorewithstats);
		
		var yeardate = "";
		var store = "";
		var goaltype = "";
		var values = 0;
		var averages = 0;
		var beatbests = 0;
		var forcasts = 0;
		var lastyears = 0;
		var thisid = 0;
		var finals = 0;
		//console.log($scope.districtgoals);
		for(eachgoal in $scope.districtgoals){
			thisid = $scope.districtgoals[eachgoal].id;
			//console.log(thisid);
			yeardate = $scope.districtgoals[eachgoal].year+""+$scope.districtgoals[eachgoal].month;
			store = $scope.districtgoals[eachgoal].storename;
			goaltype = $scope.districtgoals[eachgoal].formulaname;
			values = $scope.districtgoals[eachgoal].quantity;
			averages = $scope.districtgoals[eachgoal].average;
			beatbests = $scope.districtgoals[eachgoal].beatbest;
			lastyears = $scope.districtgoals[eachgoal].lastyear;
			forcasts = $scope.districtgoals[eachgoal].forcast;
			finals = $scope.districtgoals[eachgoal].finalized;
			//console.log($scope.districtgoals[eachgoal]);
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
		$scope.goalcolumnchart[yeardate][store][goaltype].average=averages;
		$scope.goalcolumnchart[yeardate][store][goaltype].beatbest=beatbests;
		$scope.goalcolumnchart[yeardate][store][goaltype].lastyear=lastyears;
		$scope.goalcolumnchart[yeardate][store][goaltype].forcast=forcasts;
		$scope.goalcolumnchart[yeardate][store][goaltype].finalized=finals;
		$scope.goalcolumnchart[yeardate][store][goaltype].id=thisid;
		}
		
	}
	//console.log($scope.listofgoaltypes);
	console.log($scope.goalcolumnchart);
	}
	$scope.dateChanges = function(){
		$scope.monthlygoalobject.year=times.year;
		$scope.monthlygoalobject.month=times.month;
		
		times.year = $scope.selectdate.substring(0,4);
		times.month = $scope.selectdate.substring(4,6);
		times.endofmonth = new Date(times.year,(times.month),0);
   		times.startoffirstweek = new Date(times.year,times.month-1,1);
    	times.start = times.startoffirstweek.getFullYear()+""+("0"+(times.startoffirstweek.getMonth()+1)).slice(-2)+("0"+times.startoffirstweek.getDate()).slice(-2);
    	times.end = times.endofmonth.getFullYear()+("0"+(times.endofmonth.getMonth()+1)).slice(-2)+("0"+times.endofmonth.getDate()).slice(-2);
		time1 = times.start;
		time2 = times.end;
    	$scope.rightcontainer['MTD'] = saveContainer.actualcontainermaker(time1, time2);
    	$scope.reload();
    	console.log(times);
		console.log($scope.rightcontainer);
		console.log($scope.empbystorewithstats);
		
	}
	$scope.dateChanges();
	
	$scope.reload();
	$scope.addLetter($scope.searchuserstring);
}