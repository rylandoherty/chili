

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
	//Load stuff settings;
	//Load real Stuff;
	$scope.storeSelect;
	$scope.storeSelect2;
	$scope.district="District Sanat";
	$scope.year=$window.datesStore.year;
	$scope.month=$window.datesStore.month;
	$scope.goalstorelist2 = goalformatProxy.loadgoalstore($window.datesStore.lastyear,$window.datesStore.lastmonth);
	$scope.goalstorelist = goalformatProxy.loadgoalstore($window.datesStore.year,$window.datesStore.month);
	$scope.monthSelection = "ThisMonth";
	$scope.drawlist={};
	$window.userlist = userlist.gethoursworkedbystore($window.datesStore.year,$window.datesStore.month);
	$scope.drawlist =  gethoursformonthfordraw($window.datesStore.year,$window.datesStore.month,$scope.district);
	$scope.drawlist2 =  gethoursformonthfordraw($window.datesStore.lastyear,$window.datesStore.lastmonth,$scope.district);
	//console.log(userlist.gethoursformonthfordraw($window.datesStore.year,$window.datesStore.month));
	
	$scope.groups = groupProxy.loadFormula();
	$scope.stores = loadProxy.loadDistrict($scope.district);
	$scope.container = {};
	$scope.container2 = {};
	$scope.container = $window.sales.dateSystem['MTD']['container'];
	$scope.container2 = $window.sales.dateSystem['LastMonth']['container'];
	$scope.thisGuy.sum = 0;
	$scope.thisGuy.sum2 = 0;
	
	if(typeof $scope.drawlist[$scope.thisGuy.userid] !== 'undefined'){
		
		$scope.thisGuy['draw'] = $scope.drawlist[$scope.thisGuy.userid];
	}
	
	
	
	if(typeof $scope.container['userstore'][$scope.thisGuy.userid] !== 'undefined'){
	for(store in $scope.container['userstore'][$scope.thisGuy.userid]['stores']){
		var thisStore = $scope.container['userstore'][$scope.thisGuy.userid]['stores'][store];
	for(goals in $scope.goalstorelist){
		
		var thisGoal = $scope.goalstorelist[goals];
		
		if(thisGoal['stores']['storeid']==$scope.container['userstore'][$scope.thisGuy.userid]['stores'][store])  {
			var nextGoal = undefined;
			var nextPay = undefined;
			var nextPayPercent = undefined;
			
			var cash = thisGoal.cash;
			var progress = thisGoal.quantity;
			var passedGoal = undefined;
			var passedPay = undefined;
			var passedPayPercent = undefined;
			var percentPayed = undefined;
			var thisEmployeeProgress = $scope.container[$scope.district]['stores'][thisStore]['employees'][$scope.thisGuy.userid]['sales']['formulagroup'][thisGoal['formulalist'].name];
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
			$scope.thisGuy.sum = $scope.thisGuy.sum +$scope.goalstorelist[goals]['EmployeePay'];
			/*console.log($scope.goalstorelist[goals]['PercentPay']);
			console.log($scope.goalstorelist[goals]);
			console.log($scope.goalstorelist[goals].format);
			console.log($scope.container[$scope.district]['stores'][thisStore]['employees'][$scope.thisGuy.userid]['sales']['formulagroup'][thisGoal['formulalist'].name]);
			console.log($scope.container[$scope.district]['stores'][thisStore]['sales']['formulagroup'][thisGoal['formulalist'].name]);
			*/	
		}
	} 
	
	
	}
	
	
	
	for(store in $scope.container2['userstore'][$scope.thisGuy.userid]['stores']){
		var thisStore = $scope.container2['userstore'][$scope.thisGuy.userid]['stores'][store];
	for(goals in $scope.goalstorelist2){
		
		var thisGoal = $scope.goalstorelist2[goals];
		
		if(thisGoal['stores']['storeid']==$scope.container2['userstore'][$scope.thisGuy.userid]['stores'][store])  {
			var nextGoal = undefined;
			var nextPay = undefined;
			var nextPayPercent = undefined;
			
			var cash = thisGoal.cash;
			var progress = thisGoal.quantity;
			var passedGoal = undefined;
			var passedPay = undefined;
			var passedPayPercent = undefined;
			var percentPayed = undefined;
			var thisEmployeeProgress = $scope.container2[$scope.district]['stores'][thisStore]['employees'][$scope.thisGuy.userid]['sales']['formulagroup'][thisGoal['formulalist'].name];
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
			console.log(payDifference);
			var percentTowardsGoal = (thisStoreProgress-passedGoal)/(nextGoal-passedGoal);
				console.log(percentTowardsGoal);
				percentPayed = percentTowardsGoal*payDifference+(passedPay/passedGoal);
				console.log(percentPayed + "   "+ thisStore);
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
			$scope.thisGuy.sum2 = $scope.thisGuy.sum2 +$scope.goalstorelist2[goals]['EmployeePay'];
			/*console.log($scope.goalstorelist[goals]['PercentPay']);
			console.log($scope.goalstorelist[goals]);
			console.log($scope.goalstorelist[goals].format);
			console.log($scope.container[$scope.district]['stores'][thisStore]['employees'][$scope.thisGuy.userid]['sales']['formulagroup'][thisGoal['formulalist'].name]);
			console.log($scope.container[$scope.district]['stores'][thisStore]['sales']['formulagroup'][thisGoal['formulalist'].name]);
			*/	
		}
	} 
	
	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	}
}