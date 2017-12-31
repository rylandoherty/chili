

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('GoalFormatCtrl', GoalFormatCtrl);

// Inject my dependencies
GoalFormatCtrl.$inject = ['$routeParams','$scope','$window','userlist'];

// Now create our controller function with all necessary logic

function GoalFormatCtrl($routeParams, $scope, $window, userlist ) {
	//Html scope variables
	$scope.thisGuy = $window.user;
	//Load stuff settings;
	//Load real Stuff;
	//$window.userlist = userlist.gethoursworkedbystore(2017,10);
	  $scope.groups = groupProxy.loadFormula();
	  $scope.f={};
	$scope.goalformatgrouplist =[];
	$scope.goalformatlist =[];
	$scope.goalstorelist =[];
	$scope.filt = 0;
	$scope.newgoalformatname ;
	$scope.district="District Sanat";
	$scope.newgoalstorename;
	console.log($window.sales);
	$scope.container = {};
	$scope.container = $window.sales;
	console.log($scope.container);
	$scope.g={};
	$scope.g.a={};
	$scope.g.a.truepercent ={};
	angular.element(document).ready(function() 
{ 
	$scope.$watch('g.a', function() {
		console.log("hey");
		$scope.goalformatArray = [];
		var b = $scope.g.a;
		
		$scope.g.a.truepercent = ($scope.container[$scope.district]['stores'][b.stores.storeid]['sales']['formulagroup'][b.formulalist.name]);
        
       
        
    });
	})
	$scope.name;
	$scope.stores = loadProxy.loadDistrict();
	console.log($scope.stores);
	$scope.storeSelection ;
	$scope.selected ;
	$scope.percentpayed;
	$scope.progress;
	$scope.hidegoalstore = false;
	$scope.hidegoalformat = false;
	$scope.creategoalformatgroup = function(name){
		goalformatProxy.newgoalformatgroup(name);
		$scope.loadgoalformatgroup();
	}
	$scope.loadgoalformatgroup = function(){
		$scope.goalformatgrouplist= goalformatProxy.loadgoalformatgroup();
		
	}
	$scope.setSelected = function(select){
		$scope.selected= select;
	}
	$scope.deletegoalformatgroup = function(id){
		goalformatProxy.deletegoalformatgroup(id);
		$scope.loadgoalformatgroup();
		$scope.loadgoalstore();
	}
	$scope.creategoalformat = function(){
		console.log($scope.selected);
		goalformatProxy.newgoalformat($scope.selected.id);
		$scope.loadgoalformatgroup();
	}
	$scope.setgoalformatprogress = function(a,b){
		goalformatProxy.setgoalformatprogress(a,b);
		$scope.loadgoalstore();
	}
	$scope.setgoalformatpercentpayed = function(a,b){
		goalformatProxy.setgoalformatpercentpayed(a,b);
		$scope.loadgoalstore();
	}
	$scope.creategoalstore = function(f){
		console.log(f);
		goalformatProxy.creategoalstore(f);
		$scope.loadgoalstore();
		$scope.f={};
	}
	$scope.deletegoalstore= function(id){
		goalformatProxy.deletegoalstore(id);
		$scope.loadgoalstore();
	}
	$scope.setgoalcash = function(a){
		console.log(a);
		goalformatProxy.setgoalcash(a);
		$scope.loadgoalstore();
	}
	$scope.setgoalquantity = function(a){
		goalformatProxy.setgoalquantity(a);
		$scope.loadgoalstore();
	}
	$scope.setgoalformatgroup = function(a){
		goalformatProxy.setgoalformatgroup(a);
		$scope.loadgoalstore();
	}
	
	$scope.loadgoalstore = function(){
		
		$scope.goalstorelist = goalformatProxy.loadgoalstore("2017","11");
		
	}
	$scope.loadgoalstore();
	$scope.loadgoalformatgroup();
	console.log(goalformatProxy.loadgoalformatgroup());
	console.log($scope.goalstorelist);
}