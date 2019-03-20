
// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('doorcountCtrl', doorcountCtrl);

// Inject my dependencies
doorcountCtrl.$inject = ['$routeParams','$scope','$window',];

// Now create our controller function with all necessary logic

function doorcountCtrl($routeParams, $scope, $window) {
	
  
  
	console.log("CTRL LOADEd");
	 
	
	$(function(){
      $("#includedContent").load("../includes/dateRange.html");
    });
    

    $scope.selectedMonth = 0;
    $scope.selectedDay = 0 ;
    $scope.selectedYear = 0 ;
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
					
					
					
					
	
	
	
	var dataJSON;

	
	
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
	$scope.selectDateWithCalander = function (date){
		console.log($scope.month);
		var thisDate = document.getElementById("datepickerstart").value;
		console.log(thisDate);
		document.getElementById("datepickerstart").value = $scope.month+"/"+date.Date+"/2017"
		thisDate = document.getElementById("datepickerstart").value;
		console.log(thisDate);
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
            "animation":"0",
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
		
	}
		
	

	$scope.emp = "";
	$scope.showAllEmployees = false;
	
	
	
	$scope.setDoorCountType = function(doorcountID){
		doorclickProxy.setDoorCountType();
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
		console.log(thisDate);
		console.log(thisStringDate);
		for(var hour in hoursToView){
		var tempContainer = {};
		tempContainer['label'] = hoursToView[hour];
		console.log(thisStringDate);
		
		
		
		console.log($scope.container.stores[$scope.storeSelection].datecontainer);
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
	$scope.refreshCount = function(){
		var DateToSend = new Date(parseInt($scope.year),parseInt($scope.month)-1,1);
		$scope.initSetMonth(DateToSend);
	}
		$scope.initSetMonth = function(ymd){
    				
					$scope.newDateString = $scope.createMonthString(ymd);
					$scope.doorCounts = doorclickProxy.getDoorCount($scope.newDateString);
					console.log($scope.doorCounts);
					
					createDateStoreContainerAndEmployeeContainer();
					
					addDoorCountToContainer();
					
					//should be reset on month change
					
					$scope.createCalendar();
					
					//$scope.container = container;
    }
		$scope.initSetMonth($scope.defaultDateToday);
		
	 		
}
	 		
	 		
	 		
	 		
	 		