
// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('DoorCountCtrl', DoorCountCtrl);

// Inject my dependencies
DoorCountCtrl.$inject = ['$routeParams','$scope','$window',];

// Now create our controller function with all necessary logic

function DoorCountCtrl($routeParams, $scope, $window) {
	
	go();
	$window.addEventListener('resize', go2);

function go2(){
	 var viewportScale = screen.width / window.innerWidth;
  document.querySelector('.width').innerText = $window.innerWidth;
  document.querySelector('.height').innerText = $window.innerHeight;
 document.querySelector('.other').innerText = viewportScale;
}
function go(){
  document.querySelector('.width').innerText = 555;
  document.querySelector('.height').innerText = 666;
  viewportScale = screen.width / window.innerWidth;
}
  	
    var sizeW;
	$scope.thisFunction = function() {
		console.log("Something1");
		console.log($window);
	sizeW = $window.innerWidth;
   
   document.getElementById("myBtn").style.width = sizeW/4 + "px";
   
	}
	function myfunctionTwo()  {
		console.log("Something2");
		sizeW = $window.innerWidth;
   		document.getElementById("myBtn").style.width = sizeW/4 + "px";
   	}
	 
	
	$(function(){
      $("#includedContent").load("../includes/dateRange.html");
    });
    
    
	$scope.doorCounts = [];
	$scope.test = {};
	$scope.userThing =  $window.userStuff;
	$scope.storeArray =   $window.storeList;
	$scope.employeeList = loadProxy.getEmployeeList();
		$scope.newDateString;
	$scope.storeSelection;
	$scope.dateSelection;
	$scope.debugEm = false;
	var container = {};
	$scope.container ={};
	$scope.doorCountContainer = [];
	$scope.doorCounts;
	$scope.categories;
	
	//$scope.groups = groupProxy.loadFormula();
	$scope.month;
	var sales;
	$scope.totaldaysinmonth;
	
	var everyDayOfMonth;
	var today;
	var thatdate;
	$scope.defaultDateToday = new Date();
	
	var monthNames = ["January", "February", "March", "April", "May", "June",
 					 "July", "August", "September", "October", "November", "December"];
 	var hoursToView = ["09","10","11","12","13","14","15","16","17","18","19","20"];
 	
 	$scope.firstDay;
 	$scope.day;
 	$scope.year;
 	$scope.month;
 	$scope.monthName;
 	$scope.dayOfWeek;
 	$scope.formContainer=[];
 	$scope.groups = groupProxy.loadFormula();
 	
 	
 	
 	$scope.convertCSVintoString = function(group,type, target, date){
 		
 		
 		//console.log(group);
 		//console.log($scope.groups[group]);
 			var incomingstring = $scope.groups[group].formula;
 			var stringFormula = "";
			if(typeof incomingstring !== 'undefined' ){
				
				var openclosecount = 0;
				for(var a=0;a<incomingstring.length;a++){
					
					if(incomingstring.charAt(a) == ','){
						var thisWord = incomingstring.substring(0,a);
						incomingstring = incomingstring.substring(a+1,incomingstring.length);
						a=0;
						var nextWord = "";
						for(var b = 0; b<incomingstring.length;b++){
							if(incomingstring.charAt(b) == ','){
								nextWord = incomingstring.substring(0,b);
								break;
							}
						}
						//console.log(thisWord);
						
						if(thisWord == '('){
							openclosecount += 1;
							stringFormula = stringFormula + " "+thisWord+" ";
						}
						else if(thisWord == ')'){
							if(openclosecount>0){
							openclosecount -= 1;
							stringFormula = stringFormula + " "+thisWord+" ";
							}
						}
						else if(thisWord == 'QTY'|| thisWord == 'GP'){
							
							if( 'undefined' == typeof date){
							//	console.log(date);
							stringFormula = stringFormula+" $scope.container."+type+"['"+target+"']['stats']['"+nextWord+"']."+thisWord+" ";
							//console.log("making it for month");
							}
							
							else if( 'undefined' !== typeof date){
								stringFormula = stringFormula+" $scope.container."+type+"['"+target+"']['datecontainer']['"+date +"']['stats']['"+nextWord+"']."+thisWord+" ";	
							}
							
							
						}
						else if(thisWord == "+"|| thisWord == '-'||thisWord == '*'||thisWord == '/'){
							
							stringFormula = stringFormula+ " " + thisWord.toString() + " ";
							
						}
						
						else {
							//$scope.categories
						}
						
						
						
						
					}
					
					
			
		}
		
	}
	//console.log(stringFormula);
	return stringFormula;
 	}
 	
 	
 	
 	//$scope.convertCSVintoString();
	$scope.formulaDecode = function(incomingstring){
		var stringFormula = "";
		var might =[];
		
		
		
			
			if(incomingstring.charAt(a) == ','){
				var thisWord = $scope.formulaList[commands];
				var nextWord = $scope.formulaList[commands+1];
				var openclosecount = 0;
				
				if(thisWord == '('){
					openclosecount += 1;
					stringFormula = stringFormula + " "+thisWord+" ";
				}
				else if(thisWord == ')'){
					openclosecount -= 1;
					stringFormula = stringFormula + " "+thisWord+" ";
				}
				else if(thisWord == 'QTY', thisWord == 'GP'){
					
					a+=2;
					stringFormula = stringFormula+" "+nextWord+"."+thisWord+" ";
				}
				else if(thisWord == '+', thisWord == '-',thisWord == '*',thisWord == '/'){
					stringFormula = stringFormula+ " " + thisWord + " ";
				}
				
				else {
					//$scope.categories
				}
				
				
				might.push(incomingstring.substring(0,a)) ;
				incomingstring = incomingstring.substring(a+1,incomingstring.length);
				a=0;
				
			}
		}
		
		
		
	
	
	$scope.formulaList;
	$scope.categories = groupProxy.getGroups();
	
	$scope.postSalesOp = function(){
		
		console.log($scope.groups);
		for(var emps in $scope.container.employees){
			$scope.container.employees[emps]['stats']['formulagroup'] = {};
			var date;
			for(var formula in $scope.groups){
				
				$scope.container.employees[emps]['stats']['formulagroup'][$scope.groups[formula].name] = eval($scope.convertCSVintoString(formula, 'employees', $scope.container.employees[emps].userid , date))  ;
			}
			for(var dates in $scope.container.employees[emps]['datecontainer']){
				$scope.container.employees[emps]['datecontainer'][dates]['stats']['formulagroup']={};
				for(var formula in $scope.groups){
					
					
					
					$scope.container.employees[emps]['datecontainer'][dates]['stats']['formulagroup'][$scope.groups[formula].name] = eval($scope.convertCSVintoString(formula, 'employees', $scope.container.employees[emps].userid , dates))  ;
				}
			}
			
		}
		
		for(var store in $scope.container.stores){
			$scope.container.stores[store]['stats']['formulagroup'] = {};
			var date;
			for(var formula in $scope.groups){
				console.log($scope.container.stores[store].name);
				$scope.container.stores[store]['stats']['formulagroup'][$scope.groups[formula].name] = eval($scope.convertCSVintoString(formula, 'stores', $scope.container.stores[store].name , date))  ;
			}
			for(var dates in $scope.container.stores[store]['datecontainer']){
				$scope.container.stores[store]['datecontainer'][dates]['stats']['formulagroup']={};
				for(var formula in $scope.groups){
					
					
					
					$scope.container.stores[store]['datecontainer'][dates]['stats']['formulagroup'][$scope.groups[formula].name] = eval($scope.convertCSVintoString(formula, 'stores', $scope.container.stores[store].name  , dates))  ;
				}
			}
			
		}
		
		
		console.log($scope.container);
	
	}
	

    
    $scope.createMonthString = function( dsday){
    	console.log(dsday);
    				$scope.month = dsday.getMonth()+1;
					$scope.monthName = monthNames[$scope.month-1];
					
					$scope.day = dsday.getDate();
					$scope.year = dsday.getFullYear();
					
					$scope.firstDay = new Date($scope.year,$scope.month-1,1);
					$scope.dayofWeek = $scope.firstDay.getDay();
					
					if($scope.month.toString().length==1){
						$scope.month = "0"+""+$scope.month;
					}
					if($scope.day.toString().length==1){
						$scope.day = "0"+""+$scope.day;
					}
					$scope.totaldaysinmonth = new Date($scope.year,$scope.month,0).getDate();
					console.log($scope.totaldaysinmonth); 
					return $scope.year+$scope.month;
    }
    changeDateUpdate =  function(){
    	
    }
    
    
    addSalesToContainer = function(){
    	for(var sale in sales){
						var thisStore = sales[sale].storeid;
						var thisEmployee = sales[sale].EMPLOYEE;
						//console.log(sales[sale]);
						var thisDate = ((sales[sale].DATE).toString()).substring(0,8);
						if('undefined' !== typeof $scope.container.stores[thisStore].datecontainer[thisDate]){
							
						//console.log(thisDate);
						//invoice variables
						
						
						for(var details in sales[sale].saledetails){
							//sale variables
							var thisDetail = sales[sale].saledetails[details]; 
							//console.log($scope.container.employees[thisDate]);
							
							
								
							
							$scope.container.stores[thisStore]['stats']['GP'] = $scope.container.stores[thisStore]['stats']['GP'] + thisDetail.GROSSPROFIT;
							$scope.container.employees[thisEmployee]['stats']['GP'] = $scope.container.employees[thisEmployee]['stats']['GP'] + thisDetail.GROSSPROFIT;  
							$scope.container.employees[thisEmployee].datecontainer[thisDate]['stats']['GP'] = $scope.container.employees[thisEmployee].datecontainer[thisDate]['stats']['GP'] + thisDetail.GROSSPROFIT;  
							$scope.container.stores[thisStore].datecontainer[thisDate]['stats']['GP'] = $scope.container.stores[thisStore].datecontainer[thisDate]['stats']['GP'] + thisDetail.GROSSPROFIT;   
								for(var cats in $scope.categories){
								for(var items in $scope.categories[cats].items){
									if($scope.categories[cats].items[items].productSKU == thisDetail.PRODUCTSKU){
										$scope.container.employees[thisEmployee]['stats'][$scope.categories[cats].categoryid]['GP'] = $scope.container.employees[thisEmployee]['stats'][$scope.categories[cats].categoryid]['GP'] +thisDetail.GROSSPROFIT;
										$scope.container.employees[thisEmployee]['stats'][$scope.categories[cats].categoryid]['QTY'] = $scope.container.employees[thisEmployee]['stats'][$scope.categories[cats].categoryid]['QTY'] + 1;
										$scope.container.stores[thisStore]['stats'][$scope.categories[cats].categoryid]['GP'] = $scope.container.stores[thisStore]['stats'][$scope.categories[cats].categoryid]['GP'] +thisDetail.GROSSPROFIT;
										$scope.container.stores[thisStore]['stats'][$scope.categories[cats].categoryid]['QTY'] = $scope.container.stores[thisStore]['stats'][$scope.categories[cats].categoryid]['QTY'] + 1;
										$scope.container.employees[thisEmployee].datecontainer[thisDate]['stats'][$scope.categories[cats].categoryid]['GP'] = $scope.container.employees[thisEmployee].datecontainer[thisDate]['stats'][$scope.categories[cats].categoryid]['GP'] +thisDetail.GROSSPROFIT;
										$scope.container.employees[thisEmployee].datecontainer[thisDate]['stats'][$scope.categories[cats].categoryid]['QTY'] = $scope.container.employees[thisEmployee].datecontainer[thisDate]['stats'][$scope.categories[cats].categoryid]['QTY'] + 1;
										$scope.container.stores[thisStore].datecontainer[thisDate]['stats'][$scope.categories[cats].categoryid]['GP'] = $scope.container.stores[thisStore].datecontainer[thisDate]['stats'][$scope.categories[cats].categoryid]['GP'] +thisDetail.GROSSPROFIT;
										$scope.container.stores[thisStore].datecontainer[thisDate]['stats'][$scope.categories[cats].categoryid]['QTY'] = $scope.container.stores[thisStore].datecontainer[thisDate]['stats'][$scope.categories[cats].categoryid]['QTY'] + 1;
									}
									
								}
							}
							}
							if('HALIFIN2008'== sales[sale].salesid){
								console.log($scope.container.employees[thisEmployee].datecontainer[thisDate]['stats']['GP']);
							}
							//add details to container
							
						
						}
					}
    }
    $scope.workInGroupStats = function(){
    	for(var stores in $scope.container.stores){
    		var thisStore = $scope.container.stores[stores];
    		for(var salesDays in thisStore){
    			
    		}
    		
    	}
    	for(var empl in $scope.container.employees){
    		
    	}
    }
    createDateStoreContainerAndEmployeeContainer = function(){
    	$scope.container.employees = {};
    	$scope.container.stores = {};
    	for(var emps in $scope.employeeList ){
			var thisEmployee = $scope.employeeList[emps];
				$scope.container.employees[thisEmployee.userid] = {};
				$scope.container.employees[thisEmployee.userid] = thisEmployee;
				$scope.container.employees[thisEmployee.userid]['datecontainer'] ={};
				$scope.container.employees[thisEmployee.userid]['stats'] = {};
				$scope.container.employees[thisEmployee.userid]['stats']['GP'] = 0;
				for(var cats in $scope.categories){
						 	 $scope.container.employees[thisEmployee.userid]['stats'][$scope.categories[cats].categoryid] = {};
						 	 $scope.container.employees[thisEmployee.userid]['stats'][$scope.categories[cats].categoryid]['GP']= 0;
						 	 $scope.container.employees[thisEmployee.userid]['stats'][$scope.categories[cats].categoryid]['QTY']= 0;
					 	 
					 	}
				for(var i = 1;i<=$scope.totaldaysinmonth;i++){
						var dateString = "";
						
						if(i.toString().length == 1) {dateString = $scope.year+""+$scope.month+""+"0"+i;}	
						else {dateString = $scope.year+""+$scope.month+""+i;}
						dateString= dateString.toString();
						//console.log(dateString);
						$scope.container.employees[thisEmployee.userid].datecontainer[dateString] = {};
						$scope.container.employees[thisEmployee.userid].datecontainer[dateString]['stats'] = {};
						//console.log($scope.$scope.container[$scope.storeArray[stores].storeid]);troll
						//var thisDateslot = $scope.container[$scope.storeArray[stores].storeid].datecontainer[dateString];
						 $scope.container.employees[thisEmployee.userid].datecontainer[dateString]['stats']['GP'] = 0;
						 for(var cats in $scope.categories){
						 	 $scope.container.employees[thisEmployee.userid].datecontainer[dateString]['stats'][$scope.categories[cats].categoryid] = {};
						 	 $scope.container.employees[thisEmployee.userid].datecontainer[dateString]['stats'][$scope.categories[cats].categoryid]['GP']= 0;
						 	 $scope.container.employees[thisEmployee.userid].datecontainer[dateString]['stats'][$scope.categories[cats].categoryid]['QTY']= 0;
					 	 
					 	}
						
					//console.log($scope.$scope.container[$scope.storeArray[stores].storeid]);troll
					//var thisDateslot = $scope.container.employees[thisEmployee.userid][dateString];
					
					
					
						
				
			}
			
		}
    	
    	
    	for(var stores in $scope.storeArray ){
			var store = $scope.storeArray[stores].storeid;
			$scope.container.stores[store] = {};
			$scope.container.stores[store].name = $scope.storeArray[stores].storeid;
			$scope.container.stores[store]['stats'] = {};
			$scope.container.stores[store]['datecontainer'] = {};
			$scope.container.stores[store]['stats']['GP'] = 0;
			for(var cats in $scope.categories){
				 	 $scope.container.stores[$scope.storeArray[stores].storeid]['stats'][$scope.categories[cats].categoryid] = {};
				 	 $scope.container.stores[$scope.storeArray[stores].storeid]['stats'][$scope.categories[cats].categoryid]['GP']= 0;
				 	 $scope.container.stores[$scope.storeArray[stores].storeid]['stats'][$scope.categories[cats].categoryid]['QTY']= 0;
				 	 
				}
		
			for(var i = 1;i<=$scope.totaldaysinmonth;i++){
				var dateString = "";
				
				if(i.toString().length == 1) {dateString = $scope.year+""+$scope.month+""+"0"+i;}	
				else {dateString = $scope.year+""+$scope.month+""+i;}
				dateString= dateString.toString();
				//console.log(dateString);
				
				$scope.container.stores[$scope.storeArray[stores].storeid].datecontainer[dateString] = {};
				$scope.container.stores[$scope.storeArray[stores].storeid].datecontainer[dateString]['stats'] = {};
				$scope.container.stores[$scope.storeArray[stores].storeid].datecontainer[dateString].ClicksForDay = 0;
				//console.log($scope.$scope.container[$scope.storeArray[stores].storeid]);troll
				var thisDateslot = $scope.container.stores[$scope.storeArray[stores].storeid].datecontainer[dateString];
				 $scope.container.stores[$scope.storeArray[stores].storeid].datecontainer[dateString]['stats']['GP'] = 0;
				 for(var cats in $scope.categories){
				 	 $scope.container.stores[$scope.storeArray[stores].storeid].datecontainer[dateString]['stats'][$scope.categories[cats].categoryid] = {};
				 	 $scope.container.stores[$scope.storeArray[stores].storeid].datecontainer[dateString]['stats'][$scope.categories[cats].categoryid]['GP']= 0;
				 	 $scope.container.stores[$scope.storeArray[stores].storeid].datecontainer[dateString]['stats'][$scope.categories[cats].categoryid]['QTY']= 0;
				 	 
				 }
				 
				 
				
				
						for(var times in hoursToView){
							
							thisDateslot[hoursToView[times]] = 0;
							//console.log($scope.$scope.container[$scope.storeArray[stores].storeid]);
						}
			}
		
		
	}
    	console.log($scope.container);
    }
    
	addDoorCountToContainer =  function(){
		for (var clicks in $scope.doorCounts){
			//console.log($scope.doorCounts[clicks]);		
			var stringTime =$scope.doorCounts[clicks]['time'].toString();
			var thisStore =$scope.doorCounts[clicks]['location'];
			var YearDate = stringTime.substring(0,8);
			
			
			//console.log(YearDate);
			var timeClick = stringTime.substring(8,12);
			//$scope.doorCounts[clicks].time = stringTime.substring(8,12);
			var hourSubstring = stringTime.substring(8,10);
			//console.log($scope.container);
			//console.log(hourSubstring);
			
			for(var hour in hoursToView){
				if(hoursToView[hour] == hourSubstring){
				//	console.log(YearDate);
			$scope.container.stores[thisStore].datecontainer[YearDate]['ClicksForDay'] = $scope.container.stores[thisStore].datecontainer[YearDate]['ClicksForDay'] + 1;  
			$scope.container.stores[thisStore].datecontainer[YearDate][hourSubstring] = $scope.container.stores[thisStore].datecontainer[YearDate][hourSubstring] +1; 
				}
			}
			
		}
	}
		 
	
	
	$scope.createCalendar = function(){
		everyDayOfMonth = 1;
		$scope.listOfWeeks = [];
			//First Week
			$scope.listOfWeeks.push([]);
			var dateToWrite = 0;
			for(var a = 0; a<7 ;a++){
				if(a<$scope.dayofWeek){
					$scope.listOfWeeks[0].push({});
				}
				else if (a == $scope.dayofWeek){
					dateToWrite = "0"+everyDayOfMonth;
					$scope.listOfWeeks[0].push({"Date":dateToWrite});
					everyDayOfMonth++;
				}
				else{
					if(a.toString().length == 1)
						{ dateToWrite = "0"+everyDayOfMonth;}
					$scope.listOfWeeks[0].push({"Date":dateToWrite});
					everyDayOfMonth++;
				}
					
			}
			while(everyDayOfMonth<$scope.totaldaysinmonth){
				$scope.listOfWeeks.push([]);
				for(var b = 0;b<7;b++){
					if(everyDayOfMonth>$scope.totaldaysinmonth){}
					else{
						if(everyDayOfMonth.toString().length == 1) dateToWrite = "0"+everyDayOfMonth;
						else dateToWrite = everyDayOfMonth;
					$scope.listOfWeeks[$scope.listOfWeeks.length-1].push({ "Date":dateToWrite});
					everyDayOfMonth++;
					}
				}
				
				
			}
			everyDayOfMonth = 1;
		}				
					
					//Getting Month
					/*var date = new Date();
					var month = date.getMonth()+1;
					$scope.month = monthNames[month-1];
					
					var day = date.getDate();
					var year = date.getFullYear();
					console.log(month.toString().length);
					var firstDay = new Date(year,month-1,1);
					var dayofWeek = firstDay.getDay();
					
					if(month.toString().length==1){
						month = "0"+""+month;
					}
					if(day.toString().length==1){
						day = "0"+""+day;
					}
					
					var newDateString = year+month;
					//console.log(month);
					var monthFixForJavascript = "05";
					var dumbDateString = year+monthFixForJavascript;
					//console.log(dumbDateString);
					//console.log(newDateString);
					$scope.yearmonth = newDateString;   
					//should be reset on month change
					$scope.doorCounts = doorcountProxy.getDoorCount(newDateString);
					var sales = loadProxy.getSales(newDateString);
					console.log(sales);
					$scope.categories = groupProxy.getGroups();
					
					
					
					
					var totaldaysinmonth = new Date(year,month+1,0).getDate(); 
					var everyDayOfMonth = 1;
					*/
					
					
	
	
	
	var dataJSON;
	//var datepickz = document.getElementById("datepickerstart");
	//console.log(datepickz);
	//datepickz.value = date;
	
	
	
	
	//build container
	
	//employee list of container
	
	
	
	
	/*
	
	for(var stores in $scope.storeArray ){
		var store = $scope.storeArray[stores].storeid;
		container[store] = {};
		
		
		for(var i = 1;i<=totaldaysinmonth;i++){
			var dateString = "";
			
			if(i.toString().length == 1) {dateString = year+""+month+""+"0"+i;}	
			else {dateString = year+""+month+""+i;}
			dateString= dateString.toString();
			//console.log(dateString);
			
			container[$scope.storeArray[stores].storeid].datecontainer[dateString] = {};
			container[$scope.storeArray[stores].storeid].datecontainer[dateString]['stats'] = {};
			container[$scope.storeArray[stores].storeid].datecontainer[dateString].ClicksForDay = 0;
			//console.log($scope.container[$scope.storeArray[stores].storeid]);troll
			var thisDateslot = container[$scope.storeArray[stores].storeid].datecontainer[dateString];
			 container[$scope.storeArray[stores].storeid].datecontainer[dateString]['stats']['tempo'] = 0;
			 for(var cats in $scope.categories){
			 	 container[$scope.storeArray[stores].storeid].datecontainer[dateString]['stats'][$scope.categories[cats].categoryid] = {};
			 	 container[$scope.storeArray[stores].storeid].datecontainer[dateString]['stats'][$scope.categories[cats].categoryid]['GP']= 0;
			 	 container[$scope.storeArray[stores].storeid].datecontainer[dateString]['stats'][$scope.categories[cats].categoryid]['QTY']= 0;
			 	 
			 }
			 
			 
			
			
					for(var times in hoursToView){
						
						thisDateslot[hoursToView[times]] = 0;
						//console.log($scope.container[$scope.storeArray[stores].storeid]);
					}
		}
		
		
	}*/
	console.log($scope.container);
	
	
	
	//setclicks for container
	
	
		
					
					console.log($scope.listOfWeeks);
	//$scope.container = container;
	//console.log($scope.container);
	
	//$scope.hoursToView = ["09","10","11","12","13","14","15","16","17","18","19","20"];
	
						
	
	$scope.dataForHourlyDoorCountGraph = {};
	$scope.onStoreChange = function(store){
		
		console.log(store);
		$scope.storeSelection = store;
		dataJSON = {
        "type": "column2d",
        "renderAt": "chartContainer",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource":  {
          "chart": {
            "caption": "Traffic For Store",
            "subCaption": $scope.storeSelection ,
            "xAxisName": "Time of Day",
            "yAxisName": "Customer Count",
            "theme": "fint"
         }
          
      }

  }; 
  $scope.createDataContainer();
		
		FusionCharts.ready(function(){
    		var revenueChart = new FusionCharts(dataJSON);
			revenueChart.render();
			})
		
	}
	$scope.readSalesData = function(salesData){
		
		

		
	}
	onDateChange = function(){
		var thisDate = document.getElementById("datepickerstart").value;
		var thisStringDate = thisDate.substring(6,12)+thisDate.substring(0,2)+thisDate.substring(3,5);
		$scope.dateSelection = thisStringDate;
		getDoorCountList();
		
	}
	getDoorCountList = function(){ 
		
		var thisDate = document.getElementById("datepickerstart").value;
		var thisStringDate = thisDate.substring(6,12)+thisDate.substring(0,2)+thisDate.substring(3,5);
		$scope.dateSelection = thisStringDate;
		
		if($scope.storeSelection != null){
			  dataJSON = {
        "type": "column2d",
        "renderAt": "chartContainer",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource":  {
          "chart": {
            "caption": "Traffic For Store",
            "subCaption": $scope.storeSelection ,
            "xAxisName": "Time of Day",
            "yAxisName": "Customer Count",
            "theme": "fint"
         }
          
      }

  }; 
  $scope.createDataContainer();
		$scope.$apply();
		FusionCharts.ready(function(){
    		var revenueChart = new FusionCharts(dataJSON);
			revenueChart.render();
			})
		}
		$scope.$apply();
	}
		
	

	$scope.emp = "";
	$scope.showAllEmployees = false;
	
	
	
	$scope.setDoorCountType = function(doorcountID){
		doorcountProxy.setDoorCountType();
	}
	$scope.switchDebuggingIndividualClicks = function(){
		if($scope.debugEm){
			$scope.debugEm = false;
		}
		else
		$scope.debugEm = true;
	}
	$scope.splitDoorCountsByHour= function(hour){
		var countForHour = 0;
		//$scope[$scope.storeSelection][hourSubstring];
		
		for(var clicks in $scope.doorCounts){
			
			if($scope.doorCounts[clicks].time.toString().substring(0,2)==hour.toString()){
				
				countForHour++;
			}
		}
		
		return countForHour;
		
	}
	$scope.createDataContainer = function(){
		var doorCountTransferContainer = [];
		
		console.log($scope.container);
		console.log($scope.storeSelection);
		var thisDate = document.getElementById("datepickerstart").value;
		var thisStringDate = thisDate.substring(6,12)+thisDate.substring(0,2)+thisDate.substring(3,5);
		
		for(var hour in hoursToView){
		var tempContainer = {};
		tempContainer['label'] = hoursToView[hour];
		//console.log($scope.storeSelection);
		//console.log($scope.container[$scope.storeSelection]);
		tempContainer['value'] = $scope.container.stores[$scope.storeSelection].datecontainer[thisStringDate][hoursToView[hour]];
		
		doorCountTransferContainer.push(tempContainer);
		}
		console.log(doorCountTransferContainer);
		dataJSON.dataSource.data = doorCountTransferContainer;
		
	}
	$scope.changeMonth = function(){
		var DateToSend = new Date(parseInt($scope.year),parseInt($scope.month),1);
		$scope.initSetMonth(DateToSend);
	}
	$scope.changeMonthminus = function(){
		var DateToSend = new Date(parseInt($scope.year),parseInt($scope.month)-2,1);
		$scope.initSetMonth(DateToSend);
	}
		$scope.initSetMonth = function(ymd){
    				
					$scope.newDateString = $scope.createMonthString(ymd);
					$scope.doorCounts = doorcountProxy.getDoorCount($scope.newDateString);
					sales = loadProxy.getSales($scope.newDateString);
					
					createDateStoreContainerAndEmployeeContainer();
					addSalesToContainer();
					addDoorCountToContainer();
					
					//should be reset on month change
					
					$scope.createCalendar();
					
					//$scope.container = container;
    }
		$scope.initSetMonth($scope.defaultDateToday);
		$scope.workInGroupStats();
	 		$scope.postSalesOp();
}
	 		
	 		
	 		
	 		
	 		