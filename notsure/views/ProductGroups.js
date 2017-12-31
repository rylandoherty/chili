

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('ProductGroupsCtrl', ProductGroupsCtrl);

// Inject my dependencies
ProductGroupsCtrl.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function ProductGroupsCtrl($routeParams, $scope, $window ) {
	//Html scope variables
	
	//Load stuff settings;
	//Load real Stuff;
		
	$scope.formula= {};
	$scope.formula.addOne = 0;
	$scope.choice = {};
	
	
	$scope.catType;
	$scope.addName = "";
	$scope.addproductsku = "";
	$scope.addproductname = "";
	$scope.filterCategory = "";
	$scope.activeGroup;
	$scope.groupIsSelected=false;
	$scope.groupType;
	//$scope.groupDirect = loadProxy;
	$scope.formulas;
	var dontdoanything = 0;
	$scope.categories;
	
	
	
	
	$scope.createGroup = function(name, catType){
		groupProxy.createGroup(name,catType);
		$scope.categories = groupProxy.getGroups();
	}
	$scope.deleteGroup = function(name){
		groupProxy.deleteGroup(name);
		$scope.categories = groupProxy.getGroups();
	}
	$scope.addSkuToGroup = function(skuToAdd, nameOfProduct){
		console.log($scope.activeGroup.productgroupid);
		console.log(skuToAdd);
		groupProxy.addSkuToGroup($scope.activeGroup.productgroupid,skuToAdd,nameOfProduct);
		$scope.reload();
	}
	$scope.addCategoryToGroup = function(sku,index){
		groupProxy.addCategoryToGroup($scope.activeGroup.productgroupid,sku,index);
		$scope.reload();
	}
	$scope.removeItem = function(skuid){
		console.log(skuid);
		groupProxy.removeItem(skuid);
		$scope.reload();
	}
	$scope.getCategoryArray = function (longcat){
		var catString = longcat.substring(2,longcat.length);
		var catArray = [];
		var indicatorCount = 0;
		
		for(var a = 1;a<longcat.length;a++){
			if(catString.charAt(a)=='>' && indicatorCount == 0){
				indicatorCount++;
			}
			else if(catString.charAt(a)=='>'){
				
				indicatorCount= 0;
				catArray.push();
				catArray[catArray.length] = catString.substring(2,a-2);
				catString = catString.substring(a,catString.length);
				a=1;
			}
			
			
		}
		catArray[catArray.length] = catString.substring(2,a);
		return catArray;
	}
	$scope.setActiveGroup = function(groupname){
		
		console.log(groupname);
		for(var each in $scope.categories){
			$scope.categories[each].groupIsSelected = false;
			if($scope.categories[each].categoryid == groupname.categoryid )
			{
				$scope.groupType = $scope.categories[each].type;
					
			}
		}
		$scope.activeGroup = groupname;
		
	}
	$scope.containsTheItem = function (itemList){
		for(var items in $scope.activeGroup.items){
			if (typeof $scope.activeGroup.items[items].categorycode !== 'undefined'){
				var levelcounter = 0;
				var indicatorCount = 0; 
				var level = $scope.activeGroup.items[items].categorydepth;
				var catString = $scope.activeGroup.items[items].categorycode;
				var lengthToCapture = 0;
				for(var a = 1; a<=catString.length;a++){
					lengthToCapture =a ;
					if(catString.charAt(a)=='>' && indicatorCount == 0){
							indicatorCount++;
					}
					else if(catString.charAt(a)=='>'){
						
						levelcounter++;
						indicatorCount = 0;
						
					}
					if(levelcounter == level+1){
						lengthToCapture = a-2;
						break;
						
					}
				}
			
				
				if(itemList.indexOf( catString.substring(1,lengthToCapture))>=0){
					
					return false;
				}
			}
			if(itemList == $scope.activeGroup.items[items].productSKU){
				return false;
			}
		}
		return true;
	}
	$scope.reload= function(){
		$scope.categories = groupProxy.getGroups();
		//$scope.formulas = groupProxy.getFormula();
		if(typeof $scope.activeGroup !== 'undefined')
		for(var groups in $scope.categories){
			
			
			if($scope.categories[groups].categoryid == $scope.activeGroup.categoryid){
				$scope.activeGroup = $scope.categories[groups];
				
			}
		}
	}
	
	 $scope.reload();
	
}