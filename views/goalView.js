

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('goalViewCtrl', goalViewCtrl);

// Inject my dependencies
goalViewCtrl.$inject = ['$routeParams','$scope','$window','userlist', '$rootScope'];

// Now create our controller function with all necessary logic

function goalViewCtrl($routeParams, $scope, $window, userlist, $rootScope ) {
	//Html scope variables
	$scope.thisGuy = $window.user;
	$scope.settings = {};
	$scope.EmployeeSelect = $scope.thisGuy;  
	console.log($scope.thisGuy)
	//Load stuff settings;
	//Load real Stuff;
	$scope.storeSelect;
	$scope.storeSelect2;
	$scope.district="District Sanat";
	$scope.year=$window.datesStore.year;
	$scope.month=$window.datesStore.month;
	console.log($window.datesStore);
	$scope.goalstorelist2 = goalformatProxy.loadgoalstore($window.datesStore.lastyear,$window.datesStore.lastmonth);
	$scope.goalstorelist = goalformatProxy.loadgoalstore($window.datesStore.year,$window.datesStore.month);
	$scope.monthSelection = "ThisMonth";
	$scope.drawlist={};
	$window.userlist = userlist.gethoursworkedbystore($window.datesStore.year,$window.datesStore.month);
	$scope.drawlist =  gethoursformonthfordraw($window.datesStore.year,$window.datesStore.month,$scope.district);
	$scope.drawlist2 =  gethoursformonthfordraw($window.datesStore.lastyear,$window.datesStore.lastmonth,$scope.district);
	$scope.drawlist =  f.getUserListHoursPerWeek($scope.district, $scope.year, $scope.month);
	$scope.drawlist2 ={};
	//console.log(userlist.gethoursformonthfordraw($window.datesStore.year,$window.datesStore.month));
	console.log($scope.drawlist2);
	$scope.groups = groupProxy.loadFormula();
	$scope.stores = loadProxy.loadDistrict($scope.district);
	$scope.container = {};
	$scope.container2 = {};
	$scope.container = $window.sales.dateSystem['MTD'];
	$scope.container2 = {};
	
	$scope.year = $window.datesStore.year;
	$scope.month = $window.datesStore.month;
	$scope.monthString=("0"+$scope.month).slice(-2);
	$scope.district = $window.datesStore.district;
	$scope.thisDate = new Date($scope.year, $scope.month,1);
	
	
	$scope.addDraw = function(person){
		var sums = 0;
		for(weeks in $scope.drawlist.BYUSER){
			sums= parseInt($scope.drawlist.BYUSER[weeks]['user'][person]['draw']) + sums;
		}
		return sums;
	}
	$scope.changePerson = function(){
		console.log("idiot");
		var todayDate = new Date();
	 	var thisDate = new Date($scope.year,$scope.month-1,01);
	 	$scope.monthString =("0"+$scope.month).slice(-2);
	 	if(todayDate.getMonth()==thisDate.getMonth()){
	 		$scope.monthSelection = "ThisMonth";
	 	$scope.doallthestuff();
	 	}
	 	else{
		$scope.doallthestuff2();
		}
	}
	$scope.changeMonth = function(change){
		
		
			console.log($scope.drawlist2);
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
	 	if(todayDate.getMonth()==thisDate.getMonth()){
	 		$scope.monthSelection = "ThisMonth";
	 	$scope.doallthestuff();
	 	}
	 	else{
	 		$scope.monthSelection = "LastMonth";
	 		$scope.goalstorelist2 = goalformatProxy.loadgoalstore($scope.year,$scope.month);
		
	 	var from = $scope.year+""+("0"+$scope.month).slice(-2)+"01";
	 	
	 	$window.sales.toWrite['LOAD'] = saveContainer.loadcontainer("Calendar",from);
	 
		$window.sales.dateSystem['LOAD'] = finalizecontainer( $window.sales.toWrite['LOAD']);
		
		$scope.container2 = $window.sales.dateSystem['LOAD'];
		console.log($scope.container2);
		$scope.doallthestuff2();
		
	 	}
	 	
	 	
	 	
	}
	
	
	
	$scope.doallthestuff = function(){
		$scope.drawlist =  f.getUserListHoursPerWeek($scope.district, $scope.year, $scope.month);
		$scope.EmployeeSelect.sum = 0;
	$scope.EmployeeSelect.sum2 = 0;
	console.log($scope.container);
	if(typeof $scope.drawlist[$scope.EmployeeSelect.userid] !== 'undefined'){
		
		$scope.EmployeeSelect['draw'] = $scope.drawlist[$scope.EmployeeSelect.userid];
	}
	
	if(typeof $scope.container['userstore'][$scope.EmployeeSelect.userid] !== 'undefined'){
	for(store in $scope.container['userstore'][$scope.EmployeeSelect.userid]['stores']){
		var thisStore = $scope.container['userstore'][$scope.EmployeeSelect.userid]['stores'][store];
	for(goals in $scope.goalstorelist){
		
		var thisGoal = $scope.goalstorelist[goals];
		
		if(thisGoal['stores']['storeid']==$scope.container['userstore'][$scope.EmployeeSelect.userid]['stores'][store])  {
			var nextGoal = undefined;
			var nextPay = undefined;
			var nextPayPercent = undefined;
			
			var cash = thisGoal.cash;
			var progress = thisGoal.quantity;
			var passedGoal = undefined;
			var passedPay = undefined;
			var passedPayPercent = undefined;
			var percentPayed = undefined;
			var thisEmployeeProgress = $scope.container[$scope.district]['stores'][thisStore]['employees'][$scope.EmployeeSelect.userid]['sales']['formulagroup'][thisGoal['formulalist'].name];
			var thisStoreProgress = $scope.container[$scope.district]['stores'][thisStore]['sales']['formulagroup'][thisGoal['formulalist'].name];
			for(tiers in thisGoal.format){
				var thisTier = thisGoal.format[tiers];
				var thisTierGoal = thisTier.progress*progress/100;
				
				var thisTierCash = thisTier.percentpayed*cash/100;
				
				if(typeof nextGoal == 'undefined'){
					if(thisTierGoal<=thisStoreProgress){
						//console.log(thisTierGoal+ " PASSED");
						passedGoal = thisTierGoal;
						passedPay = thisTierCash;
						passedPayPercent = thisTier.percentpayed/100;
					}
					else if(thisTierGoal>thisStoreProgress){
						nextGoal = thisTierGoal;
						nextPay = thisTierCash;
						nextPayPercent = thisTier.percentpayed/100;
					}
				}
			}
			
			if(typeof passedGoal == 'undefined'){
				
				percentPayed = nextPay/nextGoal;
				
				storePayed = percentPayed * nextPay; 
			}
			else if (typeof nextGoal == 'undefined'){
				percentPayed = passedPay/passedGoal;
				storePayed = percentPayed * passedPay;
			}
			else{
				
			var payDifference = (nextPay/nextGoal)-(passedPay/passedGoal);
			
			//var percentTowardsGoal = thisStoreProgress/(nextGoal-passedGoal);
				var percentTowardsGoal = (thisStoreProgress-passedGoal)/(nextGoal-passedGoal);
				//console.log(percentTowardsGoal);
				percentPayed = percentTowardsGoal*payDifference+(passedPay/passedGoal);
				
				
				//console.log(((thisStoreProgress/(nextGoal-passedGoal))*(nextPayPercent-passedPayPercent)));
				//console.log(nextPayPercent-passedPayPercent);
				
				//percentPayed=( ((1-((nextGoal-thisStoreProgress)/(nextGoal-passedGoal)))*(nextPayPercent-passedPayPercent))+passedPayPercent)*cash;
				
			}
			
			$scope.goalstorelist[goals]['StorePay']=percentPayed;
			$scope.goalstorelist[goals]['EmployeePay']=percentPayed*thisEmployeeProgress;
			
			$scope.goalstorelist[goals]['PercentPay']=$scope.goalstorelist[goals]['StorePay'];
			if(isNaN($scope.goalstorelist[goals]['EmployeePay'])){
				$scope.goalstorelist[goals]['EmployeePay'] = 0;
			}
			if(isNaN($scope.goalstorelist[goals]['PercentPay'])){
				$scope.goalstorelist[goals]['PercentPay'] = nextPay;
			}
			$scope.EmployeeSelect.sum = $scope.EmployeeSelect.sum +$scope.goalstorelist[goals]['EmployeePay'];
			/*console.log($scope.goalstorelist[goals]['PercentPay']);
			console.log($scope.goalstorelist[goals]);
			console.log($scope.goalstorelist[goals].format);
			console.log($scope.container[$scope.district]['stores'][thisStore]['employees'][$scope.EmployeeSelect.userid]['sales']['formulagroup'][thisGoal['formulalist'].name]);
			console.log($scope.container[$scope.district]['stores'][thisStore]['sales']['formulagroup'][thisGoal['formulalist'].name]);
			*/	
		}
	} 
	
	
	}
	}
	$scope.doallthestuff2 = function(){
		$scope.drawlist =  f.getUserListHoursPerWeek($scope.district, $scope.year, $scope.month);
	$scope.EmployeeSelect.sum2=0;
	for(store in $scope.container2['userstore'][$scope.EmployeeSelect.userid]['stores']){
		var thisStore = $scope.container2['userstore'][$scope.EmployeeSelect.userid]['stores'][store];
	for(goals in $scope.goalstorelist2){
		
		var thisGoal = $scope.goalstorelist2[goals];
		
		if(thisGoal['stores']['storeid']==$scope.container2['userstore'][$scope.EmployeeSelect.userid]['stores'][store])  {
			var nextGoal = undefined;
			var nextPay = undefined;
			var nextPayPercent = undefined;
			
			var cash = thisGoal.cash;
			var progress = thisGoal.quantity;
			var passedGoal = undefined;
			var passedPay = undefined;
			var passedPayPercent = undefined;
			var percentPayed = undefined;
			var thisEmployeeProgress = $scope.container2[$scope.district]['stores'][thisStore]['employees'][$scope.EmployeeSelect.userid]['sales']['formulagroup'][thisGoal['formulalist'].name];
			var thisStoreProgress = $scope.container2[$scope.district]['stores'][thisStore]['sales']['formulagroup'][thisGoal['formulalist'].name];
			for(tiers in thisGoal.format){
				var thisTier = thisGoal.format[tiers];
				var thisTierGoal = thisTier.progress*progress/100;
				
				var thisTierCash = thisTier.percentpayed*cash/100;
				
				if(typeof nextGoal == 'undefined'){
					if(thisTierGoal<=thisStoreProgress){
						//console.log(thisTierGoal+ " PASSED");
						passedGoal = thisTierGoal;
						passedPay = thisTierCash;
						passedPayPercent = thisTier.percentpayed/100;
					}
					else if(thisTierGoal>thisStoreProgress){
						nextGoal = thisTierGoal;
						nextPay = thisTierCash;
						nextPayPercent = thisTier.percentpayed/100;
					}
				}
			}
			
			if(typeof passedGoal == 'undefined'){
				
				percentPayed = nextPay/nextGoal;
				
				storePayed = percentPayed * nextPay; 
			}
			else if (typeof nextGoal == 'undefined'){
				percentPayed = passedPay/passedGoal;
				storePayed = percentPayed * passedPay;
			}
			else{
				
			var payDifference = (nextPay/nextGoal)-(passedPay/passedGoal);
			//console.log(payDifference);
			var percentTowardsGoal = (thisStoreProgress-passedGoal)/(nextGoal-passedGoal);
				//console.log(percentTowardsGoal);
				percentPayed = percentTowardsGoal*payDifference+(passedPay/passedGoal);
				//console.log(percentPayed + "   "+ thisStore);
				//console.log(((thisStoreProgress/(nextGoal-passedGoal))*(nextPayPercent-passedPayPercent)));
				//console.log(nextPayPercent-passedPayPercent);
				
				//percentPayed=( ((1-((nextGoal-thisStoreProgress)/(nextGoal-passedGoal)))*(nextPayPercent-passedPayPercent))+passedPayPercent)*cash;
				
			}
			
			$scope.goalstorelist2[goals]['StorePay']=percentPayed;
			$scope.goalstorelist2[goals]['EmployeePay']=percentPayed*thisEmployeeProgress;
			
			$scope.goalstorelist2[goals]['PercentPay']=$scope.goalstorelist2[goals]['StorePay'];
			if(isNaN($scope.goalstorelist2[goals]['EmployeePay'])){
				$scope.goalstorelist2[goals]['EmployeePay'] = 0;
			}
			if(isNaN($scope.goalstorelist2[goals]['PercentPay'])){
				$scope.goalstorelist2[goals]['PercentPay'] = nextPay;
			}
			$scope.EmployeeSelect.sum2 = $scope.EmployeeSelect.sum2 +$scope.goalstorelist2[goals]['EmployeePay'];
			/*console.log($scope.goalstorelist[goals]['PercentPay']);
			console.log($scope.goalstorelist[goals]);
			console.log($scope.goalstorelist[goals].format);
			console.log($scope.container[$scope.district]['stores'][thisStore]['employees'][$scope.EmployeeSelect.userid]['sales']['formulagroup'][thisGoal['formulalist'].name]);
			console.log($scope.container[$scope.district]['stores'][thisStore]['sales']['formulagroup'][thisGoal['formulalist'].name]);
			*/	
		}
	} 
	
	}
	
	}

	
	}
	$scope.doallthestuff();
}