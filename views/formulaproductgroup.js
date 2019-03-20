

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('formulaproductgroupCtrl', formulaproductgroupCtrl);

// Inject my dependencies
formulaproductgroupCtrl.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function formulaproductgroupCtrl($routeParams, $scope, $window ) {
	//Html scope variables
	$scope.thisGuy = $window.user;
	//Load stuff settings;
	//Load real Stuff;
	$scope.ab= [0];
	$scope.lastFormula;
	$scope.formulaList = [];
	$scope.decisions = ['('];
	$scope.activeGroup;
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
	$scope.formulaviewgroups = groupProxy.loadFormulaViewGroup();
	$scope.setActiveFormula = function(formula){
		for(var formy in $scope.formulas){
			if($scope.formulas[formy].id != formula.id){
			$scope.formulas[formy].isSelected = false;	
			}
		}
	}
	$scope.saveViewGroup = function (fpg){
		console.log(fpg);
		groupProxy.saveViewGroup(fpg);
		console.log("Dogtownusa");
	}
	$scope.saveColor = function (fpg){
		groupProxy.savetheColor(fpg);
	}
		$scope.saveDecimal = function (fpg){
		groupProxy.savetheDecimal(fpg);
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
					$scope.decisions.push($scope.categories[cats].productgroupid);
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
	$scope.setNameForFormula = function (name,id){
		
		groupProxy.setFormulaName(name,id);
	}
	$scope.deleteFormula = function (id){
		
		groupProxy.deleteFormula(id);
	}
	
	$scope.setFormulaTrending = function (form){
		
		groupProxy.setFormulaTrending(form);
	}
	$scope.saveWarningAlert = function (form){
		
		groupProxy.saveWarningAlert(form);
	}
	$scope.saveBelowAverageAlert = function (form){
		
		groupProxy.saveBelowAverageAlert(form);
	}
	$scope.setshowpercentage = function (form){
		
		groupProxy.setshowpercentage(form);
	}
	
	
	$scope.setOrderLocation = function (form){
		
		groupProxy.setOrderLocation(form);
	}
	$scope.setFormula = function (formula){
		
	}
	$scope.formulaDecode = function (formula){
		
	}
	$scope.createFormula = function(){
		
		groupProxy.createFormula();
		$scope.reload();
		
	}
	$scope.reload= function(){
		$scope.categories = groupProxy.getGroups();
		$scope.formulas = groupProxy.getFormula();
		console.log($scope.formulas);
		
	}
	$scope.reload();
	
	
	
	
	
	
	
	
	
}