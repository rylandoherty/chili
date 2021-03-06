

// Here we get the module we created in file one
angular.module('ngViewExample')




// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('MonthlyGoalCtrl2', MonthlyGoalCtrl2);

// Inject my dependencies
MonthlyGoalCtrl2.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function MonthlyGoalCtrl2($routeParams, $scope,$window ) {
	//Html scope variables
	
	
	
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
	 	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$scope.opTypes = loadProxy.loadOpTypes();
	$scope.opLogs = loadProxy.loadOpLog();
	$scope.hideOps = false;
	//$scope.sales11= {};
	//$scope.sales11.dateSystem = {};
 	// $scope.sales11.toWrite={};
	 // $scope.sales11.dateSystem['MTD'] = {};
		//$scope.sales11.toWrite['MTD'] = {};
	     
	    // $scope.sales11.toWrite['MTD'] = saveContainer.loadcontainer("MTD",0);
	     // $scope.sales11.dateSystem['MTD'] = finalizecontainer( $scope.sales11.toWrite['MTD']);
	
	$scope.isthismonth = true;
	
	
	      var times = {};
	
	var today = new Date();
	times.today = new Date();
	times.year = today.getFullYear();
	times.month = today.getMonth()+1;
	times.thisyear = today.getFullYear();
	times.thismonth = ("0"+(today.getMonth()+1)).slice(-2);
    $scope.selectdate = times.thisyear+""+times.thismonth;
    times.endofmonth = new Date(times.year,(times.month),0);
    times.startoffirstweek = new Date(times.year,times.month-1,1);
    times.start = times.startoffirstweek.getFullYear()+""+("0"+(times.startoffirstweek.getMonth()+1)).slice(-2)+("0"+times.startoffirstweek.getDate()).slice(-2);
    times.end = times.endofmonth.getFullYear()+("0"+(times.endofmonth.getMonth()+1)).slice(-2)+("0"+times.endofmonth.getDate()).slice(-2);
	
	//console.log($scope.selectdate);
	$scope.rightcontainer ={};
	$scope.rightcontainer['MTD'] ={};
	var time1 = times.start;
	var time2 = times.end;
	
	
	$scope.employeeList = {};
	$scope.theseusers = loadProxy.getEmployeeList();
	for(those in $scope.theseusers){
		$scope.employeeList[$scope.theseusers[those].userid] = $scope.theseusers[those];
	}
	//$scope.employeeListDD = $scope.employeeList;
	//console.log($scope.employeeList);
	var firstDay = new Date();
	var lastDay = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0);
	
	$scope.date1 = firstDay.getDate();
	$scope.hourfraction = (20- firstDay.getHours())/20;
	if($scope.hourfraction<0)$scope.hourfraction=0;
	$scope.date2 = lastDay.getDate();
	$scope.trend =( $scope.date2/($scope.date1-$scope.hourfraction)).toFixed(2);
	
	$scope.thisGuy = $window.user;
	$scope.selectedEmployee = {};
	
	$scope.selectedEmployee['name'] = $scope.thisGuy.userid;
	$scope.selectedEmployee['data'] = $scope.employeeList[$scope.selectedEmployee.name];

	$scope.graphData = {};
	console.log($scope.selectedEmployee);
	
	$scope.bonusRate = 0;
	$scope.bonusRateTrend = 0;
	$scope.oppBonusRate = 1;
	$scope.hasHum = false;
	
	
	$scope.updateGuy = function (){
		$scope.oppBonusRate = 1;
		/*for(those in $scope.employeeListDD){
			if($scope.employeeListDD[those].name == $scope.selectedEmployee.name){
				
			}
		}*/
		
		
		$scope.selectedEmployee['data'] = $scope.employeeList[$scope.selectedEmployee.name];
		
		
		var disqualified = false;
		var trenddisqualified = false;
		
		
		$scope.bonusRate = 0;
		$scope.bonusRateTrend = 0;
		$scope.hasHum = false;
		console.log($scope.rightcontainer);
		
		
		if(0 < $scope.rightcontainer.employeesbyname[$scope.selectedEmployee.name].cats['Hum']){
			$scope.hasHum = true;
		}
		for(each in $scope.opLogs){
			
			if($scope.opLogs[each].employeename == $scope.selectedEmployee['name']&& ""+$scope.opLogs[each].eventdate.substring(6,10)+$scope.opLogs[each].eventdate.substring(0,2) ==$scope.selectdate){
				$scope.oppBonusRate=$scope.oppBonusRate-$scope.opTypes[$scope.opLogs[each].problemtype].percentage;
				
			}
			
		}
		
		$scope.opBonuspx = (($scope.oppBonusRate * 200).toFixed(0))+"px";
		
		
		
		for(each in $scope.listofgoaltypes[$scope.selectdate]){
			$scope.graphData[each] = $scope.rightcontainer['MTD'].employeesbyname[$scope.selectedEmployee.name].forms[each];
			$scope.graphData[each].current = $scope.rightcontainer['MTD'].employeesbyname[$scope.selectedEmployee.name].forms[each].value;
			$scope.graphData[each].currentpx = ((($scope.rightcontainer['MTD'].employeesbyname[$scope.selectedEmployee.name].forms[each].value / $scope.graphData[each].forcast) * 200).toFixed(0))+"px";
			
			$scope.graphData[each].trend = $scope.graphData[each].current * $scope.trend;
			$scope.graphData[each].progress = $scope.graphData[each].current / $scope.graphData[each].forcast ;
			$scope.graphData[each].progresstrend = $scope.graphData[each].trend / $scope.graphData[each].forcast ;
			
			
			
			$scope.graphData[each].rate = $scope.groupsbyname[each].payrate;
			console.log($scope.groupsbyname[each].payrate);
			console.log($scope.graphData[each].rate);
			if(typeof $scope.groupsbyname[each].payrate != 'undefined'){
				
			
				 if(($scope.graphData[each].progress < .60)){
					disqualified = true;
					
	
					
				}
				if($scope.graphData[each].progress < .80 && !$scope.hasHum ){
					
					disqualified = true;	
					}
				else{
					
					}	
					
				
				
				
				if($scope.graphData[each].progresstrend < .60) {
					trenddisqualified = true;
					
					
				}
				else if($scope.graphData[each].progresstrend < .80 && !$scope.hasHum ){
					trenddisqualified = true;
					
					}
					
					else{
					
					}
					
				
				$scope.graphData[each].ratecurrent = $scope.graphData[each].progress * ($scope.graphData[each].rate);
				
				if($scope.graphData[each].progress>=1){
					$scope.graphData[each].ratecurrent = $scope.graphData[each].rate;	
					
				}
				
				$scope.graphData[each].ratetrend = $scope.graphData[each].progresstrend * ($scope.graphData[each].rate);
				
			
				if($scope.graphData[each].progresstrend>=1){
					$scope.graphData[each].ratetrend = $scope.graphData[each].rate;	
					
				}
				
				$scope.bonusRate = $scope.bonusRate + $scope.graphData[each].ratecurrent;
				$scope.bonusRateTrend = $scope.bonusRateTrend + $scope.graphData[each].ratetrend;
				
				}
				}
		
		if(disqualified){
			$scope.bonusRate = 0;
		}
		if(trenddisqualified){
			$scope.bonusRateTrend = 0;
		}
		
		$scope.bonusRate = $scope.oppBonusRate +$scope.bonusRate;
		$scope.bonusRateTrend = $scope.oppBonusRate +$scope.bonusRateTrend
		
		
	}
	
	$scope.updateGuy();
	
	
	
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
	
	
	$scope.storelist = loadProxy.loadDistrict();
	
	
	
	$scope.monthlygoalobject = {};
	$scope.districtgoals = [];
	
	
	
	$scope.monthlygoalobject.year=$window.datesStore.year;
	$scope.monthlygoalobject.month="09";
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
	$scope.groupsbyname = {};
	for(var thoseform in $scope.groupz){
		$scope.groupsbyname[$scope.groupz[thoseform].name] =$scope.groupz[thoseform];
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
	$scope.updateEmployeeArray = function (){
		$scope.simpleContainer = [];
		//console.log($scope.container['userstore']);
		for(var them in $scope.container['userstore']){
			$scope.simpleContainer.push({name:$scope.container['userstore'][them].name});
			for(var each in $scope.groups){
				$scope.simpleContainer[$scope.simpleContainer.length-1][$scope.groups[each]['name']] = $scope.container['userstore'][$scope.container['userstore'][them].name]['sales']['formulagroup'][$scope.groups[each]['name']];
			}
	}
	console.log($scope.simpleContainer);
	}
	$scope.setDate = function (){
		$scope.container = $scope.sales11.dateSystem[$scope.mtdz['datetype']];
		console.log($scope.container);
		$scope.updateEmployeeArray();
	}
	$scope.setDate();
	
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
			thisperson = $scope.theseusers[thosepeople].userid.toLowerCase();
			if(thisperson.search(searchfor)>=0){
			$scope.userfilter.push($scope.theseusers[thosepeople].userid);
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
		$scope.monthlygoalobject.year=date.substring(0,4);
		$scope.monthlygoalobject.month=date.substring(4,6);
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
				//	console.log(eachperson);
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
	
	}

	
	$scope.reload();
	$scope.dateChanges = function(){
		times.year = $scope.selectdate.substring(0,4);
		times.month = $scope.selectdate.substring(4,6);
		
		
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
	 	
	 	
	 	
	 	$scope.drawlist =  f.getUserListHoursPerWeek($scope.district, times.year, times.month);
	 	console.log($scope.drawlist);
		
		
			$scope.monthlygoalobject.year=times.year;
		$scope.monthlygoalobject.month=times.month;
		times.endofmonth = new Date(times.year,(times.month),0);
   		times.startoffirstweek = new Date(times.year,times.month-1,1);
    	times.start = times.startoffirstweek.getFullYear()+""+("0"+(times.startoffirstweek.getMonth()+1)).slice(-2)+("0"+times.startoffirstweek.getDate()).slice(-2);
    	times.end = times.endofmonth.getFullYear()+("0"+(times.endofmonth.getMonth()+1)).slice(-2)+("0"+times.endofmonth.getDate()).slice(-2);
		time1 = times.start;
		time2 = times.end;
    	$scope.rightcontainer['MTD'] = saveContainer.actualcontainermaker(time1, time2);
    	$scope.reload();
    	$scope.employeeListDD={};
		for(those in $scope.rightcontainer['MTD'].employeesbyname){
			var thisone = $scope.rightcontainer['MTD'].employeesbyname[those].name;
			$scope.employeeListDD[$scope.rightcontainer['MTD'].employeesbyname[thisone].name]={};
		$scope.employeeListDD[$scope.rightcontainer['MTD'].employeesbyname[thisone].name].userid = $scope.rightcontainer['MTD'].employeesbyname[thisone].name;
		}
		console.log($scope.employeeListDD);
    	for(those in $scope.employeeListDD){
			if($scope.employeeListDD[those].userid == $scope.selectedEmployee.name){
				$scope.updateGuy();
			}
		}
    	
		
		
		console.log($scope.employeeList);
		
	}
		
	$scope.dateChanges();
	
	$scope.addLetter($scope.searchuserstring);
	if($scope.thisGuy.accesslevel > 1){
	$scope.updateGuy();
	}
}