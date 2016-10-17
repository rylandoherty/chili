// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('DailyReportCtrl', DailyReportCtrl);

// Inject my dependencies
DailyReportCtrl.$inject = ['$routeParams','$scope','$window',];

// Now create our controller function with all necessary logic

function DailyReportCtrl($routeParams, $scope, $window) {
	
	$scope.emp = "";
	$scope.showAllEmployees = false;
	$scope.invoiceDetailShow = function (invoice){
		$scope.showInvoice=invoice;
	}
	$scope.invoiceSwitch = function (day){
		
		if(day['SHOWINVOICES']==true){
			
			day['SHOWINVOICES']=false;
		}
		else{
			day['SHOWINVOICES']=true;
		}
	}
	
	$scope.ColorLuminance = function (hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0.0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}
	$scope.showChecked = false;
	$scope.changeprofitgoal = function (store,goal){
		goalProxy.setprofitgoal(store,goal);
	}
	$scope.changenewgoal = function (store,goal){
		goalProxy.setnewgoal(store,goal);
	}
	$scope.changestrategicgoal = function (store,goal){
		goalProxy.setstrategicgoal(store,goal);
	}
	$scope.changexlplangoal = function (store,goal){
		goalProxy.setxlplangoal(store,goal);
	}
	$scope.changeinsurancegoal = function (store,goal){
		goalProxy.setinsurancegoal(store,goal);
	}
	$scope.changeaccessoryperboxgoal = function (store,goal){
		goalProxy.setaccessoryperboxgoal(store,goal);
	}
	$scope.changeprofitperboxgoal = function (store,goal){
		goalProxy.setprofitperboxgoal(store,goal);
	}
	$scope.changeempprofitgoal = function (empName,goal){
		empProxy.setprofitgoal(empName,goal);
	}
	$scope.changeempnewgoal = function (empName,goal){
		empProxy.setnewgoal(empName,goal);
	}
	$scope.changeempstrategicgoal = function (empName,goal){
		empProxy.setstrategicgoal(empName,goal);
	}
	$scope.changeempxlplangoal = function (empName,goal){
		empProxy.setxlplangoal(empName,goal);
	}
	$scope.changeempinsurancegoal = function (empName,goal){
		empProxy.setinsurancegoal(empName,goal);
	}
	$scope.changeempaccessoryperboxgoal = function (empName,goal){
		empProxy.setaccessoryperboxgoal(empName,goal);
	}
	$scope.changeempprofitperboxgoal = function (empName,goal){
		empProxy.setprofitperboxgoal(empName,goal);
	}
	$scope.changeemphours = function (empName,goal){
		empProxy.sethours(empName,goal);
	}
	$scope.changecontractnumber = function (saleid,number){
		actProxy.setContractNumber(saleid,number);
	}
	$scope.changelastfour = function (invoice,number){
		actProxy.setLastFour(invoice,number);
	}
	$scope.changepassword = function (invoice,number){
		actProxy.setPassword(invoice,number);
	}
	$scope.changecheckedbymanager = function (invoice,checked){
		actProxy.setcheckedbymanager(invoice,checked);
	}
	$scope.convertDate = function (date){
		var dateString = date.toString();
		var d = new Date(dateString.substring(0,4),dateString.substring(4,6),dateString.substring(6,8));
		return d;
	}
	$scope.parseCategory = function(category){
		return category.search('Cellular Accessories');
	}
	$scope.checkEquipment = function(category){
		return category.search('Equipment');
	}
	$scope.changeishidden = function(user){
		actProxy.setEmployeeHidden(user);
	}
	var scope = this;

	scope.userList =[];
	for(var store in $window.userQuery){
		for(var emp in $window.userQuery[store]){
			
			scope.userList[scope.userList.length] = {};
			scope.userList[scope.userList.length-1] = $window.userQuery[store][emp];
			scope.userList[scope.userList.length-1]['TOTALNEW']=0;
			scope.userList[scope.userList.length-1]['PROFIT']=0;
	 		scope.userList[scope.userList.length-1]['TOTALBOXES']=0;
	 		scope.userList[scope.userList.length-1]['STRATEGIC']=0;
	 		scope.userList[scope.userList.length-1]['INSURANCE']=0;
	 		scope.userList[scope.userList.length-1]['ACCESSORY']=0;
	 		scope.userList[scope.userList.length-1]['ACCESSORYCOUNT']=0;
	 		scope.userList[scope.userList.length-1]['XLPLAN']=0;
	 		scope.userList[scope.userList.length-1]['INSURANCEPROFIT']=0;
	 		
		}
	}
	
	$scope.userStuff =  $window.userStuff;
	
		//console.log($scope.userStuff);
		scope.salesList = $window.storeList;
		
	$scope.yearSelection="2016";
	$scope.monthSelection="";
	$scope.monthslist = ['1','2','3','4','5','6',
    			  '7','8','9','10','11','12'];
	//var today = new Date($scope.yearSelection,$scope.monthSelection);	
	
	
	
	$scope.getSalesForMonth = function(month){
		var monthCorrected = month - 1;
	var today = new Date($scope.yearSelection,month-1);
	
	var lastofmonth = new Date($scope.yearSelection,today.getMonth()+1,"00");
	//var lastoflastmonth = new Date($scope.yearSelection,today.getMonth(),"00");
	$scope.trendingValue = lastofmonth.getDate()/today.getDate();
	lastofmonthday = lastofmonth.getDate();

	//lastoflastmonthday = lastoflastmonth.getDate();
	
	 $scope.monthsx = ['Jan','Feb','Mar','Apr','May','Jun',
    			  		'Jul','Aug','Sep','Oct','Nov','Dec'];
   
   
	
    var months = ['Jan','Feb','Mar','Apr','May','Jun',
    			  'Jul','Aug','Sep','Oct','Nov','Dec'];
     for(var stores in scope.salesList){
     	
     	scope.salesList[stores]['Activations']={};
     	scope.salesList[stores]['TOTALNEW']=0;
	 	scope.salesList[stores]['PROFIT']=0;
	 	scope.salesList[stores]['TOTALBOXES']=0;
	 	scope.salesList[stores]['STRATEGIC']=0;
	 	scope.salesList[stores]['INSURANCE']=0;
	 	scope.salesList[stores]['ACCESSORY']=0;
	 	scope.salesList[stores]['ACCESSORYCOUNT']=0;
	 	scope.salesList[stores]['XLPLAN']=0;
	 	scope.salesList[stores]['INSURANCEPROFIT']=0;
	 	scope.salesList[stores]['LASTTOTALNEW']=0;
	 	scope.salesList[stores]['LASTPROFIT']=0;
	 	scope.salesList[stores]['LASTTOTALBOXES']=0;
	 	scope.salesList[stores]['LASTSTRATEGIC']=0;
	 	scope.salesList[stores]['LASTINSURANCE']=0;
	 	scope.salesList[stores]['LASTACCESSORY']=0;
	 	scope.salesList[stores]['LASTXLPLAN']=0;
	 	scope.salesList[stores]['LASTINSURANCEPROFIT']=0;
	 	
	 	
	 	scope.salesList[stores]['numINVOICES']=0;
     	
     	scope.salesList[stores]['CASH']=0;
	 	scope.salesList[stores]['DATASCAPE']=0;
	 	scope.salesList[stores]['TOTALCASH']=0;
	 	scope.salesList[stores]['CARDS']=0;
	 	scope.salesList[stores]['FINANCED']=0;
	 	scope.salesList[stores]['numINVOICES']=0;
	 	scope.salesList[stores]['dates'] = {};
	 	//scope.salesList[stores]['dates'][(today.getMonth()-1)] ={};
	 	scope.salesList[stores]['dates'][today.getMonth()]={};
	
	 	
	 	
		scope.salesList[stores]['dates'][today.getMonth()]['CASH']=0;
	 	scope.salesList[stores]['dates'][today.getMonth()]['DATASCAPE']=0;
	 	scope.salesList[stores]['dates'][today.getMonth()]['TOTALCASH']=0;
	 	scope.salesList[stores]['dates'][today.getMonth()]['CARDS']=0;
	 	scope.salesList[stores]['dates'][today.getMonth()]['FINANCED']=0;
	 	//scope.salesList[stores]['dates'][today.getMonth()-1]['CASH']=0;
	 	//scope.salesList[stores]['dates'][today.getMonth()-1]['DATASCAPE']=0;
	 	//scope.salesList[stores]['dates'][today.getMonth()-1]['TOTALCASH']=0;
	 	//scope.salesList[stores]['dates'][today.getMonth()-1]['CARDS']=0;
	 	//scope.salesList[stores]['dates'][today.getMonth()-1]['FINANCED']=0;
	 	var m2d = scope.salesList[stores]['dates'][today.getMonth()];
	 	//var lastm2d = scope.salesList[stores]['dates'][today.getMonth()-1];
	    
    			  /*
     	for(var i=1;i<=today.getDate();i++){
     		var date = today.getFullYear()+""+today.getMonth()+""+i;
     		var stringdate = months[today.getMonth()-1] +" "+i;
     		scope.salesList[stores]['dates'][date] = {Name:stringdate,TOTALCASH:0,CASH:0,DATASCAPE:0,FINANCED:0,CARDS:0,TRADEIN:0,INVOICES:{},SHOWINVOICES:0,SHOWTHISINVOICE:0};
     		}
     	*/
     	
     	for(var i=1;i<=lastofmonthday;i++){
     		var date = today.getFullYear()+""+today.getMonth()+""+i;
     		var stringdate = months[today.getMonth()] +" "+i;
     		
     		scope.salesList[stores]['dates'][today.getMonth()][date] = {Name:stringdate,TOTALCASH:0,CASH:0,DATASCAPE:0,FINANCED:0,CARDS:0,TRADEIN:0,INVOICES:{},SHOWINVOICES:0,SHOWTHISINVOICE:0};
     		}
  		
     	/*for(var i=1;i<=lastoflastmonthday;i++){
     		var date = lastoflastmonth.getFullYear()+""+lastoflastmonth.getMonth()+""+i;
     		var stringdate = months[lastoflastmonth.getMonth()] +" "+i;
     		
     		scope.salesList[stores]['dates'][lastoflastmonth.getMonth()][date] = {Name:stringdate,TOTALCASH:0,CASH:0,DATASCAPE:0,FINANCED:0,CARDS:0,TRADEIN:0,INVOICES:{},SHOWINVOICES:0,SHOWTHISINVOICE:0};
     		
     		}
     		*/
   // console.log(scope.salesList);
     	
	 for(var sales in scope.salesList[stores]['sales']){
	 	var thisSale = scope.salesList[stores]['sales'][sales];
	 	var toptwo = false;
	 	var date = $scope.convertDate(thisSale['DATE']);
	 	var month =date.getMonth();
	 	if(today.getMonth()==month){
		 	toptwo=true;
	 	}
	 	else if(today.getMonth()-1==month){
	 		toptwo=true;
	 		}
	 		else{
	 			
	 		}
	 		if(toptwo==true){
	 			//console.log('true');
	 		
	 	
	 	var hasActivations = false;
	 	scope.salesList[stores]['Activations'][thisSale['salesid']] = {};
	 	scope.salesList[stores]['Activations'][thisSale['salesid']]['salesid']=thisSale['salesid'];
	 	scope.salesList[stores]['Activations'][thisSale['salesid']]['EMPLOYEE']=thisSale['EMPLOYEE'];
	 	scope.salesList[stores]['Activations'][thisSale['salesid']]['CUSTOMER']=thisSale['CUSTOMER'];
	 	scope.salesList[stores]['Activations'][thisSale['salesid']]['FINANCED']=thisSale['FINANCED'];
	 	scope.salesList[stores]['Activations'][thisSale['salesid']]['CHECKEDBYMANAGER']=thisSale['CHECKEDBYMANAGER'];
	 	scope.salesList[stores]['Activations'][thisSale['salesid']]['LASTFOUR']=thisSale['LASTFOUR'];
	 	scope.salesList[stores]['Activations'][thisSale['salesid']]['PASSWORD']=thisSale['PASSWORD'];
	 	
	 	
	 	scope.salesList[stores]['Activations'][thisSale['salesid']]['ACTS']=[];
	 	if(thisSale['TYPE']!='CashIn'&&thisSale['TYPE']!='VendorDeposit'){
	 	
	 	
	 	
	 	var employee = thisSale['EMPLOYEE'];
	 	var thisEmployee;
	 	for(var each in scope.userList){
	 		
	 		if(employee == scope.userList[each]['userid']){
	 			
	 			thisEmployee = scope.userList[each];
	 			
	 		} 
	 	}
	 	
	 	var year = date.getFullYear();
	 	console.log(month);
	 	var day = date.getDate();
	 	var datelisting =""+year+month+day;
	 	var financed = thisSale['FINANCED'];
	 	var cash = thisSale['CASH'];
	 	var cards = thisSale['CARDS'];
	 	var datascape = thisSale['DATASCAPE'];
	 	var daysale = scope.salesList[stores]['dates'][month][datelisting];
	 	if(today.getMonth()==month){
		 	m2d['CASH']+=parseFloat(cash);
		 	m2d['DATASCAPE']+=parseFloat(datascape);
		 	m2d['TOTALCASH']+=parseFloat(datascape+cash);
		 	m2d['CARDS']+=parseFloat(cards);
		 	m2d['FINANCED']+=parseFloat(financed);
	 	}
	 	else if(today.getMonth()-1==month){
		 	lastm2d['CASH']+=parseFloat(cash);
		 	lastm2d['DATASCAPE']+=parseFloat(datascape);
		 	lastm2d['TOTALCASH']+=parseFloat(datascape+cash);
		 	lastm2d['CARDS']+=parseFloat(cards);
		 	lastm2d['FINANCED']+=parseFloat(financed);
	 	}
	 	
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
	 		else if(today.getMonth()-1==month){
	 		
	 		}
	 		
	 		
	 		
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
	 
	console.log(scope.salesList);
	}
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
  	
  
