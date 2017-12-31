

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('StoreGoalCtrl', StoreGoalCtrl);

// Inject my dependencies
StoreGoalCtrl.$inject = ['$routeParams','$scope','$window','userlist'];

// Now create our controller function with all necessary logic

function StoreGoalCtrl($routeParams, $scope, $window, userlist) {
	//Html scope variables
	$scope.thisGuy = $window.user;
	//Load stuff settings;
	//Load real Stuff;
	var district = $window.district;
 	var today = new Date();
 	$scope.currentWeekCode = 0;
 	$scope.monthCode = today.getMonth()+1;
 	$scope.yearCode = today.getFullYear();
 	$scope.monthString = ("0"+$scope.monthCode).slice(-2);
 	$scope.monthView = false;
 	$scope.currentWeek = 0;
 	$scope.endofmonth = 28;
 	$scope.viewType = {};
 	$scope.viewType.set = "remaining";
 	$scope.weekList = [];
 	$scope.pageVariables= {};
 	$scope.pageVariables.goal = "GrossProfit"
 	$scope.entireGoalList = monthlygoalProxy.loadmonthlygoals();
 	$scope.listofgoaltypes = {};
		$scope.goalcolumnchart= {};
		$scope.districtgoals = {};
		$scope.goalemployeecontainer = {};
 	$scope.selectdate=$scope.yearCode+$scope.monthString;
 	$scope.freshSalesContainer = {};
 	
 	var red = 255; //i.e. FF
var green = 0;
var stepSize = 20//how many colors do you want?
$scope.colorScope = [];
while(green < 255)
{
    green += stepSize;
    if(green > 255) { green = 255; }
    var colorObject= {};
    colorObject['red']= red;
    colorObject['green']= green;
    $scope.colorScope.push(colorObject); //assume output is function that takes RGB
}
while(red > 0)
{
    red -= stepSize;
    if(red < 0) { red = 0; }
    var colorObject= {};
    colorObject['red']= red;
    colorObject['green']= green;
    $scope.colorScope.push(colorObject); //assume output is function that takes RGB
}
 	
 	console.log($scope.colorScope);
 	
 	
 	$scope.changeMonth = function(change){
	 	$scope.monthCode=parseInt($scope.monthCode)+parseInt(change);
	 	//console.log($scope.monthCode);
	 	if($scope.monthCode>12){
		 	$scope.monthCode=1;
		 	$scope.yearCode=$scope.yearCode+1;
	 	}
	 	else if($scope.monthCode==0){
	 		$scope.monthCode=12;
		 	$scope.yearCode=$scope.yearCode-1;
	 	}
	 	$scope.monthString =("0"+$scope.monthCode).slice(-2);
	 	$scope.weekList = $scope.setWeekArray($scope.monthCode);
	 	
	 	$scope.addSalesContainerForWeek();
	 	$scope.generateGoalContainer();
	 	$scope.currentWeek = 0;
	 	$scope.selectdate=$scope.yearCode+$scope.monthString;
	}
 	$scope.changeWeek = function(change){
 		//TROUBLE
 		if((($scope.currentWeek>0&&change==-1)||($scope.currentWeek+1<$scope.weekList.length&&change==1))&&($scope.currentWeek+change)<=$scope.currentWeekCode){
 			$scope.currentWeek += change;	
 		}
 		
 	}
 	$scope.getGoals
 	$scope.generateGoalContainer = function (){
 		
 	
 			$scope.listofgoaltypes = {};
 			$scope.goalcolumnchart= {};
 			$scope.districtgoals = monthlygoalProxy.loadmonthlygoals();
 			$scope.goalemployeecontainer = monthlygoalProxy.loademployeegoals();
 			
 			
 			
 			var yeardate = "";
 			var store = "";
 			var goaltype = "";
 			var values = 0;
 			var thisid = 0;
 			
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
 			console.log($scope.goalemployeecontainer);
 		console.log($scope.listofgoaltypes);
 		console.log($scope.goalcolumnchart);
 		console.log($scope.districtgoals);
 	}
 	
 	$scope.setWeekArray = function(realmonth){
 		$scope.currentWeekCode = 0;
	 	var month = realmonth -1;
	 	var year = $scope.yearCode;
	 	//Set beginning of month
	 	var targetDate = new Date(year,(month),1);
	 	var endoffirstweek = new Date( targetDate);
    	
    	var endofmonth = new Date(year,(month+1),1,-1);
    	$scope.endofmonth = endofmonth.getDate();
    	endoffirstweek.setDate(6-targetDate.getDay()+1);
    	var currentEndOfWeek = endoffirstweek;
    	var currentStartOfWeek = targetDate;
    	
    	//initialize week objects
    	var weekArray = [];
    	var weekObject = {};
    	weekObject = {};
    	weekObject.year = $scope.yearCode;
    	weekObject.month = $scope.monthCode;
    	weekObject.startofweekdate = currentStartOfWeek.getDate();
    	weekObject.endofweekdate = currentEndOfWeek.getDate();
    	var dayCountForLoop = currentEndOfWeek.getDate();
    	weekObject.lengthofweek = currentEndOfWeek.getDate()-(currentStartOfWeek.getDate()-1);
    	if(today.getDate()<=currentEndOfWeek.getDate()&&today.getDate()>=currentStartOfWeek.getDate()){
    		$scope.currentWeekCode = 0;
    	}
    	weekArray.push(weekObject);
    	dayCountForLoop = dayCountForLoop + 7;
    	
    	do{
    		
    		currentStartOfWeek.setDate(currentEndOfWeek.getDate()+1);
    		currentEndOfWeek.setDate(currentEndOfWeek.getDate()+7);
    		if(today.getDate()<=currentEndOfWeek.getDate()&&today.getDate()>=currentStartOfWeek.getDate()){
        		$scope.currentWeekCode = weekArray.length;
        	}
    		dayCountForLoop = dayCountForLoop + 7;
    		weekObject = {};
    		weekObject.year = $scope.yearCode;
        	weekObject.month = $scope.monthCode;
        	weekObject.startofweekdate = currentStartOfWeek.getDate();
        	weekObject.endofweekdate = currentEndOfWeek.getDate();
        	weekObject.lengthofweek = currentEndOfWeek.getDate()-(currentStartOfWeek.getDate()-1);
        	
        	weekArray.push(weekObject);
    		//console.log(currentEndOfWeek.getDate());
    		//console.log(endofmonth.getDate());
    	}
        	while(dayCountForLoop<endofmonth.getDate());
    	
    	
    	currentStartOfWeek.setDate(currentEndOfWeek.getDate()+1);
    	if(today.getDate()<=currentEndOfWeek.getDate()&&today.getDate()>=currentStartOfWeek.getDate()){
    		$scope.currentWeekCode = weekArray.length;
    	}
    	currentEndOfWeek.setDate(e);
		weekObject = {};
		weekObject.year = $scope.yearCode;
    	weekObject.month = $scope.monthCode;
    	weekObject.startofweekdate = currentStartOfWeek.getDate();
    	weekObject.endofweekdate = endofmonth.getDate();
    	weekObject.lengthofweek = endofmonth.getDate()-(currentStartOfWeek.getDate()-1);
    	
    	weekArray.push(weekObject);
    	//console.log($scope.currentWeekCode);
    	$scope.currentWeek = $scope.currentWeekCode;
		return weekArray;
    	
    	
 	}
    	$scope.addSalesContainerForWeek = function(){
    		$scope.freshSalesContainer = {};
    		$scope.freshSalesContainer.total = {};
    		var goalname = "";
    		for (emps in $scope.goalemployeecontainer){
    			thisgoals = $scope.goalemployeecontainer[emps];
    			//console.log(thisgoals);
    			if(typeof $scope.freshSalesContainer.total[thisgoals.storename] == 'undefined'){
    				for(weeks in $scope.weekList){
    					if(typeof $scope.freshSalesContainer[weeks] == 'undefined')
    					$scope.freshSalesContainer[weeks] = {};
    					$scope.freshSalesContainer[weeks][thisgoals.storename]  =  {};
    				}
    				$scope.freshSalesContainer.total[thisgoals.storename]  =  {};
    			}
    			if(typeof $scope.freshSalesContainer.total[thisgoals.storename][thisgoals.username] == 'undefined'){
    				$scope.freshSalesContainer.total[thisgoals.storename][thisgoals.username]  =  {};
    				for(weeks in $scope.weekList){
    					$scope.freshSalesContainer[weeks][thisgoals.storename][thisgoals.username]  =  {};
    				}
    			}
    			for(goalstype in $scope.listofgoaltypes[$scope.selectdate]){
    				goalname = $scope.listofgoaltypes[$scope.selectdate][goalstype];
    				if(typeof $scope.freshSalesContainer.total[thisgoals.storename][thisgoals.username][goalname] == 'undefined'){	
    					$scope.freshSalesContainer.total[thisgoals.storename][thisgoals.username][goalname] = 0;
    					for(weeks in $scope.weekList){
    						$scope.freshSalesContainer[weeks][thisgoals.storename][thisgoals.username][goalname] = {};
        					$scope.freshSalesContainer[weeks][thisgoals.storename][thisgoals.username][goalname].thisweek  =  0;
        					$scope.freshSalesContainer[weeks][thisgoals.storename][thisgoals.username][goalname].accumulated  =  0;
        				}
    				}
    				
    			}
    			
    		}
    		console.log($scope.freshSalesContainer);
    		for(weeks in $scope.weekList){
    			var start = new Date($scope.weekList[weeks].year, $scope.weekList[weeks].month-1, $scope.weekList[weeks].startofweekdate);
    			var end = new Date($scope.weekList[weeks].year, $scope.weekList[weeks].month-1, $scope.weekList[weeks].endofweekdate);
    			$scope.weekList[weeks].sales = getSalesContainer('calendar',start,end);
    			
    		    for(stores in $scope.weekList[weeks].sales[district]['stores']){
    		    	var thisStore = $scope.weekList[weeks].sales[district]['stores'][stores];
    		    	for(emps in thisStore['employees']){
    		    		var thisEmp = thisStore['employees'][emps];
    		    	  
    		    		for(goalstype in $scope.listofgoaltypes[$scope.selectdate]){
    		    				goalname = $scope.listofgoaltypes[$scope.selectdate][goalstype];
    		    				//console.log(thisEmp.name);
    		    				//console.log($scope.freshSalesContainer[weeks][thisStore.name]);
    		    				if(typeof $scope.freshSalesContainer[weeks][thisStore.name][thisEmp.name] !== 'undefined'){
    		    				
    		    				if(typeof $scope.weekList[weeks]['sales'][district]['stores'][thisStore.name]['employees'][thisEmp.name] !== 'undefined'){
    		    				$scope.freshSalesContainer[weeks][thisStore.name][thisEmp.name][goalname].thisweek =
    		    				$scope.weekList[weeks]['sales'][district]['stores'][thisStore.name]['employees'][thisEmp.name]['sales']['formulagroup'][goalname];
    		    				
    		    				$scope.freshSalesContainer.total[thisStore.name][thisEmp.name][goalname] =
    		    				$scope.freshSalesContainer.total[thisStore.name][thisEmp.name][goalname] +
    		    				$scope.weekList[weeks]['sales'][district]['stores'][thisStore.name]['employees'][thisEmp.name]['sales']['formulagroup'][goalname];
    		    				}
    		    				}
    		    				for(var i = 0; i<=weeks;i++){
    		    					if(typeof $scope.weekList[i]['sales'][district]['stores'][thisStore.name]['employees'][thisEmp.name] !== 'undefined'){
    		    						if(typeof $scope.freshSalesContainer[i][thisStore.name][thisEmp.name] !== 'undefined'){
    		    						//console.log($scope.freshSalesContainer[weeks][thisStore.name][thisEmp.name]);
    		    						//console.log($scope.weekList[i]['sales'][district]['stores'][thisStore.name]['employees'][thisEmp.name]);
    		    						//console.log(weeks);
    		    						//console.log(i);
    		    					//console.log($scope.weekList[i]['sales'][district]['stores'][thisStore.name]['employees'][thisEmp.name]);
	    		    				$scope.freshSalesContainer[weeks][thisStore.name][thisEmp.name][goalname].accumulated = 
	    		    				$scope.weekList[i]['sales'][district]['stores'][thisStore.name]['employees'][thisEmp.name]['sales']['formulagroup'][goalname] 
	    		    				+ $scope.freshSalesContainer[weeks][thisStore.name][thisEmp.name][goalname].accumulated;
    		    					}}
    		    				}
    		    		}
    		    	}
    		    	}
    		    }
    		
    	}
    		
    		$scope.getRedColors = function (var1, var2){
    			var colorChoice = $scope.colorScope.length*(var1/var2);
    			colorChoice = colorChoice.toFixed(0);
    			
    			if(colorChoice>=$scope.colorScope.length){
    				colorChoice=$scope.colorScope.length-1;
    				}
    			return $scope.colorScope[colorChoice].red;
    		}
    		
    		$scope.getGreenColors = function (var1, var2){
    			var colorChoice = $scope.colorScope.length*(var1/var2);
    			colorChoice = colorChoice.toFixed(0);
    			if(colorChoice>=$scope.colorScope.length){colorChoice=$scope.colorScope.length-1;}
    			return $scope.colorScope[colorChoice].green;
    		}
    		
    			
    			
    		
    	
    	
    	//var start = startoffirstweek.getFullYear()+""+("0"+(startoffirstweek.getMonth()+1)).slice(-2)+("0"+startoffirstweek.getDate()).slice(-2);
    	
    	//var end = endofmonth.getFullYear()+("0"+(endofmonth.getMonth()+1)).slice(-2)+("0"+endofmonth.getDate()).slice(-2);
    	//console.log(start+" "+end);
    	/*
    	
    	var currentStartOfWeek = startoffirstweek;
    	var currentEndOfWeek = new Date();
    	currentEndOfWeek.setDate(targetDate.getDate()+(6-targetDate.getDay()));
    	//console.log(start);
    	//console.log(end);
    	
    	var list =f.gethoursworked(start,end);
    	//console.log(list);
    	//console.log(endofmonth);
    	var totalDraw = {};
    	while(currentEndOfWeek<=endofmonth){
    		var hourTable = {};
    		//console.log(list);
    		for(var entries in list){
    		var datestring = (list[entries].date)+"";	
    		//console.log(currentStartOfWeek);
    	
    		
    		var thisDate = new Date(datestring.substring(0,4),datestring.substring(4,6)-1,datestring.substring(6,8));
    		
    		if(thisDate<=currentEndOfWeek&&thisDate>=currentStartOfWeek){
    			//console.log(thisDate);	
    		if(typeof hourTable[list[entries].user] == 'undefined'){
    		hourTable[list[entries].user]= {};
    		hourTable[list[entries].user].hoursworked = 0;
    		hourTable[list[entries].user].drawforweek = 0;
    		}
    		hourTable[list[entries].user].hoursworked =
    		 hourTable[list[entries].user].hoursworked + list[entries].hoursclocked ;
    		 if(hourTable[list[entries].user].hoursworked<40){
    		 hourTable[list[entries].user].drawforweek =
    		 hourTable[list[entries].user].drawforweek + (list[entries].hoursclocked*12) ;
    		 }
    		 else{
    		 	var dif = hourTable[list[entries].user].hoursworked - list[entries].hoursclocked;
    		 	if(dif < 40){
    		 		hourTable[list[entries].user].drawforweek =
    		 hourTable[list[entries].user].drawforweek + ((40-dif)*12) ;
    		 	}
    		 	hourTable[list[entries].user].drawforweek =
    		 hourTable[list[entries].user].drawforweek + ((list[entries].hoursclocked - (40 - dif ))*18) ;
    		 }
    		}
    		}
    		currentStartOfWeek.setDate(currentStartOfWeek.getDate()+7);
    		currentEndOfWeek.setDate(currentEndOfWeek.getDate()+7);
    		//console.log(hourTable);
    		weekArray.push(hourTable);
 	*/
 	
 	$scope.weekList= $scope.setWeekArray($scope.monthCode);
 	$scope.generateGoalContainer();
 	$scope.addSalesContainerForWeek();
 	
	
}