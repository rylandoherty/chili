

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('mtdCtrl', mtdCtrl);

// Inject my dependencies
mtdCtrl.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function mtdCtrl($routeParams, $scope, $window ) {
	//Html scope variables
	
	/*var uploaz = loadProxy.getuploadrecord('Dog');
	console.log(uploaz);
	var highestID = 0;
	var uploazz = "";
	for(dem in uploaz){
		if(uploaz[dem].type=='pdr'&&uploaz[dem].id>highestID){
			highestID = uploaz[dem].id;
			uploazz = uploaz[dem];
		}
	}
	console.log()
	$scope.uploadTime = uploazz;*/
	$scope.uploadTime = 0;
	$scope.sales11= {};
	$scope.sales11.dateSystem = {};
 	 $scope.sales11.toWrite={};
	  $scope.sales11.dateSystem['MTD'] = {};
		$scope.sales11.toWrite['MTD'] = {};
	     
	     $scope.sales11.toWrite['MTD'] = saveContainer.loadcontainer("MTD",0);
	      $scope.sales11.dateSystem['MTD'] = finalizecontainer( $scope.sales11.toWrite['MTD']);
	$scope.uploadContainer = $window.uploadContainer;
	$scope.year = $window.datesStore.year;
	$scope.month = $window.datesStore.month;
	$scope.monthString=("0"+$scope.month).slice(-2);
	$scope.district = $window.datesStore.district;
	$scope.thisDate = new Date($scope.year, $scope.month,1);
	$scope.drawlist ={};
	$scope.selectStore = "all";
	var today = new Date();
	var lastofmonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
	$scope.showTrending = false;
	//console.log(lastofmonth.getDate());
	$scope.HideX = false;
	$scope.trendRate = lastofmonth.getDate()/today.getDate();
	$scope.thisGuy = $window.user;
	//Load stuff settings;
	//Load real Stuff;
	$scope.district = 'District Sanat';
	$scope.usersHours = $window.userlist;
	//console.log($scope.usersHours);
	$scope.mtdz = {};
	$scope.mtdz.datetype = 'MTD';
	$scope.container = {};
	
	//console.log($scope.container);
	$scope.groupz = groupProxy.loadFormula();
	//console.log($scope.groupz);
	$scope.groups = [];
	for(var thoseform in $scope.groupz){
		$scope.groups[$scope.groupz[thoseform]['orderlocation']-1]=$scope.groupz[thoseform];
	}
    $scope.categories = groupProxy.getGroups();
	
	$scope.mtdz.formulatoview = {};
	$scope.mtdz.sortType = '';
	
	console.log("here");
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
	

	
	$scope.selectedStore= function(a){
		if($scope.selectStore == a){
			$scope.selectStore = "all";
		}
		else{
		$scope.selectStore = a;
		}
	}
	$scope.setDate = function (){
		$scope.container = $scope.sales11.dateSystem[$scope.mtdz['datetype']];
		
		$scope.updateEmployeeArray();
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
$scope.container = $scope.sales11.dateSystem['MTD'];
	$scope.updateEmployeeArray();
}