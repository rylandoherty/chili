// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('commctrl', commctrl);

// Inject my dependencies
commctrl.$inject = ['$routeParams','$scope','$window',];

// Now create our controller function with all necessary logic

function commctrl($routeParams, $scope, $window) {
	$scope.MonthSelect = "";
	$scope.Storez = "";
	$scope.Selection = "";
	

	
$scope.checkNames = function (name1,name2){
			var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
			'o','p','q','r','s','t','u','v','w','x','y','z'];
			
			var characters1 = {};
			var characters2 = {};
			for(var characterInName = 1;characterInName<=name1.length;characterInName++){
					var reading = name1.charAt(characterInName);
					for(var letterz in letters){
						if(letterz == reading){
							var hasCharacter = false;
							for(var characters in characters1){
								if(characters == letterz){
									hasCharacter = true;
								}
								else{
									
								}
							
							
							}
							if(hasCharacter == true){
								characters1[letterz]=characters1[letterz]+1;
							}
							else{
								characters1[letterz]=1;		
							}
						}
					}
				}
			for(var characterInName = 1;characterInName<=name2.length;characterInName++){
					var reading = name2.charAt(characterInName);
					for(var letterz in letters){
						if(letterz == reading){
							var hasCharacter = false;
							for(var characters in characters2){
								if(characters == letterz){
									hasCharacter = true;
								}
								else{
									
								}
							
							
							}
							if(hasCharacter == true){
								characters2[letterz]=characters2[letterz]+1;
							}
							else{
								characters2[letterz]=1;		
							}
						}
					}
				}
			var totalCount = 0;
			var totalCount2 = 0;
			var inCommon = 0;
			for(var letter in characters1){
				if(characters2[letter]){
					if(characters2[letter]>characters1[letter]){
					inCommon = inCommon + characters1[letter];	
					}
					else{
						inCommon = inCommon + characters2[letter];
					}
				}
				totalCount = totalCount+int(characters1[letter]);
			}
			for(var letter in characters2){
				totalCount2 = totalCount2+int(characters2[letter]);
				
			}
			if(totalcount2<totalCount){
			return (inCommon/totalCount);}
			else{
			return (inCommon/totalCount2);}
		}
	

	
	$scope.convertDate = function (date){
		var dateString = date.toString();
		var d = new Date(dateString.substring(0,4),dateString.substring(4,6),dateString.substring(6,8));
		return d;
	}
	
	$scope.checkEquipment = function(category){
		return category.search('Equipment');
	}
	//var scope = this;


//START SCRIPT
//START SCRIPT
	var userList =[];
	
	$scope.userStuff =  $window.userStuff;
	var salesList =  $window.salesQuery;
	var commList =  $window.commList;
	$scope.monthsx = ['Jan','Feb','Mar','Apr','May','Jun',
    			  		'Jul','Aug','Sep','Oct','Nov','Dec'];
    			  		
	
	    			  		
    for(var stores in salesList){
     	salesList[stores]['AprilCommReport']={};
     	salesList[stores]['AprilCommReport']['commList']=[];
     	for(var commz in commList){
     		if(commList[commz]['LOCATION']==salesList[stores]['storeid']){
     			salesList[stores]['AprilCommReport']['commList'].push(commList[commz]);
     		}
     	}
     	
     	
     	salesList[stores]['AprilCommReport']['Counts']={};
     	
     	salesList[stores]['AprilCommReport']['Counts']['NewExpected']=0;
     	salesList[stores]['AprilCommReport']['Counts']['NewFound']=0;
     	
     	salesList[stores]['AprilCommReport']['Counts']['UpgExpected']=0;
     	salesList[stores]['AprilCommReport']['Counts']['UpgFound']=0;
     	
     	salesList[stores]['AprilCommReport']['Counts']['CommExpected']=0;
     	salesList[stores]['AprilCommReport']['Counts']['CommFound']=0;
     	
     	salesList[stores]['AprilCommReport']['Counts']['RebateExpected']=0;
     	salesList[stores]['AprilCommReport']['Counts']['RebateFound']=0;
     	
     	salesList[stores]['AprilCommReport']['Counts']['InsuranceExpected']=0;
     	salesList[stores]['AprilCommReport']['Counts']['InsuranceFound']=0;
     	
     	salesList[stores]['AprilCommReport']['Counts']['ReturnExpected']=0;
     	salesList[stores]['AprilCommReport']['Counts']['ReturnFound']=0;
     	
	 	salesList[stores]['AprilCommReport']['salesFromRQthatArePartial']={};
    	salesList[stores]['AprilCommReport']['expectingCommFrom']={};
     	salesList[stores]['AprilCommReport']['PaidByVZWandNotFoundInSales']={};
     	salesList[stores]['AprilCommReport']['InvoicesThatAreFilled']={};
     	salesList[stores]['AprilCommReport']['salesFromRQthatFailed']={};
	 for(var sales in salesList[stores]['sales']){
	 	var thisSale = salesList[stores]['sales'][sales];
	 	var date = $scope.convertDate(thisSale['DATE']);
	 	var month =date.getMonth();
	 	
	 	if(month=='3'){
	 		
	 	
	 		
	 	
	 	
	 	
	 	
	 	
	 	if(thisSale['TYPE']!='CashIn'&&thisSale['TYPE']!='VendorDeposit'&&thisSale['TYPE']!='BillPayment'){
			
				/*salesList[stores]['AprilCommReport'][thisSale['salesid']] = {};
			 	salesList[stores]['AprilCommReport'][thisSale['salesid']]['ACTS']=[];
			 	salesList[stores]['AprilCommReport'][thisSale['salesid']]['COMMS']=[];
			 	salesList[stores]['AprilCommReport'][thisSale['salesid']]['salesid']=thisSale['salesid'];
			 	salesList[stores]['AprilCommReport'][thisSale['salesid']]['CUSTOMER']=thisSale['CUSTOMER'];
			 	salesList[stores]['AprilCommReport'][thisSale['salesid']]['FINANCED']=thisSale['FINANCED'];
			 	salesList[stores]['AprilCommReport'][thisSale['salesid']]['REBATES']=thisSale['COMM'];
			 	salesList[stores]['AprilCommReport'][thisSale['salesid']]['DATE']=thisSale['DATE'];
			 	salesList[stores]['AprilCommReport'][thisSale['salesid']]['VZWCUSTOMER']="";
			 	salesList[stores]['AprilCommReport'][thisSale['salesid']]['VZWFINANCED']="";
			 	salesList[stores]['AprilCommReport'][thisSale['salesid']]['VZWREBATES']="";
			 	salesList[stores]['AprilCommReport'][thisSale['salesid']]['VZWDATE']="";
			 	*/
			 	
			 	var ACTS = [];
			 	var COMMS = [];
			var VZWFINANCED = 0;
			var VZWREBATES = 0;
			salesList[stores]['AprilCommReport']['Counts']['CommExpected']+=thisSale['FINANCED'];
			salesList[stores]['AprilCommReport']['Counts']['RebateExpected']+=thisSale['COMM'];
			
	 	
	 	
	 	var year = date.getFullYear();
	 	
	 	var day = date.getDate();
	 	var datelisting =""+year+month+day;
	 	var thisHadToDoWithCommission = false;
	 	for(items in thisSale['saledetails']){
	 		var thisProduct = thisSale['saledetails'][items];
	 		var thisProductSKU = thisProduct['PRODUCTSKU'];
	 		var thisCategory = thisProduct['CATEGORY'];
	 		var thisRefund = thisProduct['REFUND'];
	 		
	 		//text length
	 		//var lengthOfActs = salesList[stores]['Activations'][thisSale['salesid']]['ACTS'].length;
	 		var thisIsAnActivation = false;
	 		var thisIsInsurance = false;
	 		var thisIsARefund = false;  
	 		//CLVZNS000421 BLOCK THIS! OSCHNR000029 edge buy outs
	 		if(thisProduct['PRODUCTSKU']=='CLVZNS000421'||thisProduct['PRODUCTSKU']=='OSCHNR000029')
	 		{
	 		}
	 		else{
	 				//STRATEGICS
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
	 					if(thisProduct['REFUND']=='True'){
	 						
	 						//scope.salesList[stores]['Activations'][thisSale['salesid']]['ACTS'][lengthOfActs]=thisProduct;
	 						var thisIsARefund = true;  
	 						salesList[stores]['AprilCommReport']['Counts']['NewExpected']-=1;
	 						salesList[stores]['AprilCommReport']['Counts']['ReturnExpected']+=1;
	 					}
	 					else{
	 						//scope.salesList[stores]['Activations'][thisSale['salesid']]['ACTS'][lengthOfActs]=thisProduct;
	 						thisIsAnActivation = true; 
	 						salesList[stores]['AprilCommReport']['Counts']['NewExpected']+=1;
     						
	 					}
	 					
	 				}
	 				//NEW LINES
	 				else if(thisProduct['PRODUCTSKU']=='CLVERB000009'||
	 				thisProduct['PRODUCTSKU']=='CLVERB000008'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000072'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000070'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000074'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000731'||
	 				thisProduct['PRODUCTSKU']=='CLVZRB000732'){
	 					if(thisProduct['REFUND']=='Yes'){
	 						//scope.salesList[stores]['Activations'][thisSale['salesid']]['ACTS'][lengthOfActs]=thisProduct;
	 						var thisIsARefund = true;
	 						salesList[stores]['AprilCommReport']['Counts']['NewExpected']-=1;
	 						salesList[stores]['AprilCommReport']['Counts']['ReturnExpected']+=1;
	 					}
	 					else{
	 						//scope.salesList[stores]['Activations'][thisSale['salesid']]['ACTS'][lengthOfActs]=thisProduct;
	 						thisIsAnActivation = true;
	 						salesList[stores]['AprilCommReport']['Counts']['NewExpected']+=1;
	 					}
	 					
	 				}
	 				//UPGRADES
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
	 						//scope.salesList[stores]['Activations'][thisSale['salesid']]['ACTS'][lengthOfActs]=thisProduct;
	 						var thisIsARefund = true;  
	 						salesList[stores]['AprilCommReport']['Counts']['UpgExpected']-=1;
	 						salesList[stores]['AprilCommReport']['Counts']['ReturnExpected']+=1;
	 					}
	 					else{
	 						//scope.salesList[stores]['Activations'][thisSale['salesid']]['ACTS'][lengthOfActs]=thisProduct;
	 						thisIsAnActivation = true; 
	 						salesList[stores]['AprilCommReport']['Counts']['UpgExpected']+=1;
	 					}
	 					
	 				}
	 				else if(thisProduct['PRODUCTSKU']=='OSINRB000015'){
	 					thisIsInsurance = true;
	 					salesList[stores]['AprilCommReport']['Counts']['InsuranceExpected']+=50;
	 					//thisSale['COMM']-=50;
	 				}
	 				else if(thisProduct['PRODUCTSKU']=='OSINRB000016'||
 					thisProduct['PRODUCTSKU']=='OSINRB000017'){
						salesList[stores]['AprilCommReport']['Counts']['InsuranceExpected']+=30;
						thisIsInsurance = true; 
						//thisSale['COMM']-=30;
	 				}
	 				else if(thisProduct['PRODUCTSKU']=='OSINRB000018'){
	 					salesList[stores]['AprilCommReport']['Counts']['InsuranceExpected']+=15;
	 					thisIsInsurance = true;
	 					//thisSale['COMM']-=15;
	 				}
	 				
	 		if(thisIsAnActivation){
	 			
	 			
	 			for(var commz in salesList[stores]['AprilCommReport']['commList']){
	 				var someInt = salesList[stores]['AprilCommReport']['commList'][commz]['DATE']+"";
	 				someInt = someInt.substring(0,5)+"3"+someInt.substring(6,8);
	 			
	 				if(someInt==thisSale['DATE'].toString().substr(0, 8)&&(salesList[stores]['AprilCommReport']['commList'][commz]['TYPE']=='UPG' || salesList[stores]['AprilCommReport']['commList'][commz]['TYPE']=='NEW')){
		 						
		 					if((salesList[stores]['AprilCommReport']['commList'][commz]['MOBILEID']||salesList[stores]['AprilCommReport']['commList'][commz]['ALTMOBIL'])==(thisProduct['TRACKINGNUMBER'])){
		 							
		 						if(salesList[stores]['AprilCommReport']['commList'][commz]['TYPE']=='NEW'){
			 					salesList[stores]['AprilCommReport']['Counts']['NewFound']+=1;
			 					}
			 					else if(salesList[stores]['AprilCommReport']['commList'][commz]['TYPE']=='UPG'){
			 					salesList[stores]['AprilCommReport']['Counts']['UpgFound']+=1;
			 					}
			 					
		 						
		 						VZWFINANCED = parseInt(VZWFINANCED) + parseInt(salesList[stores]['AprilCommReport']['commList'][commz]['RECEIVABLE']);
								 VZWREBATES = parseInt(VZWREBATES) + parseInt(salesList[stores]['AprilCommReport']['commList'][commz]['ADC']) + parseInt(salesList[stores]['AprilCommReport']['commList'][commz]['CMSN']);
								 salesList[stores]['AprilCommReport']['Counts']['CommFound']+=parseInt(salesList[stores]['AprilCommReport']['commList'][commz]['RECEIVABLE']);
								 salesList[stores]['AprilCommReport']['Counts']['RebateFound']+= (parseInt(salesList[stores]['AprilCommReport']['commList'][commz]['ADC']) + parseInt(salesList[stores]['AprilCommReport']['commList'][commz]['CMSN']));
								 //salesList[stores]['AprilCommReport']['commList'].splice(commz, 1);
								// salesList[stores]['AprilCommReport']['commList'] = salesList[stores]['AprilCommReport']['commList'].splice(Object.keys(salesList[stores]['AprilCommReport']['commList']).indexOf(commz)+1,1);
		 						//salesList[stores]['AprilCommReport']['commList'].splice(commz, 1);
		 						
		 					}
		 					//else if($scope.checkNames(commz['CUSTOMERNAME'],thisSale['CUSTOMER']>=.8)){
		 						
		 					//}
		 					}
	 				}
	 				
	 			}
	 		
	 		if(thisIsInsurance){
	 			for(var commz in salesList[stores]['AprilCommReport']['commList']){
	 			if(salesList[stores]['AprilCommReport']['commList'][commz]['TYPE']=='INS'){
	 				if((salesList[stores]['AprilCommReport']['commList'][commz]['MOBILEID']||salesList[stores]['AprilCommReport']['commList'][commz]['ALTMOBIL'])==(thisProduct['TRACKINGNUMBER'])){
		 				VZWREBATES = parseInt(VZWREBATES) + parseInt(salesList[stores]['AprilCommReport']['commList'][commz]['CMSN']);
		 				 salesList[stores]['AprilCommReport']['Counts']['InsuranceFound']+= parseInt(salesList[stores]['AprilCommReport']['commList'][commz]['CMSN']);
		 				 //salesList[stores]['AprilCommReport']['commList'].splice(commz, 1);
	 				}
	 			}
	 			}
	 			//for(var commz in commList){
	 			//}
	 		}
	 		if(thisIsARefund){
	 			for(var commz in salesList[stores]['AprilCommReport']['commList']){
	 			if(salesList[stores]['AprilCommReport']['commList'][commz]['TYPE']=='CB'){
	 				
	 				}
	 				if(salesList[stores]['AprilCommReport']['commList'][commz]['TYPE']=='DEACT'){
	 				
	 				}
	 			}
	 			//for(var commz in commList){
	 			//}
	 		}
	 		
	 	}
	 	if(thisIsARefund||thisIsAnActivation||thisIsInsurance){
	 		thisHadToDoWithCommission = true;
	 		}
			} bn 
	 		
	 	
	 		
	 		//end of positiveproduct(not a buy out lol, not needed bad coder)
	 		
	 		
	 		
     	//salesList[stores]['AprilCommReport']['PaidByVZWandNotFoundInSales']={};
     	
	 		
	 		
	 		//end of items
	 		if(thisHadToDoWithCommission){
	 		
	 	var toplimit = VZWFINANCED+5;
	 		var bottomlimit = VZWFINANCED-5;
	 		var toplimit2 = VZWREBATES+5;
	 		var bottomlimit2 = VZWREBATES-5;
	 		if((toplimit>thisSale['FINANCED']&&thisSale['FINANCED']>bottomlimit)&&(toplimit2>thisSale['COMM']&&thisSale['COMM']>bottomlimit2)){
	 			thisSale['VZWFINANCED'] = VZWFINANCED;
	 			thisSale['VZWREBATES'] = VZWREBATES;
	 			salesList[stores]['AprilCommReport']['InvoicesThatAreFilled'][thisSale['salesid']] = thisSale;
	 		}
	 		else if(VZWFINANCED>0&&VZWREBATES>0){
	 			thisSale['VZWFINANCED'] = VZWFINANCED;
	 			thisSale['VZWREBATES'] = VZWREBATES;
	 			salesList[stores]['AprilCommReport']['salesFromRQthatArePartial'][thisSale['salesid']] = thisSale;
	 		}
	 		else if(VZWFINANCED==0&&VZWREBATES==0){
	 			thisSale['VZWFINANCED'] = VZWFINANCED;
	 			thisSale['VZWREBATES'] = VZWREBATES;
	 			salesList[stores]['AprilCommReport']['salesFromRQthatFailed'][thisSale['salesid']] = thisSale;
	 		}
	 		
	 		}
	 	}
	 	
	 	//this sale had commission
	 	
	 	
	 	
	 	
	 	//var customer = scope.salesList[sales]['CUSTOMER'];
	 	//var comments = scope.salesList[sales]['COMMENTS'];
	 	
     		
     
	 
	 	//console.log(scope.salesOrganized[soldAt][date]['CASH']);
	 	
	 	
	 	}//this was in the month neccessary
	 	
	 	
	 }//this was a sale		
	
	
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
  	
  	console.log(salesList);
	 $scope.salescomm = salesList;
	 }
	 				/*
	 				CLVZRB000068 Advanced Device Spiff
	 				
				 	
				 	OSNCNS000012 XL VERIZON PLAN OR HIGHER
	 				**INSURANCE**
	 				
	 				OSINRB000015 VZW DEVICE PAYMENT INSURANCE NEW 50
	 				OSINRB000016 VZW DEVICE PAYMENT INSURANCE RENEWAL 30
	 				OSINRB000017 VZW VERIZON INSURANCE 2YR NEW 30
	 				OSINRB000018 VZW VERIZON INSURANCE 2YR RENEWAL 15
	 				
	 				
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
  
