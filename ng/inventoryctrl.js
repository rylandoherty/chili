// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('InventoryCtrl', InventoryCtrl);

// Inject my dependencies
InventoryCtrl.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function InventoryCtrl($routeParams, $scope, $window) {
	this.inventoryCount = $window.theInv;
 $scope.productList =  $window.theProductList;
  $scope.imeisearch = '0';
  $scope.setIMEI = function (index){
		$scope.imeisearch = index;
	}
  this.name = "Inventory";
  this.params = $routeParams;
  this.listOfModels = [];
  this.lastModified = "";
  this.listOfModels.sumCost = [0,0,0];
  this.listOfModels.orderText = ["","",""];
  for(var product in $scope.productList){
  	var thisProduct = $scope.productList[product];
  	
  	var RQSKU = thisProduct['productlistid'];
  	var name = thisProduct['name'];
  	
  	var cost = thisProduct['cost'];
  	// HFX,EBW,FRA  [stock][toOrder][cost]
  	this.listOfModels.push([RQSKU,name,[0,0,0],[0,0,0],[0,0,0],[thisProduct['stockFufillHalifax'],thisProduct['stockFufillBridgewater'],thisProduct['stockFufillFranklin']]]);
  	
  	this.listOfStores = ['Halifax, Ma','E Bridgewater','Franklin MA'];
  	for(var stock in thisProduct['inventory']){
		var soldAt = thisProduct['inventory'][stock]['store'];
	  
	  	var store;
	  	
	  	switch (soldAt) {
	    case this.listOfStores[0]:
	        this.listOfModels[product][2][0]=this.listOfModels[product][2][0]+1;
	        break;
	    case this.listOfStores[1]:
	        this.listOfModels[product][2][1]=this.listOfModels[product][2][1]+1;
	        break;
	    case this.listOfStores[2]:
	        this.listOfModels[product][2][2]=this.listOfModels[product][2][2]+1;
	        break;
	  	 }
	  	
  	
  	}
  	
  	for(var i=0;i<3;i++){
  	this.listOfModels[product][3][i]=this.listOfModels[product][5][i]-this.listOfModels[product][2][i];
  	if(this.listOfModels[product][3][i]<0){this.listOfModels[product][3][i]=0;}
  	this.listOfModels[product][4][i]=this.listOfModels[product][3][i]*cost;
  	this.listOfModels.sumCost[i] = this.listOfModels[product][4][i]+this.listOfModels.sumCost[i];
  	if(this.listOfModels[product][3][i]>0){
  	this.listOfModels.orderText[i] = this.listOfModels.orderText[i]+ "\n"+ name + "   " +  this.listOfModels[product][3][i]  ;
  	}
  	
  	}
  	
  }
  }
 
  
