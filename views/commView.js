

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('CommViewCtrl', CommViewCtrl);

// Inject my dependencies
CommViewCtrl.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function CommViewCtrl($routeParams, $scope, $window ) {
		$scope.thisGuy = $window.user;
		google.charts.load("current", {packages:["corechart"]});
	//Load stuff settings;
	$scope.Stuff = {};
	$scope.Stuff.newList = [];
	
	 var district = "District Sanat";
		$scope.district = district;
	var firstDay = new Date();
	$scope.thisMonth = firstDay.getMonth()+1;
	$scope.thisYear = firstDay.getFullYear()
	var lastDay = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0);
	var date1 = firstDay.getDate();
	var date2 = lastDay.getDate();
	$scope.trend = date2/date1;
	
	$scope.Stuff.selectedDate = (("0"+(firstDay.getMonth()+1)).slice(-2)+firstDay.getFullYear());
	  //console.log($scope.Stuff.selectedDate);
		
		
		$scope.commemps = f.getcommissionable($scope.Stuff.selectedDate);
		$scope.Stuff.userlist =  f.getUserListWithComms($scope.Stuff.selectedDate);	
	
	//console.log($scope.commemps);
	
	for(peepole in $scope.commemps){
		if($scope.commemps[peepole].USER.name == $scope.thisGuy.name){
			$scope.Stuff.addingEmployee = $scope.commemps[peepole].USER;
		}
	}
	$scope.Stuff.month = ("0"+(firstDay.getMonth()+1)).slice(-2);
	$scope.Stuff.year = firstDay.getFullYear();
	$scope.selectedUserID = $scope.thisGuy.userid;
	$scope.CommEmp = f.getUserCommData($scope.Stuff.month, $scope.Stuff.year, $scope.selectedUserID);
	//console.log($scope.CommEmp);
	
	$scope.drawlist =  f.getUserListHoursPerWeek($scope.district, $scope.Stuff.year, $scope.Stuff.month);
	
	
	
	var donutcontainer = document.getElementById("donutcontainer");
	$scope.updateDateValue = function(){
		
		$scope.Stuff.selectedDate = document.getElementById('startDate').value;
		 $scope.Stuff.year = $scope.Stuff.selectedDate.substring(2,6);
		$scope.Stuff.month = $scope.Stuff.selectedDate.substring(0,2);
		//console.log($scope.Stuff.selectedDate);
		//console.log( $scope.Stuff.year);
			//console.log($scope.Stuff.month);
			$scope.drawlist =  f.getUserListHoursPerWeek($scope.district, $scope.Stuff.year, $scope.Stuff.month);
		$scope.loadRightContainer($scope.Stuff.month, $scope.Stuff.year);
		
		$scope.reload();
		
		
		
	}
	$scope.loadRightContainer = function(mm, yy){
		var times={};
		times.year = yy;
		times.month = mm;
		times.endofmonth = new Date(times.year,(times.month),0);
   		times.startoffirstweek = new Date(times.year,times.month-1,1);
    	times.start = times.startoffirstweek.getFullYear()+""+("0"+(times.startoffirstweek.getMonth()+1)).slice(-2)+("0"+times.startoffirstweek.getDate()).slice(-2);
    	times.end = times.endofmonth.getFullYear()+("0"+(times.endofmonth.getMonth()+1)).slice(-2)+("0"+times.endofmonth.getDate()).slice(-2);
    	var time1 = times.start;
		var time2 = times.end;
    	$scope.rightcontainer = saveContainer.actualcontainermaker(time1, time2);
    	
	}
	$scope.changePerson = function(){
		//console.log($scope.Stuff.addingEmployee);
		if(typeof $scope.Stuff.addingEmployee != 'undefined'){
			//console.log($scope.Stuff.addingEmployee);
			
		$scope.CommEmp = f.getUserCommData($scope.Stuff.month,  $scope.Stuff.year, $scope.Stuff.addingEmployee.userid);
		
		$scope.loadEmployee();
		//console.log($scope.CommEmp);
		//$scope.createDonuts();
		}
	}
	$scope.loadRightContainer($scope.thisMonth,$scope.thisYear);
	$scope.reload = function(){
		
		$scope.userlist = f.getUserListWithComms($scope.Stuff.selectedDate);	
		//console.log($scope.userlist);
		$scope.commemps = f.getcommissionable($scope.Stuff.selectedDate);
		//console.log($scope.commemps);
		for(peepole in $scope.commemps){
			if($scope.commemps[peepole].USER.name == $scope.thisGuy.name){
				$scope.Stuff.addingEmployee = $scope.commemps[peepole].USER;
			}
		}
	//console.log($scope.Stuff);
	$scope.CommEmp = f.getUserCommData($scope.Stuff.month,  $scope.Stuff.year, $scope.Stuff.addingEmployee.userid);
	//console.log($scope.CommEmp);
	$scope.loadEmployee();
		//$scope.remainingcheckcommemps();
		//$scope.loadCommGroup();
		var myNode = document.getElementById("donutcontainer");
		while (myNode.firstChild) {
    		myNode.removeChild(myNode.firstChild);
		}
		
		
	}
	
	$scope.loadEmployee = function(){
		var myNode = document.getElementById("donutcontainer");
		while (myNode.firstChild) {
    		myNode.removeChild(myNode.firstChild);
		}
		
		for(those in $scope.CommEmp.COMMGROUPS){
			var thisCommGroup = $scope.CommEmp.COMMGROUPS[those];
			thisCommGroup.earned = thisCommGroup.basepaypercent;
			thisCommGroup.pay = 0;
			var thisTarget = thisCommGroup.measuretarget;
			
			if(thisTarget =='Self'){
				for(dem in thisCommGroup.FORMULAS){
					var thisData = thisCommGroup.FORMULAS[dem];
					//console.log($scope.rightcontainer);
					var thisProgress = 0;
					if(typeof $scope.rightcontainer.employeesbyname[$scope.Stuff.addingEmployee.name] == 'undefined'){
						thisProgress = 0;
					}
					else{
					 thisProgress = $scope.rightcontainer.employeesbyname[$scope.Stuff.addingEmployee.name][thisData.FORMULA.name];	
					}
					 
					var payrate = 0;
					for(peg in thisData.PEGS){
						var thisPeg = thisData.PEGS[peg];
						if(thisPeg.value<= thisProgress){
							payrate = Number(thisPeg.bonus).toFixed(4);
							//payrate = parseFloat(payrate).toFixed(2);
						}
					}
					thisCommGroup.earned = (Number(thisCommGroup.earned) + Number(payrate)).toFixed(4);
				}
					thisCommGroup.pay = $scope.rightcontainer.employeesbyname[$scope.Stuff.addingEmployee.name]['GrossProfit'] * thisCommGroup.earned;
			}
			else{
				for(dem in thisCommGroup.FORMULAS){
					var thisData = thisCommGroup.FORMULAS[dem];
					var thisProgress = $scope.rightcontainer.locations[thisTarget][thisData.FORMULA.name];
					var payrate = 0;
					for(peg in thisData.PEGS){
						var thisPeg = thisData.PEGS[peg];
						if(thisPeg.value<= thisProgress){
							payrate = Number(thisPeg.bonus).toFixed(4);
							//payrate = parseFloat(payrate).toFixed(2);
						}
					}
					thisCommGroup.earned = (Number(thisCommGroup.earned) + Number(payrate)).toFixed(4);
				}
				//console.log($scope.rightcontainer.locations);
				if(typeof $scope.rightcontainer.locations[thisTarget]  == 'undefined'){
						thisCommGroup.pay = 0;
					}
					else{
					thisCommGroup.pay = $scope.rightcontainer.locations[thisTarget]['GrossProfit'] * thisCommGroup.earned;	
					}
					
			}
			
		}
		//console.log($scope.CommEmp);
	}
	$scope.loadEmployee();
	$scope.createDonuts = function(){
		var myNode = document.getElementById("donutcontainer");
		while (myNode.firstChild) {
    		myNode.removeChild(myNode.firstChild);
		}
		var count = 0;
		var width = 300;
		var chartAWidth = 400;
		var chartAHeight = 250;
		var chartBWidth = 480;
		var chartBHeight = 325;
		var center = (chartBWidth - chartAWidth)/2;
		 var evalcall = "";
		 var innerChartData = [];
		 var outerChartData = [];
		 var tableFontSize = "1.5em";
		for(those in $scope.Stuff.selectedGroup.FORMULAS){
			var thisData = $scope.Stuff.selectedGroup.FORMULAS[those];
			var thisTarget = $scope.Stuff.selectedGroup.measuretarget;
			var thisProgress = 0;
			var thisProgressTrend = 0;
			
			if(thisTarget == 'Self'){
				thisProgress = $scope.rightcontainer.employeesbyname[$scope.Stuff.addingEmployee.name][thisData.FORMULA.name];
			}else{
				//console.log($scope.rightcontainer);
				thisProgress = $scope.rightcontainer.locations[thisTarget][thisData.FORMULA.name];
			}
			
			
			
			count= count+1;
			eval(" innerChartData["+count+"] = [['Pay','Work']];");
			var lastValue = 0;
			for(pegs in thisData.PEGS){
				var thisPeg = thisData.PEGS[pegs];
				
				var newArray = [thisPeg.bonus.toString(),thisPeg.value-lastValue];
				lastValue = thisPeg.value;
				eval("innerChartData["+count+"].push(newArray);");
			}	
			
			eval(" outerChartData["+count+"] = [['Type','Progress']];");
			outerChartData[count].push(['Current',thisProgress]);
			if(thisProgress > lastValue){}
			else{
				
			if(thisData.FORMULA.trending && $scope.thisMonth==$scope.Stuff.month && $scope.thisYear==$scope.Stuff.year){
				
				thisProgressTrend = thisProgress * $scope.trend;
				
				
				if(thisProgressTrend < lastValue){
					outerChartData[count].push(['Trending',thisProgressTrend-thisProgress]);
					outerChartData[count].push(['Remaining',lastValue-thisProgressTrend]);	
				}
				else{
					outerChartData[count].push(['Trending',lastValue-thisProgress]);	
				}
				
				
			}
			else{
				outerChartData[count].push(['Remaining',lastValue-thisProgress]);
			}
			}
			
		
		
		eval("var donut"+count+" = document.createElement('DIV')");
		eval("var donutA"+count+" = document.createElement('DIV')");
		eval("var donutB"+count+" = document.createElement('DIV')");
		eval("var donuttitle"+count+" = document.createElement('DIV')");
		eval("var donuttable"+count+" = document.createElement('TABLE')");
		
		eval("donutA"+count+".setAttribute('id','donutchartA"+count+"')");
		eval("donutB"+count+".setAttribute('id','donutchartB"+count+"')");
		eval("donut"+count+".setAttribute('id','donutcont"+count+"')");
		
		eval("donuttitle"+count+".setAttribute('id','donuttitle"+count+"')");	
		eval("donuttable"+count+".setAttribute('id','donuttable"+count+"')");		
			
		eval("var newLeftA"+count+" = (("+count+"-1)*"+1+")+"+center+"");
		eval("var newLeftB"+count+" = (("+count+"-1)*"+1+")");
		
		
		//Table
		
		var firstrow = document.createElement('TR');
		var columnpay = document.createElement('TH');
		var columnwork = document.createElement('TH');
		columnpay.innerHTML = "Pay";
		columnwork.innerHTML = "Goal";
		firstrow.appendChild(columnpay);
		firstrow.appendChild(columnwork);
		eval("donuttable"+count+".appendChild(firstrow);");
		
		
		
		eval("donuttable"+count+".style.position = 'absolute';");
		eval("donuttable"+count+".style.left = '160px';");
		eval("donuttable"+count+".style.top = '400px';");
	
		
		
		
		//eval("var firstrow"+count+" = document.createElement('TR')");
		//eval("var columnpay"+count+" = document.createElement('TH')");
		//eval("var columnwork"+count+" = document.createElement('TH')");
		var pegcount = 0;
		var payrate = 0;
		
		for(pegs in thisData.PEGS){
				var thisPeg = thisData.PEGS[pegs];
				pegcount = pegcount +1;
				eval("var row"+pegcount+""+count+" = document.createElement('TR')");
				eval("var columnpay"+pegcount+""+count+" = document.createElement('TD')");
				eval("var columnwork"+pegcount+""+count+" = document.createElement('TD')");
				var newBonus = thisPeg.bonus *100;
				eval("columnpay"+pegcount+""+count+".innerHTML = newBonus+'%';");
				eval("columnwork"+pegcount+""+count+".innerHTML = thisPeg.value;");
				eval("columnwork"+pegcount+""+count+".innerHTML = thisPeg.value;");
				
				if(thisProgress>thisPeg.value){
					payrate = thisPeg.bonus;
					
				}
			
				eval("row"+pegcount+""+count+".appendChild(columnpay"+pegcount+""+count+");");
				eval("row"+pegcount+""+count+".appendChild(columnwork"+pegcount+""+count+");");
				eval("donuttable"+count+".appendChild(row"+pegcount+""+count+");");
			}	
				pegcount = pegcount +1;
				eval("var row"+pegcount+""+count+" = document.createElement('TR')");
				eval("var columnpay"+pegcount+""+count+" = document.createElement('TD')");
				eval("var columnwork"+pegcount+""+count+" = document.createElement('TD')");
				eval("columnpay"+pegcount+""+count+".innerHTML = 'Earned';");
				eval("columnwork"+pegcount+""+count+".innerHTML = 'Current';");
				eval("row"+pegcount+""+count+".appendChild(columnpay"+pegcount+""+count+");");
				eval("row"+pegcount+""+count+".appendChild(columnwork"+pegcount+""+count+");");
				eval("donuttable"+count+".appendChild(row"+pegcount+""+count+");");
				
				
				pegcount = pegcount +1;
				eval("var row"+pegcount+""+count+" = document.createElement('TR')");
				eval("var columnpay"+pegcount+""+count+" = document.createElement('TD')");
				eval("var columnwork"+pegcount+""+count+" = document.createElement('TD')");
				
				eval("columnpay"+pegcount+""+count+".innerHTML = payrate;");
				eval("columnwork"+pegcount+""+count+".innerHTML = parseFloat(thisProgress).toFixed("+thisData.FORMULA.decimal+");");
				eval("row"+pegcount+""+count+".appendChild(columnpay"+pegcount+""+count+");");
				eval("row"+pegcount+""+count+".appendChild(columnwork"+pegcount+""+count+");");
				eval("donuttable"+count+".appendChild(row"+pegcount+""+count+");");
		//container
		eval("donut"+count+".style.position = 'absolute';");
		eval("donut"+count+".style.left = '"+(count)*375+"px';");
		
		
		
		
		//title
		eval("donuttitle"+count+".innerHTML = '"+thisData.FORMULA.name+"';");
		eval("donuttitle"+count+".style.position = 'absolute';");
		eval("donuttitle"+count+".style.left = '200px';");
		
		
		//inner chart
		eval("donutA"+count+".style.left = newLeftA"+count+";");
		eval("donutA"+count+".style.marginTop = '57px';");
		eval("donutA"+count+".style.width = '"+chartAWidth+"px';");
		eval("donutA"+count+".style.height = '"+chartAHeight+"px';");
		eval("donutA"+count+".style.position = 'absolute';");
		eval("donutA"+count+".style.zIndex = '1';");
		
		//outer Chart
		eval("donutB"+count+".style.backgroundColor = 'transparent';");
		eval("donutB"+count+".style.left = newLeftB"+count+";");
		eval("donutB"+count+".style.marginTop = '20px';");
		eval("donutB"+count+".style.width = '"+chartBWidth+"px';");
		eval("donutB"+count+".style.height = '"+chartBHeight+"px';");
		eval("donutB"+count+".style.position = 'absolute';");
		
		
		//glue
		eval("donutcontainer.appendChild(donut"+count+")");
		eval("donut"+count+".appendChild(donuttitle"+count+")");
		eval("donut"+count+".appendChild(donutA"+count+")");
		eval("donut"+count+".appendChild(donutB"+count+")");
		eval("donut"+count+".appendChild(donuttable"+count+")");
		if(thisData.FORMULA.trending && $scope.thisMonth==$scope.Stuff.month && $scope.thisYear==$scope.Stuff.year){
			//console.log(thisData);
		evalcall= evalcall + "google.charts.setOnLoadCallback(function() { drawChartA(innerChartData["+count+"],"+count+"); }); google.charts.setOnLoadCallback(function() { drawChartB(outerChartData["+count+"],"+count+"); });"
		}
		else{
			evalcall= evalcall + "google.charts.setOnLoadCallback(function() { drawChartA(innerChartData["+count+"],"+count+"); }); google.charts.setOnLoadCallback(function() { drawChartC(outerChartData["+count+"],"+count+"); });"
		}
	 	
		
		
		}
		
		eval(evalcall);
	}
	var x = [
      ['Pay','Work'],
      ['0.0025', 25],
      ['0.0050', 25],
      ['0.0075', 25],
      ['0.01', 20],
       ];
    var y= 
       [
        ['Task', 'Hours per Day'],
          ['Work',     56],
          ['Sleep',    44]
       ];
	
		
      
      
      
      
      
      
      
      
      
      
      
      
      
      function drawChartA(pegs, count) {
        var data = google.visualization.arrayToDataTable(pegs);

        var options = {
        // title: "My Daily Activities",
          pieHole: 0.3,
          legend:'none',
          pieSliceText:'none',
          backgroundColor:'transparent',
	  	 chartArea:{left:0,top:0, bottom:0,right:0,width:"80%",height:"80%"},
        colors:['red','yellow', 'orange' ,'green','blue' ]
        };
		eval("var chart"+count+" = new google.visualization.PieChart(document.getElementById('donutchartA"+count+"'))");
        eval("chart"+count+".draw(data, options);")
        
      }
      
      
      //callback function for outer chart
       function drawChartB(pegs,count) {
        var data = google.visualization.arrayToDataTable(pegs);

        var options = {
		        	
          title: "                       My Daily Activities",
          pieHole: 0.90,
          legend:'none',
          pieSliceText:'none',
          backgroundColor:'transparent',
           chartArea:{left:0,top:0, bottom:0,right:0,width:"80%",height:"80%"},
          
          colors:['blue','green', 'lightgrey']
        };

        eval("var chart = new google.visualization.PieChart(document.getElementById('donutchartB"+count+"'))");
        chart.draw(data, options);
	}
	 function drawChartC(pegs,count) {
        var data = google.visualization.arrayToDataTable(pegs);

        var options = {
		        	
          title: "                       My Daily Activities",
          pieHole: 0.90,
          legend:'none',
          pieSliceText:'none',
          backgroundColor:'transparent',
           chartArea:{left:0,top:0, bottom:0,right:0,width:"80%",height:"80%"},
          
          colors:['blue', 'lightgrey']
        };

        eval("var chart = new google.visualization.PieChart(document.getElementById('donutchartB"+count+"'))");
        chart.draw(data, options);
	}
	
	$(function() {
            $('.date-picker').datepicker( {
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            dateFormat: 'mmyy',
            onClose: function(dateText, inst) { 
                $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
            	
            }
            });
        });
	$scope.addSums = function(theResult){
		var sums = 0;
		//console.log(theResult);
		for(theItems in theResult.COMMGROUPS){
			sums= parseFloat(theResult.COMMGROUPS[theItems].pay) + sums;
		}
		return sums;
	}
	$scope.remainingcheckcommemps = function(){
	
		$scope.Stuff.newList = [];
		for(each in $scope.userlist){
			var found = false;
			var thisname = $scope.userlist[each].name;
			for(eich in $scope.commemps){
				
				var thatname = $scope.commemps[eich].USER.name;
			
				if(thisname==thatname){
					found = true;
				}
			}
			if(found == false){
				$scope.Stuff.newList.push($scope.userlist[each]);
			}
		}
		//console.log($scope.Stuff.newList);
		
	}
	$scope.remainingcheckcommemps();
}

