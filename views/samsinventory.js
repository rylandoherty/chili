

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('SamsInventoryCtrl', SamsInventoryCtrl);

// Inject my dependencies
SamsInventoryCtrl.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function SamsInventoryCtrl($routeParams, $scope, $window) {
	//Html scope variables
	$scope.thisGuy = $window.user;
	//Load Date Stuff settings;
	
	$scope.recont = function(){
		var from = $scope.stuff.selectedDate = document.getElementById('date-picki').value;
	var today = $scope.stuff.selectedDate = document.getElementById('date-pickir').value;
	
	$scope.tradeincredit = samProxy.getPTARTradeIn(from, today);
	
	
	console.log($scope.tradeincredit);	
	}
	
	$scope.recon = function(){
	var today = new Date();
	var firstofmonth = new Date(today.getFullYear(), today.getMonth(), 1);
	var lastofmonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
	$scope.tradeincredit = samProxy.getPTARTradeIn(dateToForm(firstofmonth), dateToForm(lastofmonth));
	
	
	console.log($scope.tradeincredit);	
	}
	$scope.recon();
	//Load real Stuff;
	
	$scope.currentInvoice = [];
	$scope.currentRefund = [];
	$scope.phobioDiscrep = samProxy.loadPhobioDiscrep();
	$scope.phoneList = samProxy.loadProductCatalogPhones();
	$scope.inventoryList = samProxy.loadStockInventory();
	$scope.sellInventoryList = samProxy.loadStockInventory();
	$scope.customerList = samProxy.loadCustomerList();
	$scope.phobioList = samProxy.loadPhobioList();
	$scope.limitedPhobioList = samProxy.loadPhobioMinusInventory();
	$scope.phobioSkuList = samProxy.loadPhobioSkuList();
	$scope.invoiceList = samProxy.loadInvoices();
	$scope.trxList = samProxy.loadTrx();
	console.log($scope.phobioDiscrep);
	console.log($scope.phobioList);
	console.log($scope.invoiceList);
	
	$scope.stuff = {};
	$scope.stuff.phobio = {};
	var district = $window.district;
 	var today = new Date();
 	$scope.currentWeekCode = 0;
 	
 	$scope.reload = function(){
	 	$scope.currentInvoice = [];
		$scope.currentRefund = [];
		$scope.phobioDiscrep = samProxy.loadPhobioDiscrep();
		$scope.phoneList = samProxy.loadProductCatalogPhones();
		$scope.inventoryList = samProxy.loadStockInventory();
		$scope.sellInventoryList = samProxy.loadStockInventory();
		$scope.customerList = samProxy.loadCustomerList();
		$scope.phobioList = samProxy.loadPhobioList();
		$scope.limitedPhobioList = samProxy.loadPhobioMinusInventory();
		$scope.phobioSkuList = samProxy.loadPhobioSkuList();
		$scope.invoiceList = samProxy.loadInvoices();
		$scope.trxList = samProxy.loadTrx();
		$scope.stuff = {};
		$scope.stuff.phobio = {};
		$scope.currentWeekCode = 0;
 	}
 	
 	$scope.setHidden = function(phob){
 		samProxy.setHidden(phob);
 	}
 	$scope.getTotalCost = function(items){
 		var x = 0;
 		for(each in items){
 			x=x+items[each].sellprice;
 		}
 		return x;
 	}
 	$scope.getTotalGP = function(items){
 		var x = 0;
 		for(each in items){
 			x=x+(items[each].sellprice-items[each].cost);
 		}
 		return x;
 	}
 	$scope.getInvoiceTotal = function(items){
 		var x = 0;
 		for(each in items){
 			x=x+items[each].soldfor;
 		}
 		return x;
 	}
 	$scope.getInvoiceTotalCost = function(items){
 		var x = 0;
 		for(each in items){
 			x=x+items[each].COST;
 		}
 		return x;
 	}
 	
 	$scope.finalizeInvoice = function(){
 		
 		samProxy.finalizeInvoice($scope.currentInvoice, $scope.stuff.sellToCustomer);
 		$scope.inventoryList = samProxy.loadStockInventory();
 		$scope.invoiceList = samProxy.loadInvoices();
 		$scope.currentInvoice=[];
 	}
 	$scope.finalizeRefund = function(){
 		console.log($scope.currentRefund);
 		
 		samProxy.finalizeRefund($scope.currentRefund, $scope.stuff.invoiceLookup);
 		$scope.inventoryList = samProxy.loadStockInventory();
 		$scope.invoiceList = samProxy.loadInvoices();
 		$scope.currentRefund=[];
 		
 	}
 	
 	$scope.addToInvoice = function(ite){
 		$scope.currentInvoice.push(ite);
 		for(each in $scope.sellInventoryList){
 			if($scope.sellInventoryList[each].imei == ite.imei){
 				delete $scope.sellInventoryList[each];
 			}
 			
 		}
 		
 		
 	}
 	
 	$scope.addToRefund = function(ite){
 		if($scope.currentRefund.indexOf(ite)==-1){
 		$scope.currentRefund.push(ite);
 		}
 				
 	}
 	$scope.removeFromRefund = function(ite){
 		for(each in $scope.currentRefund){
 			if($scope.currentRefund[each].IMEI == ite.IMEI){
 				$scope.currentRefund.splice(each,1);
 			}
 			
 		}
 				
 	}
 	
 	$scope.removeFromInvoice = function(ite){
 		$scope.sellInventoryList.push(ite);
 		for(each in $scope.currentInvoice){
 			if($scope.currentInvoice[each].imei == ite.imei){
 				$scope.currentInvoice.splice(each,1);
 			}
 			
 		}
 		
 		
 		
 	}
 	
 	
 	
	$scope.updateSamInventorySellPrice = function(a,b){
	
	samProxy.updateSamInventorySellPrice(a,b);
 	}

	$scope.updatePhobioSkuSellPrice = function(a,b){
	
	samProxy.updatePhobioSkuSellPrice(a,b);
 	}
 	$scope.updatePhobioSkuSellPriceDmg = function(a,b){
	
	samProxy.updatePhobioSkuSellPriceDmg(a,b);
 	}
 	$scope.updatePhobioSkuCost = function(a,b){
	
	samProxy.updatePhobioSkuCost(a,b);
 	}
 	$scope.updatePhobioSkuCostDmg = function(a,b){
	
	samProxy.updatePhobioSkuCostDmg(a,b);
 	}
 	$scope.addPhobioComment = function(a){
	
	samProxy.updatePhobioComment(a);
 	}
 	
 	$scope.testfunction = function(){
 		$scope.phoneList = samProxy.loadProductCatalogPhones();
 		console.log($scope.phoneList);
 	
 	}
 	$scope.addCustomer = function(name){
 		samProxy.addCustomer(name);
 		$scope.customerList = samProxy.loadCustomerList();
 	
 	}
 	$scope.addPhobioPhone = function(a){
 		$scope.stuff.serverResponse = samProxy.addPhobioPhone(a);
 		$scope.inventoryList = samProxy.loadStockInventory();
 		$scope.limitedPhobioList = samProxy.loadPhobioMinusInventory();
 	}
 	$scope.addPhone = function(){
 		console.log($scope.stuff);
 		$scope.stuff.serverResponse = samProxy.addPhone($scope.stuff.selectedPhone , $scope.stuff.phoneaddimei, $scope.stuff.phoneaddcost, $scope.stuff.phoneaddsource );
 		$scope.inventoryList = samProxy.loadStockInventory();
 	
 	}
 	$scope.deleteInventoryPhone = function(imei){
 		samProxy.deletePhone(imei);
 		$scope.inventoryList = samProxy.loadStockInventory();
 	}
	$scope.hidefromsam = function(phone, value){
	console.log(phone);
	console.log(value);
	
 		samProxy.hidePhoneFromSam(phone,value);
 		$scope.phoneList = samProxy.loadProductCatalogPhones();
 	
 	}
 	
 	function dateToForm (date){
		return  date.getFullYear()+""+("0"+(date.getMonth()+1)).slice(-2)+("0"+date.getDate()).slice(-2);
	}
	
	
	
}