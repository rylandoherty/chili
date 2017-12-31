

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('UserListCtrl', UserListCtrl);

// Inject my dependencies
UserListCtrl.$inject = ['$routeParams','$scope','$window','userlist','$rootScope'];

// Now create our controller function with all necessary logic

function UserListCtrl($routeParams, $scope, $window, userlist ,$rootScope ) {
	//Html scope variables
	
	
	//Load stuff settings;
	//Load real Stuff;
	
	//Html scope variables
	$scope.thisGuy = $window.user;
	//Load stuff settings;
	//Load real Stuff;
	$scope.storeSelect;
	$scope.district=$window.datesStore.district;
	$scope.year=$window.datesStore.year;
	$scope.month=11;
	$scope.goalstorelist = goalformatProxy.loadgoalstore($scope.year,$scope.month);
	console.log($scope.goalstorelist);
	$scope.drawlist={};
	$scope.userArray = [];
	$window.userlist = userlist.gethoursworkedbystore($window.datesStore.year,$window.datesStore.month);
	$scope.drawlist =  gethoursformonthfordraw($window.datesStore.year,$window.datesStore.month,"District Sanat");
	//console.log(userlist.gethoursformonthfordraw($window.datesStore.year,$window.datesStore.month));
	$scope.groups = groupProxy.loadFormula();
	$scope.stores = loadProxy.loadDistrict('District Sanat');
	$scope.container = {};
	console.log($window.sales.dateSystem);
	$scope.container = $window.sales.dateSystem['LastMonth']['container'];
	
	console.log($scope.thisGuy);
	console.log($scope.container);
	console.log($rootScope);
	console.log($scope.container['userstore']);
	
	var currentTarget = {};
	for(those in $scope.container['userstore']){
		
		//console.log($scope.container['userstore'][those]);
		currentTarget = $scope.container['userstore'][those];
		 
		 currentTarget.sum = 0;
	
	if(typeof $scope.drawlist[currentTarget.name] !== 'undefined'){
		
		currentTarget['draw'] = $scope.drawlist[currentTarget.name];
	}
	//console.log($scope.container['userstore']);
	
	
	if(typeof $scope.container['userstore'][currentTarget.name] !== 'undefined'){
	for(store in $scope.container['userstore'][currentTarget.name]['stores']){
		var thisStore = $scope.container['userstore'][currentTarget.name]['stores'][store];
	for(goals in $scope.goalstorelist){
		
		var thisGoal = $scope.goalstorelist[goals];
		
		if(thisGoal['stores']['storeid']==$scope.container['userstore'][currentTarget.name]['stores'][store])  {
			var nextGoal = undefined;
			var nextPay = undefined;
			var nextPayPercent = undefined;
			
			var cash = thisGoal.cash;
			var progress = thisGoal.quantity;
			var passedGoal = undefined;
			var passedPay = undefined;
			var passedPayPercent = undefined;
			var percentPayed = undefined;
			var thisEmployeeProgress = $scope.container[$scope.district]['stores'][thisStore]['employees'][currentTarget.name]['sales']['formulagroup'][thisGoal['formulalist'].name];
			var thisStoreProgress = $scope.container[$scope.district]['stores'][thisStore]['sales']['formulagroup'][thisGoal['formulalist'].name];
			for(tiers in thisGoal.format){
				var thisTier = thisGoal.format[tiers];
				var thisTierGoal = thisTier.progress*progress/100;
				
				var thisTierCash = thisTier.percentpayed*cash/100;
				//console.log(thisTierGoal+"  VS "+ thisStoreProgress);
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
				percentPayed = (thisStoreProgress/nextGoal)*nextPay;
				//console.log(percentPayed);
				storePayed = percentPayed * nextPay; 
			}
			else if (typeof nextGoal == 'undefined'){
				percentPayed = (thisStoreProgress/passedGoal)*passedPay;
				storePayed = percentPayed * passedPay;
			}
			else{
				//console.log(nextGoal);
				//console.log(passedGoal);
				
				
				percentPayed=( ((1-((nextGoal-thisStoreProgress)/(nextGoal-passedGoal)))*(nextPayPercent-passedPayPercent))+passedPayPercent)*cash;
				
			}
			
			$scope.goalstorelist[goals]['StorePay']=percentPayed;
			$scope.goalstorelist[goals]['EmployeePay']=(percentPayed*(thisEmployeeProgress/thisStoreProgress));
			
			$scope.goalstorelist[goals]['PercentPay']=$scope.goalstorelist[goals]['StorePay']/thisStoreProgress;
			if(isNaN($scope.goalstorelist[goals]['EmployeePay'])){
				$scope.goalstorelist[goals]['EmployeePay'] = 0;
			}
			if(isNaN($scope.goalstorelist[goals]['PercentPay'])){
				$scope.goalstorelist[goals]['PercentPay'] = nextPay;
			}
			currentTarget.sum = currentTarget.sum +$scope.goalstorelist[goals]['EmployeePay'];
			//console.log($scope.goalstorelist[goals]['PercentPay']);
			
		}
	} 
	
	
	}
	}
	currentTarget['gp']=$scope.container['userstore'][currentTarget.name]['sales']['GrossProfit']['GP'];
	$scope.userArray.push(currentTarget);
	$scope.container['userstore'][those]= currentTarget;
	
	}
	//console.log($scope.container['userstore']);
}