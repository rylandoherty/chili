// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('ProductCtrl', ProductCtrl);

// Inject my dependencies
ProductCtrl.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function ProductCtrl($routeParams, $scope, $window) {
		$scope.getColor = function (name){
		//var item = $scope.productList[product];
		var colorArray = [['ROSE GOLD','pink'],['GOLD','#ffc61a'],['GRAY','#999999'],['SILVER','#bfbfbf'],['BLACK','#999999'],['WHITE','#ffffcc'],['MOTXT15','#79d279'],['VERIZON','#E32636']];
		
		
		if(!name){
			
		}
		else{
			for(var colors in colorArray){
			if(name.toUpperCase().indexOf(colorArray[colors][0])>-1){
				
			return colorArray[colors][1];
			}
		}
			
		return "white";
		}
	}
		$scope.userThing =  $window.userStuff;
		$scope.productList =  $window.theProductList;
		$scope.storeArray =   $window.storeStuff.storeList;
		$scope.totalcost = 0;
		console.log($window);
	
	for(var stores in $scope.storeArray){
		console.log($scope.storeArray);
 					$scope.productList[$scope.storeArray[stores].storeid]={};
 					$scope.productList[$scope.storeArray[stores].storeid].ordertotalcost = 0;
				}
	
 	for(var products in $scope.productList){
	$scope.productList[products].color = $scope.getColor($scope.productList[products]['name']);
 				for(var stores in $scope.storeArray){
 					
 					$scope.productList[products][$scope.storeArray[stores].storeid]={};
 				$scope.productList[products][$scope.storeArray[stores].storeid].inventory = 0;
 				$scope.productList[products][$scope.storeArray[stores].storeid].trueorder = 0;
 					$scope.productList[products][$scope.storeArray[stores].storeid].ordercost = 0;
				}
				for(var stock in $scope.productList[products].inventory){
 				
 				if(angular.isDefined($scope.productList[products][$scope.productList[products].inventory[stock].storename].inventory)){
 				$scope.productList[products][$scope.productList[products].inventory[stock].storename].inventory += 1;
 				}
 				else
 				{
 				$scope.productList[products][$scope.productList[products].inventory[stock].storename].inventory = 1;
 				}
 				
 			}
				
 			for(var storex in $scope.productList[products].settings){
 				
 				 
 				  $scope.productList[products][$scope.productList[products].settings[storex].storename].settings =
 					 $scope.productList[products].settings[storex].desiredcount;
 				
 				
 			}
 			
 			for(var stores in $scope.storeArray){
 				var storename = $scope.storeArray[stores].storeid;
 				if($scope.productList[products][storename].inventory<$scope.productList[products][storename].settings){
 					var coster = $scope.productList[products].cost +" ";
 					if(coster.substring(0,1)=='$'){
 					$scope.productList[products]['cost'] = coster.substring(1,coster.length);	
 					
 					}
 					
 					$scope.productList[products][storename].order = $scope.productList[products][storename].settings-$scope.productList[products][storename].inventory;
 					$scope.productList[products][storename].trueorder = $scope.productList[products][storename].order;
 					
 					$scope.productList[products][storename].ordercost =  $scope.productList[products][storename].order * $scope.productList[products]['cost'];
 					$scope.productList[storename].ordertotalcost += $scope.productList[products][storename].ordercost;
 					
 				}
 				else{
 					$scope.productList[products][storename].order = 0;
 					
 				}
 				
 				}
				
		}
				
				

	

	$scope.storeSelection = "";
	
	$scope.count=0;
	
		$scope.gettotalcosttrueorder = function (store){
		
		$scope.productList[store]['ordertotalcost'] = 0;
		
		for(var products in $scope.productList){
 				var storename = store;
 				
 				if($scope.productList[products][storename].inventory<$scope.productList[products][storename].settings){
 					var coster = $scope.productList[products].cost +" ";
 					if(coster.substring(0,1)=='$'){
 					$scope.productList[products]['cost'] = coster.substring(1,coster.length);	
 					}
 					
 					
 					$scope.productList[products][storename]['ordercost'] =  $scope.productList[products][storename].trueorder * $scope.productList[products]['cost'];
 					$scope.productList[storename]['ordertotalcost'] += $scope.productList[products][storename]['ordercost'];
 				}
 				else{
 					$scope.productList[products][storename]['order'] = 0;
 					
 				}
 				
 				}
 				
 				return $scope.productList[storename]['ordertotalcost'];
 				}
	
	
	$scope.gettotalcost = function (store){
		console.log(store);
		$scope.productList[store]['ordertotalcost'] = 0;
		
		for(var products in $scope.productList){
 				var storename = store;
 				if($scope.productList[products][storename].inventory<$scope.productList[products][storename].settings){
 					var coster = $scope.productList[products].cost +" ";
 					if(coster.substring(0,1)=='$'){
 					$scope.productList[products]['cost'] = coster.substring(1,coster.length);	
 					}
 					
 					$scope.productList[products][storename].order = $scope.productList[products][storename].settings-$scope.productList[products][storename].inventory;
 					
 					$scope.productList[products][storename]['ordercost'] =  $scope.productList[products][storename]['trueorder'] * $scope.productList[products]['cost'];
 					$scope.productList[storename]['ordertotalcost'] += $scope.productList[products][storename]['ordercost'];
 				}
 				else{
 					$scope.productList[products][storename]['order'] = 0;
 					
 				}
 				
 				}
 				
 				return $scope.productList[storename]['ordertotalcost'];
 				}
	
	
	$scope.setstoreSelection = function (store){
		$scope.storeSelection = store;
		
	}
		$scope.setTyper = function (text){
		
		$scope.typer = text;
		
	}
	$scope.changeOrder = function (product,store,newOrder){
		
		$scope.productList[product][store]['trueorder'] = newOrder;
		$scope.gettotalcosttrueorder(store);
		
	}
	$scope.changeCost = function (product,store,cost){
		
		productListProxy.setCost(product,cost);
		$scope.gettotalcost(store);
		
	}
	$scope.changeName = function (product,name){
		var item = $scope.productList[product];
		productListProxy.setName(item['RQSKU'],name);
		
	}
	$scope.changeHidden = function (product){
		//var item = $scope.productList[product];
		productListProxy.setHidden(product);
		
	}
	
	$scope.changeDesired = function (product,store,countx){
		
		$scope.gettotalcost(store);
		productListProxy.setStock(product,store,countx);
		
	}
 
 
  
  this.name = "ProductManagement";
  this.params = $routeParams;
  
  }
  function changeStock(product,location){
  
  	productManagement.productList[product['RQSKU']]['stockFufillHalifax']=productManagement.productList[product['RQSKU']]['stockFufillHalifax']+1;
  	
  }
 
  
