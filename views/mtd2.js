

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('mtdCtrl2', mtdCtrl2);

// Inject my dependencies
mtdCtrl2.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function mtdCtrl2($routeParams, $scope, $window ) {
	//Html scope variables
	
	
	//console.log(uploaz);
	var highestID = 0;
	var uploazz = "";
	$scope.load = function(){
		var uploaz = loadProxy.getUploads();
	for(dem in uploaz){
		if(uploaz[dem].type=='pdr'&&uploaz[dem].id>highestID){
			highestID = uploaz[dem].id;
			uploazz = uploaz[dem];
			
		}
		
	}
	
		
	$scope.formulaGroups = groupProxy.loadFormulaViewGroupObject();
	console.log($scope.formulaGroups);
	$scope.uploadTime = uploazz;
	$scope.rightcontainer['MTD'] = saveContainer.actualcontainermaker(times.start, times.end);
	$scope.rightcontainer['Today'] = saveContainer.actualcontainermaker(times.todayform, times.todayform);
	$scope.rightcontainer['Yesterday'] = saveContainer.actualcontainermaker(times.yesterdayform, times.yesterdayform);
	}
	
	
	
	console.log("upload list");
	
	
	
	//console.log(saveContainer.actualcontainermaker());
	$scope.rightcontainer = {};
	$scope.rightcontainer['MTD'] = {};
	//$scope.rightcontainer['LM'] = {};
	//$scope.rightcontainer['MBLM'] = {};
	//$scope.rightcontainer['LMTD'] = {};
	//$scope.rightcontainer['Today'] = {};
	//$scope.rightcontainer['Yesterday'] = {};
	//$scope.rightcontainer['LW'] = {};
	//$scope.rightcontainer['WBLW'] = {};
	
	$scope.comparerelations = {};
	$scope.comparerelations['LW'] = "WBLW";
	$scope.comparerelations['MTD'] = "LMTD";
	$scope.comparerelations['LM'] = "MBLM";
	$scope.comparerelations['YTD'] = "LYTD";
	$scope.comparerelations['MTDVSLASTYEAR'] = "LASTYEARMTD";
	 $scope.sliceDatesUp = function(datee){
    	return datee.getFullYear()+""+("0"+(datee.getMonth())).slice(-2)+("0"+datee.getDate()).slice(-2)+"";
    }
	
	var times = {};
	var datez = {};
	var today = new Date();
	times.today = new Date();
	times.year = today.getFullYear();
	times.month = today.getMonth()+1;
	
	
	times.yesterday = new Date(today.getFullYear(),today.getMonth(), today.getDate()-1,0,0,1);
	times.lastweek = new Date(times.yesterday.getFullYear(),times.yesterday.getMonth(), times.yesterday.getDate()-6,0,0,1);
	times.lastweekform = times.lastweek.getFullYear()+""+("0"+(times.lastweek.getMonth()+1)).slice(-2)+("0"+times.lastweek.getDate()).slice(-2)+"";
	
	
	times.weekbeforelastweekend = new Date(times.yesterday.getFullYear(),times.yesterday.getMonth(), times.yesterday.getDate()-7,0,0,1);
	times.weekbeforelastweek = new Date(times.yesterday.getFullYear(),times.yesterday.getMonth(), times.yesterday.getDate()-13,0,0,1);
	
	times.weekbeforelastweekform = times.weekbeforelastweek.getFullYear()+""+("0"+(times.weekbeforelastweek.getMonth()+1)).slice(-2)+("0"+times.weekbeforelastweek.getDate()).slice(-2);
	times.weekbeforelastweekendform = times.weekbeforelastweekend.getFullYear()+""+("0"+(times.weekbeforelastweekend.getMonth()+1)).slice(-2)+("0"+times.weekbeforelastweekend.getDate()).slice(-2);
	
	times.targetDate = new Date(times.year,(times.month-1));
    times.startoffirstweek = new Date(times.year,(times.month-1));
    times.endofmonth = new Date(times.year,(times.month),0);
    times.startoffirstweek.setDate(-1*(times.targetDate.getDay()-1)); 
    times.startoffirstweek = new Date(times.year,times.month-1,1);
    times.start = times.startoffirstweek.getFullYear()+""+("0"+(times.startoffirstweek.getMonth()+1)).slice(-2)+("0"+times.startoffirstweek.getDate()).slice(-2);
    
    times.end = times.endofmonth.getFullYear()+("0"+(times.endofmonth.getMonth()+1)).slice(-2)+("0"+times.endofmonth.getDate()).slice(-2);
    	
    times.todayform = today.getFullYear()+""+("0"+(today.getMonth()+1)).slice(-2)+("0"+today.getDate()).slice(-2)+"";
	times.yesterdayform = times.yesterday.getFullYear()+""+("0"+(times.yesterday.getMonth()+1)).slice(-2)+("0"+times.yesterday.getDate()).slice(-2)+"";	
    	
    times.lastmonthfirstday = new Date(today.getFullYear(), today.getMonth()-2); 
    times.lastmonththisdaydate = new Date (today.getFullYear(), today.getMonth()-1, today.getDate());
    times.endoflastmonth = new Date(times.year,(times.month-1),0);
    
    times.startlastmonth = times.lastmonthfirstday.getFullYear()+""+("0"+(times.lastmonthfirstday.getMonth()+2)).slice(-2)+("0"+times.lastmonthfirstday.getDate()).slice(-2)+"";
    times.endlastmonth = times.endoflastmonth.getFullYear()+("0"+(times.endoflastmonth.getMonth()+1)).slice(-2)+("0"+times.endoflastmonth.getDate()).slice(-2)+"";
    times.lastmonththisday = times.lastmonththisdaydate.getFullYear()+("0"+(times.lastmonththisdaydate.getMonth()+1)).slice(-2)+("0"+times.lastmonththisdaydate.getDate()).slice(-2)+"";
    
    times.monthbeforelastdate = new Date(today.getFullYear(), today.getMonth()-3) ;
    times.monthbeforelastenddate = new Date(times.year,(times.month-2),0);
    
  
    
    
    times.monthbeforelast = times.monthbeforelastdate.getFullYear()+""+("0"+(times.monthbeforelastdate.getMonth()+2)).slice(-2)+("0"+times.monthbeforelastdate.getDate()).slice(-2)+"";
    times.monthbeforelastend = times.monthbeforelastenddate.getFullYear()+("0"+(times.monthbeforelastenddate.getMonth()+1)).slice(-2)+("0"+times.monthbeforelastenddate.getDate()).slice(-2)+"";
    
     times.lastyearmonthfirstday = $scope.sliceDatesUp(new Date(today.getFullYear()-1, today.getMonth()+1,1)); 
    times.lastmonththisdaydate = $scope.sliceDatesUp(new Date (today.getFullYear()-1, today.getMonth()+1, today.getDate()));
    
     times.lastyearfirstday = $scope.sliceDatesUp(new Date(today.getFullYear()-1, 1, 1)); 
    times.lastyearthisdaydate = $scope.sliceDatesUp(new Date (today.getFullYear()-1, today.getMonth()+1, today.getDate()));
    
    times.thisyearfirstday = $scope.sliceDatesUp(new Date(today.getFullYear(), 1, 1)); 
    
    //todayform
    
    
    
    console.log(times);
    console.log("Before Container");
    //month to date
    $scope.load();
    console.log($scope.rightcontainer);
    console.log("After Container");
    
    //$scope.rightcontainer['WBLW'] = saveContainer.actualcontainermaker(times.weekbeforelastweekform, times.weekbeforelastweekendform);
    //$scope.rightcontainer['LW'] = saveContainer.actualcontainermaker(times.lastweekform, times.yesterdayform);
    
    //$scope.rightcontainer['LM'] = saveContainer.actualcontainermaker(times.startlastmonth, times.endlastmonth);
    //$scope.rightcontainer['MBLM'] = saveContainer.actualcontainermaker(times.startlastmonth, times.endlastmonth);
  // $scope.rightcontainer['LMTD'] = saveContainer.actualcontainermaker(times.startlastmonth, times.lastmonththisday);
   //$scope.rightcontainer['Today'] = saveContainer.actualcontainermaker(times.todayform, times.todayform);
   //$scope.rightcontainer['Yesterday'] = saveContainer.actualcontainermaker(times.yesterdayform, times.yesterdayform);
  
    //console.log($scope.rightcontainer);
    /*
	today,
	yesterday,daybefore
	
	pastweek,2ndpastweek,
	
	monthtodate,lastmonthtocurrentdate,
	
	lastmonth,monthbeforelast,
	lastyearlastmonth,lastyearmonthbefore
	*/
	
	
	
	
	
	
	//$scope.sales11= {};
	//$scope.sales11.dateSystem = {};
 	// $scope.sales11.toWrite={};
	  //$scope.sales11.dateSystem['MTD'] = {};
		//$scope.sales11.toWrite['MTD'] = {};
	     
	    // $scope.sales11.toWrite['MTD'] = saveContainer.loadcontainer("MTD",0);
	     // $scope.sales11.dateSystem['MTD'] = finalizecontainer( $scope.sales11.toWrite['MTD']);
	//$scope.uploadContainer = $window.uploadContainer;
	$scope.today = new Date();
	$scope.year = $window.datesStore.year;
	$scope.month = $window.datesStore.month;
	$scope.monthString=("0"+$scope.month).slice(-2);
	$scope.district = $window.datesStore.district;
	$scope.thisDate = new Date($scope.year, $scope.month,1);
	$scope.drawlist ={};
	$scope.selectStore = "all";
	
	var lastofmonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
	
	//console.log(lastofmonth.getDate());
	$scope.HideX = false;
	var firstDay = new Date();
	var lastDay = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0);
	
	$scope.date1 = firstDay.getDate();
	$scope.hourfraction = (20- firstDay.getHours())/20;
	if($scope.hourfraction<0)$scope.hourfraction=0;
	$scope.date2 = lastDay.getDate();
	
	
	
	$scope.trendRate = ( $scope.date2/($scope.date1-$scope.hourfraction)).toFixed(2);
	$scope.thisGuy = $window.user;
	//Load stuff settings;
	//Load real Stuff;
	$scope.district = 'District Sanat';
	$scope.usersHours = $window.userlist;
	//console.log($scope.usersHours);
	$scope.mtdz = {};
	$scope.mtdz.showTrending = false;
	$scope.mtdz.datetype = 'MTD';
	$scope.mtdz.datetype2 = '';
	$scope.container = {};
	console.log("Start Formula Group stuff");
	//console.log($scope.container);
	$scope.groupz = groupProxy.getFormula();
	$scope.actualGroups = groupProxy.getGroups();
	console.log($scope.groupz);
	console.log($scope.actualGroups);
	for(var formula in $scope.groupz){
		var thisFormula = $scope.groupz[formula];
		thisFormula['formulareplaced'] = thisFormula['formula'].replace(/,/g ,'');
		thisFormula.groupsinformula = {};
		for(var groups in $scope.actualGroups){
			var thisGroup =$scope.actualGroups[groups];
			if(thisFormula['formula'].indexOf(thisGroup.productgroupid)>0){
				thisFormula.groupsinformula[thisGroup.productgroupid] = thisGroup;
			}
		}
	}
	
	$scope.replaceFormula=function(formula){
		formula = formula.replace(/,/g ,'');
		formula.groupsinformula = [];
		for(var groups in $scope.actualGroups){
			var thisGroup =$scope.actualGroups[groups];
			if(formula.indexOf(thisGroup.name)>0){
				formula.groupsinformula.push(thisGroup);
			}
		}
		return formula;
	} 
	
	$scope.groups = [];
	$scope.groups2 = {};
	for(var thoseform in $scope.groupz){
		$scope.groups[$scope.groupz[thoseform]['orderlocation']-1]=$scope.groupz[thoseform];
	}
	for(var thoseform in $scope.groupz){
		$scope.groups2[$scope.groupz[thoseform].name]=$scope.groupz[thoseform];
	}
    $scope.categories = groupProxy.getGroups();
	
	$scope.mtdz.formulatoview = {};
	$scope.mtdz.sortType = '';
	$scope.mtdz['formulatoview']['GrossProfit'] = $scope.groups2['GrossProfit'];
	$scope.mtdz['formulatoview']['GP/Smart'] = $scope.groups2['GP/Smart'];
	$scope.mtdz['formulatoview']['Strategic%'] = $scope.groups2['Strategic%'];
	$scope.mtdz['formulatoview']['TMP%'] = $scope.groups2['TMP%'];
	$scope.mtdz['formulatoview']['Total Boxes'] = $scope.groups2['Total Boxes'];
	$scope.mtdz['formulatoview']['Trade/Upg'] = $scope.groups2['Trade/Upg'];
	//console.log($scope.groups2);
	console.log("End Formula Group Stuff");
	$scope.simpleContainer = [];
	$scope.replaceFormula=function(formula){
		formula = formula.replace(/,/g ,'');
		formula.groupsinformula = [];
		for(var groups in $scope.actualGroups){
			var thisGroup =$scope.actualGroups[groups];
			if(formula.indexOf(thisGroup.name)>0){
				formula.groupsinformula.push(thisGroup);
			}
		}
		return formula;
	} 
	$scope.updateEmployeeArray = function (){
		console.log("Emp Array?");
		$scope.simpleContainer = [];
		//console.log($scope.container['userstore']);
		for(var them in $scope.container['userstore']){
			$scope.simpleContainer.push({name:$scope.container['userstore'][them].name});
			for(var each in $scope.groups){
				$scope.simpleContainer[$scope.simpleContainer.length-1][$scope.groups[each]['name']] = $scope.container['userstore'][$scope.container['userstore'][them].name]['sales']['formulagroup'][$scope.groups[each]['name']];
			}
	}
	console.log("End Emp Arrray");
	//console.log($scope.simpleContainer);
	}
	
	$scope.selectedStore= function(a){
		if($scope.selectStore == a){
			$scope.selectStore = "all";
		}
		else{
		$scope.selectStore = a;
		}
	}
	$scope.setDate = function (isTwoTypes){
		if(isTwoTypes){
			$scope.mtdz.datetype2 = $scope.comparerelations[$scope.mtdz.datetype];
			if(typeof $scope.rightcontainer[$scope.mtdz.datetype2] == 'undefined'){
				
				if($scope.mtdz.datetype2 == 'WBLW'){
					$scope.rightcontainer['WBLW'] = saveContainer.actualcontainermaker(times.weekbeforelastweekform, times.weekbeforelastweekendform);
				}
				else if($scope.mtdz.datetype2 == 'MBLM' ){
					$scope.rightcontainer['MBLM'] = saveContainer.actualcontainermaker(times.monthbeforelast, times.monthbeforelastend);
				}
				else if($scope.mtdz.datetype2 == 'LMTD'){
					$scope.rightcontainer['LMTD'] = saveContainer.actualcontainermaker(times.startlastmonth, times.lastmonththisday);
				}
				else if($scope.mtdz.datetype2 == 'LYTD'){
					$scope.rightcontainer['LYTD'] = saveContainer.actualcontainermaker(times.lastyearfirstday, times.lastyearthisdaydate);
				}
				else if($scope.mtdz.datetype2 == 'LASTYEARMTD'){
					$scope.rightcontainer['LASTYEARMTD'] = saveContainer.actualcontainermaker(times.lastyearmonthfirstday, times.lastmonththisdaydate);
				}
				
				}
     times.lastyearfirstday = $scope.sliceDatesUp(new Date(today.getFullYear()-1, 1, 1)); 
    times.lastyearthisdaydate = $scope.sliceDatesUp(new Date (today.getFullYear()-1, today.getMonth()+1, today.getDate()));
    
    times.thisyearfirstday = $scope.sliceDatesUp(new Date(today.getFullYear(), 1, 1)); 
		}
		
		if(typeof $scope.rightcontainer[$scope.mtdz.datetype] == 'undefined'){
			if($scope.mtdz.datetype == 'MTD'){
				
			}	
			else if($scope.mtdz.datetype == 'LW'){
				$scope.rightcontainer['LW'] = saveContainer.actualcontainermaker(times.lastweekform, times.yesterdayform);
			}
			else if($scope.mtdz.datetype == 'LM'){
				$scope.rightcontainer['LM'] = saveContainer.actualcontainermaker(times.startlastmonth, times.endlastmonth);
			}
			else if($scope.mtdz.datetype == 'Today'){
				$scope.rightcontainer['Today'] = saveContainer.actualcontainermaker(times.todayform, times.todayform);
			}
			else if($scope.mtdz.datetype == 'Yesterday'){
				$scope.rightcontainer['Yesterday'] = saveContainer.actualcontainermaker(times.yesterdayform, times.yesterdayform);
			}
			else if($scope.mtdz.datetype == 'contest'){
				$scope.rightcontainer['contest'] = saveContainer.actualcontainermaker("20190128", "20190131");
			}
			else if($scope.mtdz.datetype == 'Other'){
				$scope.rightcontainer['Other'] = saveContainer.actualcontainermaker(times.customdatefrom, times.customdateto);
			}
			else if($scope.mtdz.datetype == 'YTD'){
				$scope.rightcontainer['YTD'] = saveContainer.actualcontainermaker(times.thisyearfirstday, times.todayform);
			}
			else if($scope.mtdz.datetype == 'MTDVSLASTYEAR'){
				$scope.rightcontainer['MTDVSLASTYEAR'] = $scope.rightcontainer['MTD'];
			}
		}
		
		console.log($scope.rightcontainer);
		
		//$scope.container = $scope.sales11.dateSystem[$scope.mtdz['datetype']];
		//$scope.updateEmployeeArray();
		

	}
	$scope.setDate2 = function (){
		times.lastyearmonthfirstday = new Date(today.getFullYear()-1, today.getMonth()-1); 
    times.lastmonththisdaydate = new Date (today.getFullYear()-1, today.getMonth(), today.getDate());
    
     times.lastyearfirstday = new Date(today.getFullYear()-1, 1, 1); 
    times.lastyearthisdaydate = new Date (today.getFullYear()-1, today.getMonth(), today.getDate());
    
    times.thisyearfirstday = new Date(today.getFullYear(), 1, 1); 
    //todayform
	}
	$scope.returnMonthString = function (monthcode){
		var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   		 var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
		
		return mS[monthcode];
		
	}
	
	
	
	
	$scope.addFormulaToView = function(formu){
		
		
		var alreadyMatched = false;
		for(var each in $scope.groups){
			if($scope.groups[each]['name']==formu){
				for(var those in $scope.mtdz['formulatoview']){
					if($scope.mtdz['formulatoview'][those]['name'] == formu){
						alreadyMatched = true;
					}
				}
				if(!alreadyMatched){
					$scope.mtdz['formulatoview'][$scope.groups[each]['name']]= ( $scope.groups[each]); 
				}
			}
		}
		console.log($scope.mtdz['formulatoview']);
		
		
		
		
	}
	$scope.predicate = function (val) {
      return val[$scope.mtdz.sortType];
    }
    
   $scope.removeFormula = function ( element) {
   	
   	console.log("deletes");
    delete $scope.mtdz['formulatoview'][element['name']];
    
}
$scope.addSums = function(person,store){
		var sums = 0;
		//console.log($scope.drawlist.BYUSER[weeks]['user'][person]);
		
		
		for(weeks in $scope.drawlist.BYSTORE){
			if(typeof $scope.drawlist.BYSTORE[weeks][store]['users'][person] == 'undefined'){
			$scope.drawlist.BYSTORE[weeks][store]['users'][person] = {};
			$scope.drawlist.BYSTORE[weeks][store]['users'][person].HOURS="0";
			//console.log($scope.drawlist.BYUSER[weeks]['user'][person]);
		}
			if($scope.drawlist.BYSTORE[weeks][store]['users'][person].HOURS != "0"){
			sums= parseInt($scope.drawlist.BYSTORE[weeks][store]['users'][person].HOURS)-parseInt($scope.drawlist.BYSTORE[weeks][store]['users'][person].HOURSNOTFORDRAW) + sums;
		
		}
		}
		if(sums==0){
			return 1;
		}
		return sums;
	}
$scope.addStore = function(store){
		var sums = 0;
		
		for(weeks in $scope.drawlist.BYSTORE){
			if(typeof $scope.drawlist.BYSTORE[weeks][store].HOURS == 'undefined'){
			$scope.drawlist.BYSTORE[weeks][store] = {};
			$scope.drawlist.BYSTORE[weeks][store].HOURS=0
			//console.log($scope.drawlist.BYUSER[weeks]['user'][person]);
		}
			//console.log($scope.drawlist.BYUSER[weeks]['user']);
			//console.log(person);
			sums= parseInt($scope.drawlist.BYSTORE[weeks][store].HOURS)-parseInt($scope.drawlist.BYSTORE[weeks][store].HOURSNOTFORDRAW) + sums;
		}
		return sums;
	}
	$scope.changeMonth = function(change){
		
		
		console.log($scope.drawlist);
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
	 	var todayDate = new Date();
	 	var thisDate = new Date($scope.year,$scope.month-1,01);
	 	$scope.monthString =("0"+$scope.month).slice(-2);
	 	$scope.drawlist =  f.getUserListHoursPerWeek($scope.district, $scope.year, $scope.month);
	 	if(todayDate.getMonth()==thisDate.getMonth()){
	 		$scope.mtdz['datetype']='MTD';
	 		
	 
		
		
		$scope.container = $scope.sales11.dateSystem[$scope.mtdz['datetype']];
	 	}
	 	else{
	 		$scope.mtdz['datetype']=['LOAD'];
	 	var from = $scope.year+""+("0"+$scope.month).slice(-2)+"01";
	 	
	 	$scope.sales11.toWrite['LOAD'] = saveContainer.loadcontainer("Calendar",from);
	 
		$scope.sales11.dateSystem['LOAD'] = finalizecontainer( $scope.sales11.toWrite['LOAD']);
		
		$scope.container = $scope.sales11.dateSystem[$scope.mtdz['datetype']];
		
		$scope.updateEmployeeArray();
	 	}
	 	
	 	
	 	
	}



    $scope.drawlist =  f.getUserListHoursPerWeek($scope.district, $scope.year, $scope.month);
    
    
        $scope.Stuff ={};
        $scope.updateDateValue = function(){
	        $scope.mtdz['datetype'] = "Other";
	        $scope.Stuff.selectedDate = document.getElementById('startDate').value;
	        $scope.Stuff.year = $scope.Stuff.selectedDate.substring(2,6);
			$scope.Stuff.month = $scope.Stuff.selectedDate.substring(0,2);
			
			var EOM = new Date($scope.Stuff.year,($scope.Stuff.month),0);
	   		var SOM = new Date($scope.Stuff.year,$scope.Stuff.month-1,1);
	    	times.start = SOM.getFullYear()+""+("0"+(SOM.getMonth()+1)).slice(-2)+("0"+SOM.getDate()).slice(-2);
	    	times.end = EOM.getFullYear()+("0"+(EOM.getMonth()+1)).slice(-2)+("0"+EOM.getDate()).slice(-2);
	    	var time1 = times.start;
			var time2 = times.end;
	        
	         
			
			$scope.rightcontainer['Other'] = saveContainer.actualcontainermaker(time1, time2);
			
			
		//console.log($scope.Stuff.selectedDate);
		//console.log( $scope.Stuff.year);
			//console.log($scope.Stuff.month);
	}
    
    
    
    $(function() {
            $('.date-pickeraa').datepicker( {
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            dateFormat: 'mmyy',
            onClose: function(dateText, inst) { 
                $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
            	
            }
            });
        });
//$scope.container = $scope.sales11.dateSystem['MTD'];
	//$scope.updateEmployeeArray();
}