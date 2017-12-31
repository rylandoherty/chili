// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('AdminCtrl', AdminCtrl);

// Inject my dependencies
AdminCtrl.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function AdminCtrl($routeParams, $scope, $window) {
	//Html scope variables
	
	$scope.ab= [0];
	$scope.lastFormula;
	$scope.formulaList = [];
	$scope.decisions = ['('];
	$scope.activeGroup;
	
	$scope.setActiveFormula = function(formula){
		
		for(var formy in $scope.formulas){
			if($scope.formulas[formy].id != formula.id){
			$scope.formulas[formy].isSelected = false;	
			}
			
		}
	}
	
	$scope.setFormulaList = function(add){
		
		
		
		
		
			
		$scope.getNextDecisions(add);	
		
		$scope.formulaList.push(add);
		
		}
		$scope.saveFormula = function(name){
			var formulaString = "";
			for(var stuff in $scope.formulaList ){
				formulaString = formulaString + $scope.formulaList[stuff] +',';
			}
			console.log(name);
			groupProxy.saveFormula(name, formulaString);
		}
		
		
	$scope.getNextDecisions = function(beep){
		console.log(beep);
		$scope.decisions = [];
		switch(beep){
			case '(':
				$scope.decisions = ["(",'GP','QTY'];
				
				
				break;
			case ')':
				$scope.decisions = ["+","-","*","/",")","("];
				break;
			case 'GP':
			case 'QTY':
				for(var cats in $scope.categories){
					$scope.decisions.push($scope.categories[cats].categoryid);
				}
					
				break;
			case '+':
			case '-':
			case '*':
			case '/':
				$scope.decisions = ["(",'GP','QTY'];
				
				break;
			default:
				$scope.decisions = ["+","-","*","/",")","("];
				
				
				break;
			
	}
	$scope.decisions.push(" ");
	}
	
	
	
	
	
	
	
	
	
	$scope.formula= {};
	$scope.formula.addOne = 0;
	$scope.choice = {};
	
	
	$scope.catType;
	$scope.addName = "";
	$scope.filterCategory = "";
	$scope.activeGroup;
	$scope.groupIsSelected=false;
	$scope.groupType;
	//$scope.groupDirect = loadProxy;
	$scope.formulas;
	var dontdoanything = 0;
	$scope.categories;
	
	//$scope.allSales = loadProxy.getSales('201706');
	
	$scope.setNameForFormula = function (name,id){
		console.log(name+"ya"+id);
		groupProxy.setFormulaName(name,id);
	}
	$scope.setFormula = function (formula){
		
	}
	$scope.formulaDecode = function (formula){
		
	}
	

	$scope.createGroup = function(name, catType){
		
		groupProxy.createGroup(name,catType);
		$scope.categories = groupProxy.getGroups();
		
	}
	$scope.createFormula = function(){
		
		groupProxy.createFormula();
		$scope.reload();
		
	}
	$scope.deleteGroup = function(name){
		
		groupProxy.deleteGroup(name);
		$scope.categories = groupProxy.getGroups();
		
	}
	$scope.reload= function(){
		$scope.categories = groupProxy.getGroups();
		$scope.formulas = groupProxy.getFormula();
		if(typeof $scope.activeGroup !== 'undefined')
		for(var groups in $scope.categories){
			
			
			if($scope.categories[groups].categoryid == $scope.activeGroup.categoryid){
				$scope.activeGroup = $scope.categories[groups];
				
			}
		}
	}
	
	$scope.addSkuToGroup = function(skuToAdd){
		console.log($scope.activeGroup.categoryid);
		console.log(skuToAdd);
		groupProxy.addSkuToGroup($scope.activeGroup.categoryid,skuToAdd);
		$scope.reload();
		
				
		

	}
	
	$scope.addCategoryToGroup = function(sku,index){
		
		groupProxy.addCategoryToGroup($scope.activeGroup.categoryid,sku,index);
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
		console.log("IM FUCKING DUMB");
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
	
	
	 $scope.reload();
}