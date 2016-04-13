// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('ProductCtrl', ProductCtrl);

// Inject my dependencies
ProductCtrl.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function ProductCtrl($routeParams, $scope, $window) {
	$scope.productList =  $window.theProductList;
	
	$scope.changeCost = function (product,cost){
		var item = $scope.productList[product];
		productListProxy.setCost(item['productlistid'],cost);
		
	}
	$scope.changeName = function (product,name){
		var item = $scope.productList[product];
		productListProxy.setName(item['productlistid'],name);
		
	}
	$scope.changeHidden = function (product){
		var item = $scope.productList[product];
		productListProxy.setHidden(item['productlistid']);
		
	}
	
	$scope.changeStock = function ( product,location,addOrRemove ) {
    this.listOfStores = ['HFX','EBW','FRA'];
    var item = $scope.productList[product];
    switch (location) {
	    case this.listOfStores[0]:
	        if(addOrRemove==0&&item['stockFufillHalifax']!=0){
	        	item['stockFufillHalifax']=
  				item['stockFufillHalifax']-1;
  				productListProxy.setStock(item['productlistid'],"stockFufillHalifax","-1");
	        }
	        else if(addOrRemove==1){
	        	item['stockFufillHalifax']=
  				item['stockFufillHalifax']+1;
  				productListProxy.setStock(item['productlistid'],"stockFufillHalifax","1");
	        }
	        break;
	    case this.listOfStores[1]:
	        if(addOrRemove==0&&item['stockFufillBridgewater']!=0){
	        	item['stockFufillBridgewater']=
  				item['stockFufillBridgewater']-1;
  				productListProxy.setStock(item['productlistid'],"stockFufillBridgewater","-1");
	        }
	        else if(addOrRemove==1){
	        	item['stockFufillBridgewater']=
  				item['stockFufillBridgewater']+1;
  				productListProxy.setStock(item['productlistid'],"stockFufillBridgewater","1");
	        }
	        break;
	    case this.listOfStores[2]:
	        if(addOrRemove==0&&item['stockFufillFranklin']!=0){
	        	item['stockFufillFranklin']=
  				item['stockFufillFranklin']-1;
  				productListProxy.setStock(item['productlistid'],"stockFufillFranklin","-1");
	        }
	        else if(addOrRemove==1){
	        	item['stockFufillFranklin']=
  				item['stockFufillFranklin']+1;
  				productListProxy.setStock(item['productlistid'],"stockFufillFranklin","1");
	        }
	        break;
	  	 }
  
}
 
 
  
  this.name = "ProductManagement";
  this.params = $routeParams;
  
  
  for(var product in $scope.productList){
  	var thisProduct = $scope.productList[product];
  	
  	//this.RQSKU = thisProduct['productlistid'];
  	//this.name = thisProduct['name'];
  	//this.listOfStores = [thisProduct['stockFufillHalifax'],thisProduct['stockFufillBridgewater'],thisProduct['stockFufillFranklin']];
  	
  }
  }
  function changeStock(product,location){
  	console.log("HEY");
  	productManagement.productList[product['productlistid']]['stockFufillHalifax']=productManagement.productList[product['productlistid']]['stockFufillHalifax']+1;
  	
  }
 
  
