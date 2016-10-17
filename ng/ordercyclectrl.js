// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('OrderCycleCtrl', OrderCycleCtrl);

// Inject my dependencies
ProductCtrl.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function OrderCycleCtrl($routeParams, $scope, $window) {
		/*$scope.getColor = function (name){
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
	}*/
	
	var now = new Date(Date.now());
	
	
	
	
	var month = now.getMonth()+1; 
	var date = now.getDate();
	var lastdayofmonth = new Date(now.getFullYear(), month-1, 0);
	
	$scope.dateList = [];
	$scope.knownVendors = [];
	
	console.log((month+1)+"/"+date);
		$scope.rmaList = $window.rmaList;
		$scope.transferList = $window.transfers;
		$scope.receivedList = $window.receivedList;
		$scope.receivedInvoiceList = $window.receivedInvoiceList;
		$scope.listUniqueUploads = [];
		$scope.fileSelection = "";
		$scope.superObj = [];
		$scope.storeSelection = "";
		$scope.monthSelection ="";
		$scope.rqSelection ="";
		console.log($scope.receivedList);
		$scope.getFileList = function() {
			$scope.listUniqueUploads = [];
		for(var PO in $scope.receivedInvoiceList){
			//console.log($scope.receivedInvoiceList[PO]);
			//console.log($scope.storeSelection);
			if($scope.listUniqueUploads.indexOf($scope.receivedInvoiceList[PO]['filename'])==-1&&$scope.receivedInvoiceList[PO].store == $scope.storeSelection ){
				$scope.listUniqueUploads[$scope.listUniqueUploads.length]=$scope.receivedInvoiceList[PO]['filename'];
			}
		}
		
		}
		/////WORKING from and to javascript to control checkboxes and amounts
		$scope.setPairingA = function (checked){
			if($scope.rqSelection == true){
				
			}
		}
		$scope.setRQSelection = function (selection){
			$scope.rqSelection = selection;
		}
		$scope.getDateRangeFromReceivedInvoices = function (){
			var firstDay = 31;
			var lastDay = 0;
			var firstMonth = 13;
			var lastMonth = 0;
			var firstYear = 2100;
			var lastYear = 0000;
			var balanceRemaining = 0;
			for(var PO in $scope.receivedInvoiceList){
				
				if( $scope.receivedInvoiceList[PO]['filename']== $scope.fileSelection ){
					var readDate = $scope.receivedInvoiceList[PO]['Date'].split("/");
					//console.log(parseInt(readDate[0]));
					//console.log(parseInt(readDate[1]));
					//console.log(parseInt(readDate[2]));
					//console.log(firstMonth+"/"+firstDay+"-"+lastMonth+"/"+lastDay);
					if(parseInt(readDate[0])<firstMonth||
					(parseInt(readDate[1])<=firstDay&& parseInt(readDate[0])==firstMonth )){
						
						firstMonth = parseInt(readDate[0]);
						firstDay = parseInt(readDate[1]);
						firstYear = parseInt(readDate[2]);
					}
					if(  (parseInt(readDate[0])>lastMonth)   ||
					(parseInt(readDate[1])>=lastDay  &&  parseInt(readDate[0])==lastMonth)){
						
						lastMonth = parseInt(readDate[0]);
						lastDay = parseInt(readDate[1]);
						lastYear = parseInt(readDate[2]);
					}
					
				}
				
			}
			var dateRange = [];
			var lastdayoffirstmonth = new Date(firstYear, month-1, 0);
			$scope.dateList = [];
			$scope.superObj = [];
			for(var i = firstDay; i < lastdayoffirstmonth.getDate(); i++){
				$scope.dateList[$scope.dateList.length]= new Date(firstYear,firstMonth-1,i);
				$scope.superObj[$scope.dateList.length-1] = [];
				$scope.superObj[$scope.dateList.length-1]['date'] = new Date(firstYear,firstMonth-1,i);
					$scope.superObj[$scope.dateList.length-1]['purchased'] =[];
					for(var purchases in $scope.receivedInvoiceList){
						
						var thisSplitDate = $scope.receivedInvoiceList[purchases]['Date'].split("/");
						var saleDay = new Date(lastYear,thisSplitDate[0]-1,thisSplitDate[1]);
						var dateMatch = false;
						//console.log($scope.dateList[$scope.dateList.length-1]);
						//console.log(saleDay);
						//$scope.dateList[$scope.dateList.length-1]['purchased']={};
						if(saleDay.getDate() == $scope.dateList[$scope.dateList.length-1].getDate()){dateMatch=true;}
						
						//if($scope.storeSelection == $scope.receivedInvoiceList[purchases]['store']){console.log("WOOOO");}
						
					if($scope.storeSelection == $scope.receivedInvoiceList[purchases]['store']
					 		&& dateMatch)
							{
								
								var simpleInvoice = $scope.categorizePurchase($scope.receivedInvoiceList[purchases]);
								console.log(simpleInvoice);
								balanceRemaining = simpleInvoice.amount;
					$scope.superObj[$scope.dateList.length-1]['purchased']
					[$scope.superObj[$scope.dateList.length-1]['purchased'].length] = simpleInvoice;
						
						}
						
						}
						//$scope.dateList[$scope.dateList.length-1]['purchased']={};
						
							//$scope.dateList[$scope.dateList.length-1]['purchased'][$scope.receivedInvoiceList['receivedInvoiceid']] = $scope.receivedInvoiceList[purchases];
						}
			
			
			for(var i = 1; i <= lastDay; i++){
				$scope.dateList[$scope.dateList.length]= new Date(lastYear,lastMonth-1,i);
				$scope.superObj[$scope.dateList.length-1] = [];
				$scope.superObj[$scope.dateList.length-1]['date'] = new Date(lastYear,lastMonth-1,i)
				
					$scope.superObj[$scope.dateList.length-1]['purchased'] =[];
					for(var purchases in $scope.receivedInvoiceList){
						//$scope.vendorMapping($scope.receivedInvoiceList[purchases]);
						var thisSplitDate = $scope.receivedInvoiceList[purchases]['Date'].split("/");
						var saleDay = new Date(lastYear,thisSplitDate[0]-1,thisSplitDate[1]);
						var dateMatch = false;
						//console.log($scope.dateList[$scope.dateList.length-1]);
						//console.log(saleDay);
						//$scope.dateList[$scope.dateList.length-1]['purchased']={};
						if(saleDay.getDate() == $scope.dateList[$scope.dateList.length-1].getDate()){dateMatch=true;}
						
						//if($scope.storeSelection == $scope.receivedInvoiceList[purchases]['store']){console.log("WOOOO");}
						
					if($scope.storeSelection == $scope.receivedInvoiceList[purchases]['store']
					 		&& dateMatch)
							{
								
								var simpleInvoice = $scope.categorizePurchase($scope.receivedInvoiceList[purchases]);
								console.log(simpleInvoice);
								balanceRemaining = simpleInvoice.amount;
					$scope.superObj[$scope.dateList.length-1]['purchased']
					[$scope.superObj[$scope.dateList.length-1]['purchased'].length] = simpleInvoice;
						}
						
						}
						//$scope.dateList[$scope.dateList.length-1]['purchased']={};
						
							//$scope.dateList[$scope.dateList.length-1]['purchased'][$scope.receivedInvoiceList['receivedInvoiceid']] = $scope.receivedInvoiceList[purchases];
						
			}
	
			console.log($scope.superObj);
		}
		$scope.loadVendorMappings = function(){
			$scope.knownVendors = vendorMappingProxy.loadMappings();
			
		}
	$scope.setNewPurchaseCategory = function(header){
		var ignoreList = ['Date','INVOICE #','PAYMENTS','Store Transfer','VZW- RMA','Misc','RUNNING TOTAL'];
		for(var i = 0; $scope.knownVendors.length>i;i++){
			ignoreList[ignoreList.length]= $scope.knownVendors[i];
		}
		if (['Date','INVOICE #','PAYMENTS','Store Transfer','VZW- RMA','Misc','RUNNING TOTAL'].indexOf(header) != -1){
			vendorMappingProxy.newMapping(sheetHeader);
		}
		
		
		
	}
	$scope.vendorMapping = function (purchase){
		/*console.log(purchase);
		var thisSplitDate = $scope.receivedInvoiceList[purchases]['Date'].split("/");
						var saleDay = new Date(lastYear,thisSplitDate[0]-1,thisSplitDate[1]);
						var dateMatch = false;
		for(var each in purchase){
			
			console.log(each);
		}*/
	}
	$scope.categorizePurchase = function (purchase){
		var datee = purchase.Date;
		var Payments = parseInt(purchase.PAYMENTS.replace("$","").replace(",",""));
    	var StoreTransfer = parseInt(purchase.StoreTransfer.replace("$","").replace(",",""));
    	var Verizon = parseInt(purchase.VERIZONAMOUNT.replace("$","").replace(",",""));
    	var Reliance = parseInt(purchase.RELIANCEAMOUNT.replace("$","").replace(",",""));
    	var Brightpoint = parseInt(purchase.BRIGHTPOINTAMOUNT.replace("$","").replace(",",""));
		var RMA = parseInt(purchase.VZWRMA.replace("$","").replace(",",""));
		var misc = parseInt(purchase.Misc.replace("$","").replace(",",""));
		var IceMobility = parseInt(purchase.IceMobility.replace("$","").replace(",",""));
		var receivedInvoiceid = purchase.receivedInvoiceid;
		var vendor = "";
		var amount = 0;
		var set = false;
		if(parseInt(Payments) > 0 ){
			if(set == true){
				vendor = "error";
			}
			else{
			amount = Payments;
			vendor = "Payments";
			set = true;
			}
		}if(parseInt(StoreTransfer) > 0){
			if(set == true){
				vendor = "error";
			}
			else{
			amount = StoreTransfer;
			vendor = "StoreTransfer";
			set = true;
			}
		}if(parseInt(Brightpoint) > 0){
			if(set == true){
				vendor = "error";
			}
			else{
			amount = Brightpoint;
			vendor = "Brightpoint";
			set = true;
			}
		}if(parseInt(RMA) > 0){
			if(set == true){
				vendor = "error";
			}
			else{
			amount = RMA;
			vendor = "RMA";
			set = true;
			}
		}if(parseInt(misc) > 0){
			if(set == true){
				vendor = "error";
			}
			else{
			amount = misc;
			vendor = "misc";
			set = true;
			}
		}
		if(parseInt(Verizon) > 0){
			if(set == true){
				vendor = "error";
			}
			else{
			amount = Verizon;
			vendor = "Verizon";
			set = true;
			}
		}
		if(parseInt(Reliance) > 0){
			if(set == true){
				vendor = "error";
			}
			else{
			amount = Reliance;
			vendor = "Reliance";
			set = true;
			}
		}
		if(parseInt(IceMobility) > 0){
			if(set == true){
				vendor = "error";
			}
			else{
			amount = IceMobility;
			vendor = "IceMobility";
			set = true;
			}
		}
		return {receivedInvoiceid:receivedInvoiceid,datee:datee, amount:amount, vendor:vendor};
	}
	
		$scope.storeArray =   $window.storeList;
		$scope.userThing =  $window.userStuff;
		
		$scope.cycledate = 28;
		
		
		$scope.setMonthSelection = function (option){
			$scope.monthSelection = option;
			console.log(option);
		}
		$scope.setstoreSelection = function (store){
			$scope.storeSelection = store;
			
		}
		$scope.findOrderCycle = function (){
			if($scope.monthSelection=="This Month"){
				var endmonth= month+1;
				return month+"/"+$scope.orderCycle+"-"+endmonth+"/"+($scope.orderCycle-1);
			}
			//else technically
			else if($scope.monthSelection="Prev Month"){
				var startmonth= month-1;
				return startmonth+"/"+$scope.orderCycle+"-"+month+"/"+($scope.orderCycle-1);
			}
		}
		$scope.findDateList = function (){
			$scope.dateList = [];
			var bacon = "f";
			var option = {name:bacon};
			console.log(option);
			
			
			
			
			for(var i = $scope.cycledate; i < lastdayofmonth.getDate(); i++){
					$scope.dateList[$scope.dateList.length]= new Date(now.getFullYear(),month-1,i);
					
							
					
		/*$scope.dateList[$scope.dateList.length] = "";
		invoiceDate = new Date(now.getFullYear(),month-2,i);
		
		$scope.dateList[$scope.dateList.length]={Date:invoiceDate};
		//console.log($scope.dateList[$scope.dateList.length]);
		for(var purchases in $scope.receivedInvoiceList){
			
			var thisSplitDate = $scope.receivedInvoiceList[purchases]['Date'].split("/");
			var saleDay = new Date(thisSplitDate[2],thisSplitDate[0],thisSplitDate[1]);
			$scope.dateList[$scope.dateList.length-1]['purchased']={};
			if($scope.storeSelection == $scope.receivedInvoiceList[purchases]['store'] && saleDay == $scope.dateList[$scope.dateList.length]-1)
			{
			$scope.dateList[$scope.dateList.length-1]['purchased'][$scope.receivedInvoiceList['receivedInvoiceid']] = $scope.receivedInvoiceList[purchases];
			}
		}
		//console.log($scope.dateList);
		*/
	}
	for(var i = 1; i <= $scope.cycledate-1; i++){
		$scope.dateList[$scope.dateList.length]= new Date(now.getFullYear(),month-1,i);
	}
	
	return $scope.dateList;
		}
		
		$scope.dateList = $scope.findDateList();
	}
	
	
	/*
	for(var stores in $scope.storeArray){
		
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
	
	
	//PROXY STUFF
	
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
  
 */

