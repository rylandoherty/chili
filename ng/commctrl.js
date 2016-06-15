// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('DailyReportCtrl', DailyReportCtrl);

// Inject my dependencies
DailyReportCtrl.$inject = ['$routeParams','$scope','$window',];

// Now create our controller function with all necessary logic

function DailyReportCtrl($routeParams, $scope, $window) {
	$scope.MonthSelect = "";
	$scope.StoreSelect = "";
	$scope.TypeSelect = "";
	

	

	
	$scope.convertDate = function (date){
		var dateString = date.toString();
		var d = new Date(dateString.substring(0,4),dateString.substring(4,6),dateString.substring(6,8));
		return d;
	}
	
	$scope.checkEquipment = function(category){
		return category.search('Equipment');
	}
	var scope = this;

	scope.userList =[];
	
	$scope.userStuff =  $window.userStuff;
	scope.salesList =  $window.salesQuery;
	scope.commList =  $window.commList;
	$scope.monthsx = ['Jan','Feb','Mar','Apr','May','Jun',
    			  		'Jul','Aug','Sep','Oct','Nov','Dec'];
    for(var stores in scope.salesList){
     	
     	
     	scope.salesList[stores]['AprilCommReport']={};
	 	
    
     	
	 for(var sales in scope.salesList[stores]['sales']){
	 	var thisSale = scope.salesList[stores]['sales'][sales];
	 	var date = $scope.convertDate(thisSale['DATE']);
	 	var month =date.getMonth();
	 	if(month=='3'){
	 		console.log("I LOVE YOU");
	 	}
	 	
	 	
	 	
	 	
	 	scope.salesList[stores]['AprilCommReport'][thisSale['salesid']]['ACTS']=[];
	 	if(thisSale['TYPE']!='CashIn'&&thisSale['TYPE']!='VendorDeposit'){
	 	var hasActivations = false;
	 	scope.salesList[stores]['AprilCommReport'][thisSale['salesid']] = {};
	 	scope.salesList[stores]['AprilCommReport'][thisSale['salesid']]['salesid']=thisSale['salesid'];
	 	
	 	scope.salesList[stores]['AprilCommReport'][thisSale['salesid']]['CUSTOMER']=thisSale['CUSTOMER'];
	 	scope.salesList[stores]['AprilCommReport'][thisSale['salesid']]['FINANCED']=thisSale['FINANCED'];
	 	scope.salesList[stores]['AprilCommReport'][thisSale['salesid']]['REBATES']=thisSale['COMM'];
	 	scope.salesList[stores]['AprilCommReport'][thisSale['salesid']]['DATE']=thisSale['DATE'];
	 	scope.salesList[stores]['AprilCommReport'][thisSale['salesid']]['VZWCUSTOMER']="";
	 	scope.salesList[stores]['AprilCommReport'][thisSale['salesid']]['VZWFINANCED']="";
	 	scope.salesList[stores]['AprilCommReport'][thisSale['salesid']]['VZWREBATES']="";
	 	scope.salesList[stores]['AprilCommReport'][thisSale['salesid']]['VZWDATE']="";
	 	var year = date.getFullYear();
	 	
	 	var day = date.getDate();
	 	var datelisting =""+year+month+day;
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	daysale['CASH']+=parseFloat(cash);
	 	daysale['DATASCAPE']+=parseFloat(datascape);
	 	daysale['TOTALCASH']+=parseFloat(datascape+cash);
	 	daysale['CARDS']+=parseFloat(cards);
	 	daysale['FINANCED']+=parseFloat(financed);
	 	
	 	for(items in thisSale['saledetails']){
	 		thisProduct = thisSale['saledetails'][items];
	 		thisProductSKU = thisProduct['PRODUCTSKU'];
	 		thisGrossProfit = thisProduct['GROSSPROFIT'];
	 		thisCategory = thisProduct['CATEGORY'];
	 		thisRefund = thisProduct['REFUND'];
	 		var lengthOfActs = scope.salesList[stores]['Activations'][thisSale['salesid']]['ACTS'].length;
	 		var thisIsAnActivation = false;
	 		//CLVZNS000421 BLOCK THIS! OSCHNR000029 edge buy outs
	 		if(thisProduct['PRODUCTSKU']=='CLVZNS000421'||thisProduct['PRODUCTSKU']=='OSCHNR000029')
	 		{
	 		}
	 		else{
	 			if(today.getMonth()==month){
	 				if(thisProduct['PRODUCTSKU']=='CLVERB000006'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000284'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000388'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000285'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000286'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000303'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000290'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000291'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000733'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000299'){
	 					if(thisProduct['REFUND']=='Yes'){
	 						thisIsAnActivation = true;
	 						scope.salesList[stores]['Activations'][thisSale['salesid']]['ACTS'][lengthOfActs]=thisProduct;
	 						thisEmployee['TOTALNEW']-=parseFloat(1);
	 						thisEmployee['STRATEGIC']-=parseFloat(1);
	 						thisEmployee['TOTALBOXES']-=parseFloat(1);
	 						scope.salesList[stores]['STRATEGIC']-=parseFloat(1);
	 						scope.salesList[stores]['TOTALNEW']-=parseFloat(1);
	 						scope.salesList[stores]['TOTALBOXES']-=parseFloat(1);
	 					}
	 					else{
	 						scope.salesList[stores]['Activations'][thisSale['salesid']]['ACTS'][lengthOfActs]=thisProduct;
	 						thisEmployee['TOTALNEW']+=parseFloat(1);
	 						thisEmployee['STRATEGIC']+=parseFloat(1);
	 						thisEmployee['TOTALBOXES']+=parseFloat(1);
	 						scope.salesList[stores]['STRATEGIC']+=parseFloat(1);
	 						scope.salesList[stores]['TOTALNEW']+=parseFloat(1);
	 						scope.salesList[stores]['TOTALBOXES']+=parseFloat(1);
	 						}
	 					
	 					
	 				}
	 				else if(thisProduct['PRODUCTSKU']=='CLVERB000009'||
	 				thisProduct['PRODUCTSKU']=='CLVERB000008'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000072'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000070'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000074'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000731'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000732'){
	 					if(thisProduct['REFUND']=='Yes'){
	 						scope.salesList[stores]['Activations'][thisSale['salesid']]['ACTS'][lengthOfActs]=thisProduct;
	 						thisEmployee['TOTALNEW']-=parseFloat(1);
	 						thisEmployee['TOTALBOXES']-=parseFloat(1);
	 						scope.salesList[stores]['TOTALNEW']-=parseFloat(1);
	 						scope.salesList[stores]['TOTALBOXES']-=parseFloat(1);
	 					}
	 					else{
	 						scope.salesList[stores]['Activations'][thisSale['salesid']]['ACTS'][lengthOfActs]=thisProduct;
	 						thisEmployee['TOTALNEW']+=parseFloat(1);
	 						thisEmployee['TOTALBOXES']+=parseFloat(1);
	 						scope.salesList[stores]['TOTALNEW']+=parseFloat(1);
	 						scope.salesList[stores]['TOTALBOXES']+=parseFloat(1);
	 					}
	 					
	 				}
	 				else if(thisProduct['PRODUCTSKU']=='CLVZRB000281'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000390'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000282'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000071'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000283'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000734'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000736'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000735'||
	 				thisProduct['PRODUCTSKU']=='OSINRB000020'||
	 				thisProduct['PRODUCTSKU']=='CLVERB000013'||
	 				thisProduct['PRODUCTSKU']=='CLVERB000011'){
	 					if(thisProduct['REFUND']=='Yes'){
	 						scope.salesList[stores]['Activations'][thisSale['salesid']]['ACTS'][lengthOfActs]=thisProduct;
	 						thisEmployee['TOTALBOXES']-=parseFloat(1);
	 						scope.salesList[stores]['TOTALBOXES']-=parseFloat(1);
	 					}
	 					else{
	 						scope.salesList[stores]['Activations'][thisSale['salesid']]['ACTS'][lengthOfActs]=thisProduct;
	 						thisEmployee['TOTALBOXES']+=parseFloat(1);
	 						scope.salesList[stores]['TOTALBOXES']+=parseFloat(1);
	 					}
	 					
	 				}
	 				else if(thisProduct['PRODUCTSKU']=='OSINRB000015'||
	 				thisProduct['PRODUCTSKU']=='OSINRB000016'||
	 				thisProduct['PRODUCTSKU']=='OSINRB000018'||
	 				thisProduct['PRODUCTSKU']=='OSINRB000017'){
	 					if(thisProduct['REFUND']=='Yes'){
	 						scope.salesList[stores]['Activations'][thisSale['salesid']]['ACTS'][lengthOfActs]=thisProduct;
	 						thisEmployee['INSURANCE']-=parseFloat(1);
	 						thisEmployee['INSURANCEPROFIT']-=parseFloat(thisProduct['GROSSPROFIT']);
	 						scope.salesList[stores]['INSURANCE']-=parseFloat(1);
	 						scope.salesList[stores]['INSURANCEPROFIT']-=parseFloat(thisProduct['GROSSPROFIT']);
	 					}
	 					else{
	 						scope.salesList[stores]['Activations'][thisSale['salesid']]['ACTS'][lengthOfActs]=thisProduct;
	 						thisEmployee['INSURANCE']+=parseFloat(1);
	 						thisEmployee['INSURANCEPROFIT']+=parseFloat(thisProduct['GROSSPROFIT']);
	 						scope.salesList[stores]['INSURANCE']+=parseFloat(1);
	 						scope.salesList[stores]['INSURANCEPROFIT']+=parseFloat(thisProduct['GROSSPROFIT']);
	 					}
	 					
	 				}
	 				else if($scope.parseCategory(thisProduct['CATEGORY'])>=0){
	 					if(thisProduct['REFUND']=='Yes'){
	 						thisEmployee['ACCESSORY']-=parseFloat(thisProduct['GROSSPROFIT']);
	 						scope.salesList[stores]['ACCESSORY']-=parseFloat(thisProduct['GROSSPROFIT']);
	 						thisEmployee['ACCESSORYCOUNT']-=1;
	 						scope.salesList[stores]['ACCESSORYCOUNT']-=1;
	 					}
	 					else{
	 						thisEmployee['ACCESSORY']+=parseFloat(thisProduct['GROSSPROFIT']);
	 						scope.salesList[stores]['ACCESSORY']+=parseFloat(thisProduct['GROSSPROFIT']);
	 						thisEmployee['ACCESSORYCOUNT']+=1;
	 						scope.salesList[stores]['ACCESSORYCOUNT']+=1;
	 					}
	 					
	 				}
	 				else if(thisProduct['PRODUCTSKU']=='OSNCNS000012'){
	 					if(thisProduct['REFUND']=='Yes'){
	 						scope.salesList[stores]['Activations'][thisSale['salesid']]['ACTS'][lengthOfActs]=thisProduct;
	 						thisEmployee['XLPLAN']-=parseFloat(1);
	 						scope.salesList[stores]['XLPLAN']-=parseFloat(1);
	 					}
	 					else{
	 						scope.salesList[stores]['Activations'][thisSale['salesid']]['ACTS'][lengthOfActs]=thisProduct;
	 						thisEmployee['XLPLAN']+=parseFloat(1);
	 						scope.salesList[stores]['XLPLAN']+=parseFloat(1);
	 						
	 					}
	 					
	 				}
	 			
	 				if(thisProduct['PRODUCTSKU']=='CLVZRB000068'){
	 					scope.salesList[stores]['Activations'][thisSale['salesid']]['ACTS'][lengthOfActs]=thisProduct;
	 				}
	 				if($scope.checkEquipment(thisProduct['CATEGORY'])>0){
	 					scope.salesList[stores]['Activations'][thisSale['salesid']]['ACTS'][lengthOfActs]=thisProduct;
	 				}
	 				
	 				if(thisProduct['REFUND']=='Yes'){
	 						thisEmployee['PROFIT']-=parseFloat(thisProduct['GROSSPROFIT']);
	 						scope.salesList[stores]['PROFIT']-=parseFloat(thisProduct['GROSSPROFIT']);
	 					}
	 					else{
	 						thisEmployee['PROFIT']+=parseFloat(thisProduct['GROSSPROFIT']);
	 						scope.salesList[stores]['PROFIT']+=parseFloat(thisProduct['GROSSPROFIT']);
	 						
	 					}
	 				
	 				
				 	
				 	
				 	
				 	
				 	
	 				/*
	 				CLVZRB000068 Advanced Device Spiff
	 				
				 	
				 	OSNCNS000012 XL VERIZON PLAN OR HIGHER
	 				**INSURANCE**
	 				
	 				OSINRB000015 VZW DEVICE PAYMENT INSURANCE NEW
	 				OSINRB000016 VZW DEVICE PAYMENT INSURANCE RENEWAL
	 				OSINRB000018 VZW VERIZON INSURANCE 2YR RENEWAL
	 				OSINRB000017 VZW VERIZON INSURANCE 2YR NEW
	 				
	 				**BOX**
				 	CLVZRB000281 2 Year Upgrade HPC
	 				CLVZRB000390 2 Year Upgrade HPC Router
	 				CLVZRB000282 2 Year Upgrade Jetpack
	 				CLVZRB000071 2 Year Upgrade Phone
	 				CLVZRB000283 2 Year Upgrade Tablet 
	 				CLVZRB000734 DPUSMART
	 				CLVZRB000735 DPUBasic
	 				CLVZRB000736 DPUTab
	 				OSINRB000020 Device Payment Upgrade Smartphone
	 				CLVERB000013 Device Payment Upgrade Tablet
	 				CLVERB000011 Device Payment Upgrade Basic
				 	
				 	
				 	**NEW && BOX**
	 				CLVZRB000072 2 Year New Activation Phone
	 				CLVERB000009 Device Payment New Smartphone
	 				CLVERB000008 Device Payment New Basic
	 				CLVZRB000070 Prepaid Phone
	 				CLVZRB000074 MTM Activation Phone
	 				CLVZRB000731 DPNSMART
	 				CLVZRB000732 DPNBasic
	 				
	 				** Strategics && NEW && BOX**
	 				CLVERB000006 Device Payment New Tablet
	 				CLVZRB000284 2 Year New Activation HPC
	 				CLVZRB000388 2 Year New Activation HPC Router
	 				CLVZRB000285 2 Year New Activation Jetpack
	 				
	 				CLVZRB000286 2 Year New Activation Tablet
	 				CLVZRB000303 Prepaid Connected Devices
	 				CLVZRB000290 Prepaid Jetpack
	 				CLVZRB000291 Prepaid Tablet
	 				CLVZRB000733 DPNTab
	 				CLVZRB000299 2 Year New Activation Connected Devices
	 				
	 				
	 				//
	 				BLOCKED THESE 
	 				  CLVZNS000421 verizon device payment
	 				  OSCHNR000029 store edge buy out 
	 				*/
	 				
	 	
	 		
	 		
	 		
	 		
	 		
	 	}
	 		
	 		
	 		
	 		
	 		
	 		
	 		
	 		
	 		
	 	}
	 	
	 	
	 	var salesid = thisSale['salesid'];
	 	daysale['INVOICES'][salesid]=thisSale;
	 	
	 	
	 	
	 	//var customer = scope.salesList[sales]['CUSTOMER'];
	 	//var comments = scope.salesList[sales]['COMMENTS'];
	 	}
     		
     }
	 
	 	//console.log(scope.salesOrganized[soldAt][date]['CASH']);
	 	
	 	
	 	}
	 }		
	$scope.users = scope.userList;
	 $scope.salesx = scope.salesList;
	console.log($scope.users);
     	/*
     	this[dummy] = {};
     	
	     	for(var i=1;i<=lastofmonth;i++){
			var dummy2 = 'salesOrganized.'+listOfStores[stores]+'.'+today.getFullYear()+today.getMonth()+i;
			console.log(dummy2);
			salesOrganized.push(this[dummy]),{};
	     	}	
     */
     
	/*for(var sales in $scope.salesList){
		var soldAt = $scope.salesList[sales]['STORE'];
		switch (soldAt) {
	    case listOfStores[0]:
	    $scope.salesList[sales]
	        salesOrganized.stores[0][1].push($scope.salesList[sales]);
	        break;
	    
	    case listOfStores[1]:
	       salesOrganized.stores[1][1].push($scope.salesList[sales]);
	        break;
	    case listOfStores[2]:
	       salesOrganized.stores[2][1].push($scope.salesList[sales]);
	        break;
	  	 }
	  	 
	}
	$scope.salesOrganized = salesOrganized.stores;
	
	
	var date = salesOrganized.stores[0][1][1]['DATE'].toString();
	console.log(date);
	var d = new Date(date.substring(0,4),date.substring(4,6),date.substring(6,8));
	console.log(d);
	*/
  	}
  	
  
