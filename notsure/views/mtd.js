

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
	var today = new Date();
	var lastofmonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
	$scope.showTrending = false;
	console.log(lastofmonth.getDate());
	$scope.HideX = false;
	$scope.trendRate = lastofmonth.getDate()/today.getDate();
	$scope.thisGuy = $window.user;
	//Load stuff settings;
	//Load real Stuff;
	$scope.district = ['District Sanat'];
	$scope.usersHours = $window.userlist;
	$scope.mtdz = {};
	$scope.mtdz.datetype = 'MTD';
	$scope.container = {};
	
	//console.log($scope.container);
	$scope.groupz = groupProxy.loadFormula();
	console.log($scope.groupz);
	$scope.groups = [];
	for(var thoseform in $scope.groupz){
		$scope.groups[$scope.groupz[thoseform]['orderlocation']-1]=$scope.groupz[thoseform];
	}
    $scope.categories = groupProxy.getGroups();
	
	$scope.mtdz.formulatoview = {};
	$scope.mtdz.sortType = '';
	
	console.log($scope.groups);
	$scope.simpleContainer = [];
	$scope.updateEmployeeArray = function (){
		$scope.simpleContainer = [];
		console.log($scope.container['userstore']);
		for(var them in $scope.container['userstore']){
			$scope.simpleContainer.push({name:$scope.container['userstore'][them].name});
			for(var each in $scope.groups){
				$scope.simpleContainer[$scope.simpleContainer.length-1][$scope.groups[each]['name']] = $scope.container['userstore'][$scope.container['userstore'][them].name]['sales']['formulagroup'][$scope.groups[each]['name']];
			}
	}
	console.log($scope.simpleContainer);
	}
	$scope.setDate = function (){
		$scope.container = $window.sales.dateSystem[$scope.mtdz['datetype']];
		
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
    
$scope.container = $window.sales.dateSystem['MTD'];
	$scope.updateEmployeeArray();
}