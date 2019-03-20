
<cfcomponent>
	<cfscript>

		remote any function testGet(){
			Form.shouldntnamethingsthislol = "testing";


		}
		remote any function loadspreadsheet(filename){

			xls = SpreadsheetRead('C:\ColdFusion11\cfusion\wwwroot\chilipos\notsure\savestuff\'&filename&'.xls');
			//queryService = new query();
			 //queryService.setDatasource(xls);
    		//result = queryService.execute(sql="SELECT * ");



			//return SerializeJson(result);
	    if(filename CONTAINS "Inventory Listing"){
			logic = createObject("component", "logic");
			logic.setInventory(xls , filename);
		}
		else if(filename CONTAINS "Product Detail"){
			logic = createObject("component", "logic");
			logic.setPDR(xls , filename);
		}
		else if(filename CONTAINS "RMA History Report"){
			logic = createObject("component", "logic");
			logic.setRMAHistory(xls , filename);
		}
		else if(filename CONTAINS "Transfer History"){
				 logic = createObject("component", "logic");
				numberStruct =  logic.setTransfer(xls , filename);
		}
		else if(filename CONTAINS "Receiving Invoices History Report"){

				 //logic = createObject("component", "logic");
				numberStruct =  setReceived(xls , filename);


		}
		if(masterfile.serverFile CONTAINS "Payment Type Audit Report"){

		}
		if(masterfile.serverFile CONTAINS "PDR"){

		}
		if(filename CONTAINS "Sales By Invoice"){
			logic = createObject("component", "logic");
			logic.organizeSales(xls , filename);
		}
	    					return "alldone";
	    					
		}



		private any function moneyReplace(number){
				return Replace(Replace(Replace(Replace(number,"$",""), "(" , "-" ),")","" ),",","");
		}
		
		public any function setPhobioTradeReport(ListData, Listfile){
			
			for(items in ListData){
				wsPublish("uploads", items["invoice_num"]);
				if(items['invoice_num'] != 'invoice_num' && len(items['invoice_num'])){
					
					var today = Now();
					var newToday = DateFormat(today, "yyyymmdd");
					var tradenum = items["trade_num"];
					var invoicenum = items["invoice_num"];
					var model = items["model"];
					var reportedcondition = items["reported_condition"];
					var quotedcustomeramountcents = items["quoted_customer_amount_cents"]/100;
					var created = items["created"];
					var thisfrom = DateFormat(created,"yyyymmdd");
					var loadPhobioSku = entityLoad("phobioskulist", {"model"=model},true);
					if(!isDefined("loadPhobioSku")){
						loadPhobioSku = entityNew("phobioskulist");
						loadPhobioSku.setmodel(model);
						loadPhobioSku.setsellprice(0);
						loadPhobioSku.setsellpricedmg(0);
						if(reportedcondition == 'working'){
							loadPhobioSku.setcost(quotedcustomeramountcents);
							loadPhobioSku.setcostdate(newToday);
							loadPhobioSku.setcostdmg(0);
							loadPhobioSku.setcostdmgdate(newToday);		
						}
						else{
							loadPhobioSku.setcost(0);
							loadPhobioSku.setcostdate(newToday);
							loadPhobioSku.setcostdmg(quotedcustomeramountcents);
							loadPhobioSku.setcostdmgdate(newToday);	
						}
						
						entitySave(loadPhobioSku);	
						
					}
					else {
						if(reportedcondition == 'working'){
							loadPhobioSku.setcost(quotedcustomeramountcents);
							loadPhobioSku.setcostdate(newToday);
						}
						else{
							loadPhobioSku.setcostdmg(quotedcustomeramountcents);
							loadPhobioSku.setcostdmgdate(newToday);	
						}
						
						entitySave(loadPhobioSku);
					}
					var shipmenttrackingnumber = items["shipment_tracking_number"];
					var imei = items["imei"];
					var originalimei = items["original_imei"];
					var notes = items["notes"];
					var adjustmentreasons = items["adjustment_reasons"];
					
					var adjustedcondition = items["adjusted_condition"];
					var invoicereference = items["invoice_reference"];
					var paid = items["paid"];
					var firstname = items["first_name"];
					var lastname = items["last_name"];
					var companylocation = items["company_location"];
					var companyregion = items["company_region"];
					var isactive = items["is_active"];
					var status = items["status"];
					var productslug = items["product__slug"];
					
					var shipped = items["shipped"];
					var received = items["received"];
					var inspected = items["inspected"];
					var localcreated = items["local_created"];
					var localreceived = items["local_received"];
					
					
					 var paymentcustomeramountcents = items["payment_customer_amount_cents"]/100;
					//var paymentamountcents = items["payment_amount_cents"]/100;
					 var inspectedamountcents = items["inspected_amount_cents"]/100;
					//var quotedamountcents = items["quoted_amount_cents"]/100;
					
					
					
					
					var thisPhobio = EntityLoad("phobio", {"tradenum"=tradenum},true);
					
					if(isDefined("thisPhobio")){
						
						
					}
					else{
						thisPhobio = EntityNew("phobio");
						thisPhobio.setinvoicenum(invoicenum);
						thisPhobio.settradenum(tradenum);
						thisPhobio.setfirstname(firstname);
					 	thisPhobio.setlastname(lastname);
						thisPhobio.setcompanylocation(companylocation);
					 	thisPhobio.setcompanyregion(companyregion);
					 	thisPhobio.setmodel(model);
					 	thisPhobio.setoriginalimei(originalimei);
					 	thisPhobio.setreportedcondition(reportedcondition);
					 	thisPhobio.setproductslug(productslug);
					 	thisPhobio.sethidden("NO");
					 	if(len(created)){
					 		thisPhobio.setcreated(DateFormat(created,"yyyymmdd"));	
					 	}
					 	if(len(localcreated)){
					 		thisPhobio.setlocalcreated(DateFormat(localcreated,"yyyymmdd"));	
						}
						
						thisPhobio.setquotedcustomeramountcents(quotedcustomeramountcents);
						thisPhobio.setpaymentcustomeramountcents(paymentcustomeramountcents);
					}
					
					 thisPhobio.setshipmenttrackingnumber(shipmenttrackingnumber);
					 
					 thisPhobio.setimei(imei);
					 
					 thisPhobio.setnotes(notes);
					 
					 thisPhobio.setadjustmentreasons(adjustmentreasons);
					 
					 thisPhobio.setadjustedcondition(adjustedcondition);
					 
					 thisPhobio.setinvoicereference(invoicereference);
					 
					 thisPhobio.setpaid(paid);
					 
					 thisPhobio.setisactive(isactive);
					 
					 thisPhobio.setstatus(status);
					 
					
					 
					 
					 
					 if(len(shipped)){
					 	thisPhobio.setshipped(DateFormat(shipped,"yyyymmdd"));	
					 }
					 
					 if(len(received)){
					 	thisPhobio.setreceived(DateFormat(received,"yyyymmdd"));	
					 }
					
					 if(len(inspected)){
					 	thisPhobio.setinspected(DateFormat(inspected,"yyyymmdd"));	
					 }
					 
					 
					
					 if(len(localreceived)){
					 	thisPhobio.setlocalreceived(DateFormat(localreceived,"yyyymmdd"));	
					 }
					
					
					//thisPhobio.setpaymentamountcents(paymentamountcents);
					thisPhobio.setinspectedamountcents(inspectedamountcents);
					//thisPhobio.setquotedamountcents(quotedamountcents);
					
					entitySave(thisPhobio);
					ormFlush();
					thisPhobio = entityLoad("phobio", {"tradenum" = tradenum}, true);
					
					var modelattach = thisPhobio.getphobioskulist();
					
					if(!isDefined("modelattach")){
						loadPhobioSku.addphobio(thisPhobio);
						entitySave(loadPhobioSku);
					}
					
				}
			
			}
		}
		public any function setCustomerLogin(ListData, Listfile){
			var empList = EntityLoad("userlist");
			
			for(items in ListData){
				if(items['Employee'] != 'Employee' && len(items['Employee'])){
				var today = Now();
				var newToday = DateFormat(today, "yyyymmdd");
				
				var searchForInvoice = ormExecuteQuery( "FROM eroeslogin as dc WHERE dc.mtn LIKE '"&items['MTN']&"' AND dc.time LIKE '"&items['Time']&"' AND dc.date LIKE '"&newToday&"'");
				
				var isNotKnown = ArrayIsEmpty(searchForInvoice);  
				  if(isNotKnown){
				  		
				  		var thisEmp = EntityLoad("userlist", {eroesid = items['Employee']}, true);
				  		
				  		if(!IsDefined("thisemp")){
				  			
				  			for(each in empList){
				  				var finder = FindNoCase(Left(items['Employee'],3), each.getname());
				  				if(finder>0){
				  					if(!len(each.geteroesid())){
					  					each.seteroesid(items['Employee']);
					  					entitySave(each);
					  					thisEmp = EntityLoad("userlist", {eroesid = items['Employee']}, true);
					  					break;
				  					}
				  				}
				  			}
				  		}
				  		
				  		if(IsDefined("thisemp")){
				  			var addLogin = entityNew("eroeslogin");
				  			var thisStore = EntityLoad("stores", {eroesid = items['Store']}, true);
				  			
				  			addLogin.settime(items['Time']);
				  			addLogin.setdate(newToday);
				  			addLogin.setmtn(items['MTN']);
				  			addLogin.setcustomername(items['Customer']);
				  			addLogin.setemployeename(thisEmp.getname());
				  			addLogin.setstorename(thisStore.getStoreID());
				  			entitySave(addLogin);
				  			thisEmp.adderoeslogin(addLogin);
				  			thisStore.adderoeslogin(addLogin);
				  			entitySave(thisEmp);
				  			entitySave(thisStore);
				  			  
				  		}
				  }
			}	
				
				}
				
				wsPublish("uploads", "Completed Eroes Activity");
				
		}
		
		public any function setCSVMTN(ListData, Listfile){
			
			
			
			for(items in ListData){
				if(items['status'] != 'status' && len(items['status'])){

				// FIND DATE - CLEAR DATE
				var dateFormated = MID(items['date'],7,4)&MID(items['date'],1,2)&MID(items['date'],4,2);
//wsPublish("uploads", dateFormated);
				
				
				var searchForInvoice = ormExecuteQuery( "FROM csvmtn as dc WHERE dc.mtn LIKE '"&items['mtn']&"' AND dc.status LIKE '"&items['status']&"' AND dc.date LIKE '"&dateFormated&"' AND dc.imei LIKE '"&items['imei']&"' AND dc.installment LIKE '"&items['installment']&"' ");
				var isNotKnown = ArrayIsEmpty(searchForInvoice);
				if(isNotKnown){
					
					var newProductSold = EntityNew('csvmtn');
					newProductSold.setmtn(items['mtn']);
					newProductSold.setstatus(items['status']);
					newProductSold.setdate(dateFormated);
					newProductSold.setimei(items['imei']);
					newProductSold.setinstallment(items['installment']);
					newProductSold.setfin(items['fin']);
					newProductSold.setdown(items['down']);
					

					entitySave(newProductSold);
				
					
				}
			
				
			
			}}
		
		}
		
		
		public void function setVendorRebateHistory(ListData, Listfile){
			
			var uploadStuff = EntityNew('uploadrecords');
			uploadStuff.settype('VRH');
			uploadStuff.settime(Now());
			uploadStuff.setfilename(ListFile);
			entitySave(uploadStuff);
			var countofArray = 0;
			application.uploadCount = 0;
					for(var item in ListData){
						countofArray += 1;
					}
			// DATE ALREADY CLEARED ARRAY::
		
		
var wasntfound = [];


			for(items in ListData){
				if(items['Product Name'] != 'Product Name' && len(items['Product Name'])){

application.uploadCount = LSParseNumber(application.uploadCount) + 1;

				wsPublish("uploads", application.uploadCount&"--"&countofArray);
				// FIND DATE - CLEAR DATE
				var dateFormated = Left(fixtime(items['Sold On']),8);
//wsPublish("uploads", dateFormated);
				var invoice = items['Invoice ##'];
				
				var searchForInvoice = ormExecuteQuery( "FROM vendorrebateinvoice as dc WHERE dc.invoice LIKE '"&invoice&"'" );
				var isNotKnown = ArrayIsEmpty(searchForInvoice);
				if(isNotKnown){
					ArrayAppend(wasntfound, invoice); 
					var newProductSold = EntityNew('vendorrebateinvoice');
					newProductSold.setinvoice(items['Invoice ##']);
					
					
					
					
					
					
					
					newProductSold.setchecked(false);
					
					newProductSold.setstatus('OK');
					newProductSold.setcomments("");
					
					newProductSold.setinvoicerebate(0);
					newProductSold.setsalesperson(items['Sales Person']);
					newProductSold.setsoldon(dateFormated);
					newProductSold.setcustomer(items['Customer']);
					newProductSold.setinvoicedby(items['Invoiced By']);
					newProductSold.setoriginalinvoice(items['Original Invoice']);
					newProductSold.setoriginalsalesdate(items['Original Sales Date']);
					entitySave(newProductSold);
					ormflush();
						
					
				}
			
				if(	!ArrayIsEmpty(wasntfound))
				for(those in wasntfound){
					if(those==invoice){
						var searchForvrInvoice = ormExecuteQuery( "FROM vendorrebateinvoice as dc WHERE dc.invoice LIKE '"&invoice&"'" );
						var newTotal= trimDollarsAndNegatives(searchForvrInvoice[1].getinvoicerebate())+trimDollarsAndNegatives(items['Total Rebate']);
						
						searchForvrInvoice[1].setinvoicerebate(newTotal);
						entitySave(searchForvrInvoice[1]);
						var newProductSold = EntityNew('vendorrebatehistory');
						newProductSold.setinvoice(items['Invoice ##']);
						newProductSold.setproductsku(items['Product SKU']);
						newProductSold.setproductname(items['Product Name']);
						newProductSold.setcontract(items['Contract ##']);
						newProductSold.settracking(items['Tracking ##']);
						newProductSold.setqty(items['Qty']);
						newProductSold.settotalrebate(items['Total Rebate']);
						newProductSold.setrelatedsn(items['Related SN']);
						newProductSold.setrelatedproduct(items['Related Product']);
						newProductSold.setrelatedcost(trimDollarsAndNegatives(items['Related Cost']));
						newProductSold.setrelatedprice(trimDollarsAndNegatives(items['Related Price']));
						newProductSold.setportnumber(items['Port Number']);
						newProductSold.setpartialcb(items['Partial CB']);
						newProductSold.setchargeback(items['Charge Back']);
						newProductSold.setcollected(items['Collected']);
						
						if(StructKeyExists(items,"Bill Pay Deposit Clearing")){
							     newProductSold.setBILLPAY(moneyReplace(items['Bill Pay Deposit Clearing']));
							   }
								
						entitySave(newProductSold);
						
				}}}}
			
			
		
		}
public void function setDatascape(ListData, ListFile){
	var uploadStuff = EntityNew('uploadrecords');
			uploadStuff.settype('Datascape');
			uploadStuff.settime(Now());
			uploadStuff.setfilename(ListFile);
			entitySave(uploadStuff);
			var countofArray = 0;
			application.uploadCount = 0;
					for(var item in ListData){
						countofArray += 1;
					}
			// DATE ALREADY CLEARED ARRAY::
		wsPublish("uploads", application.uploadCount&"--"&countofArray);
			
	for(items in ListData){
				if(items['SalesID'] != 'SalesID' && len(items['SalesID'])){
					var merchant = items['MERCHANTID'];
					var storeQuery = ormExecuteQuery( "FROM stores as dc WHERE dc.MERCHANTID LIKE '"&merchant&"'" );
					var newProductSold = EntityNew('datascape');
					newProductSold.setSTORE(storeQuery[1].getStoreID());
					newProductSold.setSALESID(items['SalesID']);
					newProductSold.setRATETYPE(items['RateType']);
					newProductSold.setPLATFORM(items['Platform']);
					newProductSold.setCTRLNUM(items['CtrlNum']);
					newProductSold.setDATE(items['DateIn']);
					newProductSold.setTIME(items['TimeIn']);
					newProductSold.setMTN(items['MTN']);
					newProductSold.setMONEY(moneyReplace(items['Denomination']));
					entitySave(newProductSold);
	
	}
	
	}
	}
	
public void function setPTAR(ListData, ListFile){
	
			var uploadStuff = EntityNew('uploadrecords');
			uploadStuff.settype('ptar');
			uploadStuff.settime(Now());
			uploadStuff.setfilename(ListFile);
			entitySave(uploadStuff);
			var countofArray = 0;
			application.uploadCount = 0;
					for(var item in ListData){
						countofArray += 1;
					}
			// DATE ALREADY CLEARED ARRAY::
		wsPublish("uploads", application.uploadCount&"--"&countofArray);




			for(items in ListData){
				if(items['Location'] != 'Location' && len(items['Location'])){

				// FIND DATE - CLEAR DATE
				var dateFormated = Left(fixtime(items['Created On']),8);
//wsPublish("uploads", dateFormated);
				var invoice = items['Invoice ##'];
				
				var doorcountGrab = ormExecuteQuery( "FROM ptar as dc WHERE dc.INVOICE LIKE '"&invoice&"'" );
				var isKnown = ArrayIsEmpty(doorcountGrab);
				if(items['TYPE']=="BillPayment" || !isKnown){
					
				}
				else {
					
					
					var newProductSold = EntityNew('ptar');
					newProductSold.setINVOICE(items['Invoice ##']);
					newProductSold.setDATE(dateFormated);
					newProductSold.setRELATEDINVOICE(items['Related Invoice']);
					newProductSold.setSTORE(items['Location']);
					newProductSold.setTYPE(items['Type']);
					newProductSold.setUSER(items['Primary Employee']);
					newProductSold.setUSERTENDER(items['Tendered/Verified By']);
					
								if(StructKeyExists(items,"Bill Pay Deposit Clearing")){
							     newProductSold.setBILLPAY(moneyReplace(items['Bill Pay Deposit Clearing']));
							   }
							   if(StructKeyExists(items,"Phone Trade In Store")){
							     newProductSold.setTRADEIN(moneyReplace(items['Phone Trade In Store']));
							   }
								if(StructKeyExists(items,"Gift Card")){
							     newProductSold.setGIFTCARD(moneyReplace(items['Gift Card']));
							   }
							   if(StructKeyExists(items,"Phone Loss Warranty Replacement")){
							     newProductSold.setPHONELOSSWARRANTY(moneyReplace(items['Phone Loss Warranty Replacement']));
							   }
							   if(StructKeyExists(items,"Check")){
							     newProductSold.setCHECK(moneyReplace(items['Check']));
							   }
							   if(StructKeyExists(items,"Ven Reb Act")){
								newProductSold.setREBATES(moneyReplace(items['Ven Reb Act']));
								}
							   if(StructKeyExists(items,"Cash")){
							     newProductSold.setCASH(moneyReplace(items['Cash']));
							   }
							   if(StructKeyExists(items,"Virtual Terminal")){
							     newProductSold.setVIRTUALTERMINAL(moneyReplace(items['Virtual Terminal']));
							   }
							   
							  

							   var totalCard = 0;
							    if(StructKeyExists(items,"MasterCard-Integrated")){
							    totalCard += moneyReplace(items['MasterCard-Integrated']);
							    }
							    if(StructKeyExists(items,"Discover-Integrated")){
							    totalCard += moneyReplace(items['Discover-Integrated']);
							    }
							    if(StructKeyExists(items,"AMEX-Integrated")){
							    totalCard += moneyReplace(items['AMEX-Integrated']);
							    }
							    if(StructKeyExists(items,"Visa-Integrated")){
							    totalCard += moneyReplace(items['Visa-Integrated']);
							    }
			    				//if (IsDefined("sales['Datascape Cash only']")) newSale.setDATASCAPE(moneyReplace(sales['Datascape Cash only']));
			    				newProductSold.setCARDS(totalCard);
								EntitySave(newProductSold);
					
					
					
    
    
   
   
    
    
   
   
  
				}
			}
		}	
			wsPublish("uploads", "Done");	
				
	}



	public void function setCallList(ListData, ListFile){
				    



			//var dateUploaded = fixDateFromHoursUpload(HourFile);

			
			//wsPublish("uploads", locationFind);



			
				//var storeQuery = entityLoad( "stores");
	    		//var userQuery = entityLoad( "userlist");
		for(var item in ListData){
									var found = false;
    			if(item['Store']!='Store'&&len(item['Store'])){

	    			try{
	    				//wsPublish("uploads", "Load");
	    				
	    				//wsPublish("uploads", "Loaded");

	    				//wsPublish("uploads", "Emp");
					

	    				var hourEntry = EntityNew('calllist');

	    				
	    				hourEntry.setinvoice(item['Invoice']);
	    				hourEntry.setstore(item['Store']);
	    				hourEntry.setrep(item['Rep']);
	    				hourEntry.setdate(item['Date']);
	    				hourEntry.setproduct(item['Product']);
	    				hourEntry.setcustomer(item['Customer']);
	    				hourEntry.setimei(item['Imei']);
	    				hourEntry.setmtn(item['MTN']);
	    				hourEntry.settype(item['Type']);
	    				hourEntry.setcompleted('false');
	    				
	    				
	    				
	    				entitysave(hourEntry);

								   ormflush();

					} catch(Exception ex) {
	    				WriteOutput("<p>#ex.message#</p>");
						}
	    			}

	    			}




			}




		public void function setclockinclockout(HourData, HourFile){
				    var uploadStuff = EntityNew('uploadrecords');
			uploadStuff.settype('clockhours');
			uploadStuff.settime(Now());
			uploadStuff.setfilename(HourFile);
			entitySave(uploadStuff);

			var datesCleared = [];

			//var dateUploaded = fixDateFromHoursUpload(HourFile);

			var dateUploaded  = readuploadfilename(HourFile);
			//wsPublish("uploads", locationFind);

//wsPublish("uploads", dateFormated);






				
				//var doorcountGrab = ormExecuteQuery( "FROM clockinclockout as dc WHERE dc.date LIKE '"&dateUploaded&"%'" );
				if(isDefined("doorcountGrab")){


				for(Nylahs in doorcountGrab){
					EntityDelete(Nylahs);

				}
			}
	


				ormFlush();
				ormreload();
				//var storeQuery = entityLoad( "stores");
	    		//var userQuery = entityLoad( "userlist");
		for(var item in HourData){
									var found = false;
    			if(item['Location']!='Location'&&len(item['Location'])){

	    			try{
	    				//wsPublish("uploads", "Load");
	    				var storeQuery = entityLoad( "stores", item['Location'] , true );
	    				wsPublish("uploads" , storeQuery.getstoreid());
	    				
	    				var districtQuery = storeQuery.getDistrict();
	    				wsPublish("uploads" , districtQuery.getdistrictid());
	    				var regionQuery = districtQuery.getRegion();
	    				var userQuery = entityLoad( "userlist", {name =item['Employee']} , true );
	    				
wsPublish("uploads" , "0");
	    				//wsPublish("uploads", "Emp");
						if(!isDefined("userQuery")){
	    						userQuery = EntityNew('userlist');
	    						
	    						userQuery.setname(item['Employee']);
	    						userQuery.setusername(item['Username']);
	    						userQuery.setpassword("Verizon1234");
	    						userQuery.setaccesslevel(3);
	    						userQuery.setprimarystorename(storeQuery.getstoreid());
	    						userQuery.setdistrictname(districtQuery.getdistrictid());
	    						userQuery.setregionname(regionQuery.getregionid());
	    						EntitySave(userQuery);
	    						
	    						storeQuery.adduserlist(userQuery);
	    						EntitySave(storeQuery);
	    						districtQuery.adduserlist(userQuery);
	    						
	    						EntitySave(districtQuery);
	    						regionQuery.adduserlist(userQuery);
	    						EntitySave(regionQuery);
	    						ormflush();
	    						userQuery = entityLoad( "userlist", {name = item['Employee']} , true );
	    				}

						
						
	    				var hourEntry = EntityNew('clockinclockout');

	    				hourEntry.setdate(dateUploaded);
	    				hourEntry.settimein(item['Time In']);
	    				hourEntry.settimeout(item['Time Out']);
	    				hourEntry.sethours(item['Hours']);
	    				hourEntry.setusername(item['Employee']);
	    				hourEntry.setstorename(item['Location']);
	    				EntitySave(hourEntry);
	    				userQuery.addclockinclockout(hourEntry);
	    				storeQuery.addclockinclockout(hourEntry);
	    				entitySave(userQuery);
	    				entitySave(storeQuery);

								   ormflush();

					} catch(Exception ex) {
	    				WriteOutput("<p>#ex.message#</p>");
						}
	    			}

	    			}




			}



		public void function setHours(HourData, HourFile){
			    var uploadStuff = EntityNew('uploadrecords');
			uploadStuff.settype('hours');
			uploadStuff.settime(Now());
			uploadStuff.setfilename(HourFile);
			entitySave(uploadStuff);


			var locationFind = find( "From", HourFile);
			var dateUploaded = fixDateFromHoursUpload(HourFile);
			//wsPublish("uploads", locationFind);
			ormFlush();
				ormreload();
				//var storeQuery = entityLoad( "stores");
	    		//var userQuery = entityLoad( "userlist");
		for(var item in HourData){
									var found= false;
    			if(item['Location']!='Location'&&len(item['Location'])){

	    			try{
	    				wsPublish("uploads", "Load");
	    				var regionQuery = entityLoad( "region", item['Region'] , true );
	    				var districtQuery = entityLoad( "district", item['District'] , true );
	    				var storeQuery = entityLoad( "stores", item['Location'] , true );
	    				var userQuery = entityLoad( "userlist", item['Employee'] , true );
	    				wsPublish("uploads", "Loaded");
	    				if(!isDefined("regionQuery")){
	    					regionQuery = entityNew('region');
	    					regionQuery.setregionid (item['Region']);
	    					EntitySave(regionQuery);
	    					ormFlush();
							ormreload();
	    					regionQuery = entityLoad( "region", item['Region'] , true );

	    				}
	    				wsPublish("uploads", "Region");
	    				if(!isDefined("districtQuery")){
	    					districtQuery = entityNew('district');
	    					districtQuery.setdistrictid(item['District']);
	    					EntitySave(districtQuery);
	    					regionQuery.adddistrict(districtQuery);

	    					EntitySave(regionQuery);
	    					ormFlush();
							ormreload();
	    					regionQuery = entityLoad( "region", item['Region'] , true );
	    					districtQuery = entityLoad( "district", item['District'] , true );

	    				}
	    				wsPublish("uploads", "District");
	    				if(!isDefined("storeQuery")){
	    					storeQuery = entityNew('stores');
	    					storeQuery.setstoreid ( item['Location']);
	    					EntitySave(storeQuery);
	    					districtQuery.addstores(storeQuery);
	    					regionQuery.addstores(storeQuery);
	    					EntitySave(districtQuery);
	    					EntitySave(regionQuery);

	    					regionQuery = entityLoad( "region", item['Region'] , true );
	    					districtQuery = entityLoad( "district", item['District'] , true );
	    					storeQuery = entityLoad( "stores", item['Location'] , true );

	    				}
	    				wsPublish("uploads", "Store");
	    				if(!isDefined("userQuery")){
	    						userQuery = EntityNew('userlist');
	    						userQuery.setuserid(item['Employee']);
	    						userQuery.setusername(item['Username']);
	    						userQuery.setpassword("Verizon1234");
	    						userQuery.setaccesslevel(3);
	    						EntitySave(userQuery);
	    						ormflush();
	    						userQuery = entityLoad( "userlist", item['Employee'] , true );
	    				}
	    				wsPublish("uploads", "Emp");

	    					var hoursWork = EntityLoad('hoursworked', {user=item['Employee'], date=dateUploaded,store=item['Location']},true);
	    					if(!isDefined("hoursWork")){
	    				var hourEntry = EntityNew('hoursworked');
	    				hourEntry.setyearmonth(left(dateUploaded,6));
	    				hourEntry.setdate(dateUploaded);
	    				hourEntry.sethoursclocked(item['Regular Clocked']);
	    				hourEntry.setuser(item['Employee']);
	    				hourEntry.setstore(item['Location']);
	    				EntitySave(hourEntry);
	    				userQuery.addhoursworked(hourEntry);
	    				storeQuery.addhoursworked(hourEntry);
	    				entitySave(userQuery);
	    				entitySave(storeQuery);
	    				}else{
	    					hoursWork.sethoursclocked(item['Regular Clocked']);
	    					EntitySave(hoursWork);
	    				}
								   ormflush();

					} catch(Exception ex) {
	    				WriteOutput("<p>#ex.message#</p>");
						}
	    			}

	    			}




			}

		public any function setSchedule(ScheduleData, ScheduleFile){
		var count = 0;
		var logg = "";

			var uploadStuff = EntityNew('uploadrecords');
			uploadStuff.settype('schedule');
			uploadStuff.settime(Now());
			uploadStuff.setfilename(ScheduleFile);
			entitySave(uploadStuff);

			var codeMonth = [["Jan",01],
							["Feb",02],
							["Mar",03],
							["Apr",04],
							["May",05],
							["Jun",06],
							["Jul",07],
							["Aug",08],
							["Sep",09],
							["Oct",10],
							["Nov",11],
							["Dec",12]];


			var firstspot = find("-" , ScheduleFile);

			var secondspot = find("-", mid(ScheduleFile,firstspot+1,len(ScheduleFile)-firstspot));

		 var storenamefromfile = mid(ScheduleFile, firstspot+1, secondspot-1);


			var startdate = mid(ScheduleFile, firstspot+secondspot+1, 11);

			var startday = mid(startdate, 1,2);
			var startmonth = mid(startdate, 4,3);
			var startyear = mid(startdate, 8,4);

			var enddate = mid(ScheduleFile, firstspot+secondspot+16, 11);

			var endday = mid(enddate, 1,2);
			var endmonth = mid(enddate, 4,3);
			var endyear = mid(enddate, 8,4);

			var startmonthnum = "";
			var endmonthnum = "";

			for(var months in codeMonth){
				if(startmonth == months[1]){
					startmonthnum = months[2];
				}
				if(endmonth == months[1]){
					endmonthnum = months[2];
				}
			}
			count = count +1;
			wsPublish("uploads",count);
			var startofschedule = CreateDate(startyear,startmonthnum,startday);
			var newDay = 0;
			var logz = "";
			var arrayofDays = [];
			for(var i=0; i<7;i++){
				newDay = DateAdd("d",i,startofschedule );
				logz = logz &""& newDay;
				arrayofDays[i+1] = newDay;

				}

				var totalDaysinmonth = DaysInMonth(startofschedule);



			var endofschedule = CreateDate(endyear, endmonthnum, endday);

			var dayNameArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


			var thisStore = entityLoad('stores',storenamefromfile,true);
			var counting = 1;
			for(items in ScheduleData){
				if(counting ==1 || counting == 2){
					counting++;
				}
else if(counting==3){
//log=log&items['Employee'];

//wsPublish("uploads",log);
counting++;
}else{
					var thisEmployee = "";
			if(len(items['Employee'])){
				wsPublish("uploads", items['Employee']);
				thisEmployee = entityLoad('userlist',{name=items['Employee']},true);

				

			}



			 var thisthing = "";

			var thisone = "";



			 for(var i=1; i<8;i++){
			var thisSchedule = entityNew('storeschedule');
			var stupid = chr(10);
			var nextLine = chr(13)&chr(10);
			var thisMonth = Month(arrayofDays[i]);
			var monthcode = "blank";
			var fixdatezero = 0;
			wsPublish("uploads",thisMonth);
			for(var months in codeMonth){
				if(thisMonth == months[2]){
					monthcode = months[1];
				}
			}
				if(Day(arrayofDays[i])<10){
					fixdatezero = 0&Day(arrayofDays[i]);
				}
				else{
				fixdatezero = Day(arrayofDays[i]);
				}


				thisone = ToString(dayNameArray[i] & nextLine&fixdatezero & '-'&monthcode & '-'&Year(arrayofDays[i]));
			wsPublish("uploads",thisone);
				thisthing = items[thisone];
				wsPublish("uploads",thisthing);
				var timeone = mid(thisthing,1,8);
				var timetwo = mid(thisthing,11,8);
				logg = logg &"    "&timeone&"  "& timetwo & nextLine ;
				if(thisMonth<10){
				thisMonth = 0&thisMonth;
				}
				thisSchedule.setstarttime(timeone);
				thisSchedule.setendtime(timetwo);
				thisSchedule.setdate(Year(arrayofDays[i])&thisMonth&fixdatezero);
				thisSchedule.setusername (items['Employee']);
				thisSchedule.setstorename (storenamefromfile);
				entitySave(thisSchedule);
				thisStore.addstoreschedule(thisSchedule);
			 	thisEmployee.addstoreschedule(thisSchedule);
			 	entitySave(thisStore);
			 	entitySave(thisEmployee);
			 }




			}}
			/*


			var arrayofDays = [];
			var newDay = now();
			for(var i=0; i<7;i++){
				count = count +1;
				newDay = DateAdd("d",1,startofschedule );

			arrayofDays[i+1] = newDay;

			}


			var totalDaysinmonth = DaysInMonth(startofschedule);



			var endofschedule = CreateDate(endyear, endmonthnum, endday);

			var dayNameArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


			var thisStore = entityLoad('stores',storenamefromfile,true);
			var counting = 1;
			for(items in ScheduleData){
				if(counting ==1 || counting == 2){
					counting++;
				}
else if(counting==3){
//log=log&items['Employee'];

//wsPublish("uploads",log);
counting++;
}
				else{

			if(len(items['Employee'])){
				var thisEmployee = entityLoad('userlist',items['Employee'],true);



			}


			wsPublish("uploads",logg);
			 var thisthing = "";

			var thisone = "";



			 for(var i=1; i<8;i++){
			var thisSchedule = entityNew('storeschedule');
			var stupid = chr(10);
			var nextLine = chr(13)&chr(10);

				thisone = ToString(dayNameArray[i] & stupid&Day(arrayofDays[i]) & '-'&'Oct' & '-'&Year(arrayofDays[i]));

				thisthing = items[thisone];
var timeone = mid(thisthing,1,8);
var timetwo = mid(thisthing,11,8);
				logg = logg &"    "&timeone&"  "& timetwo & nextLine ;
				thisSchedule.setstarttime(timeone);
				thisSchedule.setendtime(timetwo);
				thisSchedule.setdate(Year(arrayofDays[i])&startmonthnum&Day(arrayofDays[i]));

				entitySave(thisSchedule);
				thisStore.addstoreschedule(thisSchedule);
			 	thisEmployee.addstoreschedule(thisSchedule);
			 	entitySave(thisStore);
			 	entitySave(thisEmployee);
			 }




			}

		}

		*/
		}
		
		
		public void function setSBI(SBIData, SBIFile){

		}
		public any function setEmployees(EmpData, EmpFile){
			ORMReload();
				for(items in EmpData){
					var thisemp = EntityLoad("userlist", items['Employee'], true);
					
					if(isDefined('thisemp')){
						//primary
						//access
						//email
					thisemp.sethiredate(items['Hire Date']);
					if(items['Status']=='Enabled'){
						
						
					}
					else{
					thisemp.setaccesslevel('4');	
					
					}
					
					EntitySave(thisemp);
					}
					}
					
		}
		
		public void function setPDR(PDRData, PDRFile){
			
			
			var uploadStuff = EntityNew('uploadrecords');
			uploadStuff.settype('pdr');
			uploadStuff.settime(Now());
			uploadStuff.setfilename(PDRfile);
			entitySave(uploadStuff);
			
			var countofArray = 0;
			application.uploadCount = 0;
					for(var item in PDRData){
						countofArray += 1;
					}
			
			// DATE ALREADY CLEARED ARRAY::
			var datesCleared = [];
//container thing
//region-district-store-user-time-group-quantity/gp
var container={};

//load product groups

			for(var items in PDRData){


//get productgroupmatch
//create inventory
//add inventory into productsku to productgroup relation
//find gp add to quantity to container

				application.uploadCount = LSParseNumber(application.uploadCount) + 1;

				wsPublish("uploads", application.uploadCount&"--"&countofArray);


				if(items['Invoiced By']!='Invoiced By'&&len(items['Invoiced By'])){

				// FIND DATE - CLEAR DATE
				var dateFormated = Left(fixtime(items['Sold On']),8);
//wsPublish("uploads", dateFormated);
var thisDateFound = false;

for(var theDates in datesCleared){
		if(theDates == dateFormated){
			thisDateFound = true;
		}

}

if(!thisDateFound){

				ArrayAppend(datesCleared, dateFormated);
				var productdetailsGrab = ormExecuteQuery( "FROM productdetails as dc WHERE dc.date LIKE '"&dateFormated&"%'" );
				if(isDefined("productdetailsGrab")){


				for(Nylahs in productdetailsGrab){
					EntityDelete(Nylahs);

				}
				}
				var noncomms = ormExecuteQuery( "FROM noncomm as dc WHERE dc.date LIKE '"&dateFormated&"%'" );
				if(isDefined("noncomms")){


				for(Nylahs in noncomms){
					EntityDelete(Nylahs);

				}
				}
			}
	

				//find times set variables

				var theInvoice = entityLoad( "saleinvoice", items['Invoice ##'] , true );
				var theUser = entityLoad( "userlist", {name = items['Sold By']} , true );
				var theStore = entityLoad( "stores", items['Invoiced By'] , true );
				var theDistrict = entityLoad( "district", items['District'] , true );
				var theRegion = entityLoad( "region", items['Region'] , true );
				var noncommlist = entityLoad( "noncommlist");
					if(!isDefined("theRegion")){

						var newRegion = EntityNew('region');
						newRegion.setregionid(items['Region']);
						EntitySave(newRegion);
						ormflush();
						theRegion = entityLoad( "region", items['Region'] , true );

					 }

					 if(!isDefined("theDistrict")){

						var newDistrict = EntityNew('district');
						newDistrict.setdistrictid(items['District']);
						EntitySave(newDistrict);
						ormflush();
						theRegion = entityLoad( "region", items['Region'] , true );
						theRegion.adddistrict(newDistrict);
						EntitySave(theRegion);
						ormflush();
						theDistrict = entityLoad( "district", items['District'] , true );
						//container[items['Region']][items['District']]={};
					 }

					 if(!isDefined("theStore")){
						var newStore = EntityNew('stores');
						newStore.setstoreid(items['Invoiced By']);
						EntitySave(newStore);
						ormflush();
						theRegion = entityLoad( "region", items['Region'] , true );
						theDistrict = entityLoad( "district", items['District'] , true );
						theDistrict.addstores(newStore);
						theRegion.addstores(newStore);
						EntitySave(theRegion);
						EntitySave(theDistrict);
						ormflush();
						theStore = entityLoad( "stores", items['Invoiced By'] , true );
						//container[items['Region']][items['District']][items['Invoiced By'] ]={};

					 }

					 if(!isDefined("theUser")){
   						var user = EntityNew('userlist');
   						user.setname(items['Sold By']);
   						user.setpassword("Verizon1234");
   						user.setbasepercent(15);
   						user.setaccesslevel(3);
						user.setprimarystorename(items['Invoiced By']);
   						user.setdistrictname(items['District']);
   						user.setregionname(items['Region']);
   						EntitySave(user);
						theStore = entityLoad( "stores", items['Invoiced By'] , true );
						theStore.adduserlist(user);
						EntitySave(theStore);
						theDistrict = entityLoad( "district", items['District'] , true );
						theDistrict.adduserlist(user);
						EntitySave(theDistrict);
						theRegion = entityLoad( "region", items['Region'] , true );
						theRegion.adduserlist(user);
						EntitySave(theRegion);
   						ormflush();
   						theUser = entityLoad( "userlist", {name = items['Sold By']} , true );
   						//container[items['Region']][items['District']][items['Invoiced By'] ][items['Sold By']]={};

   					  }


	   			if(!isDefined("theInvoice")){
/*
			    				var newSale = EntityNew('saleinvoice');
			    				var storeQuery = entityLoad( "stores", items['Invoiced By'] , true );
			    				var employeeQuery = entityLoad( "userlist", {name = items['Sold By']} , true );
			    				 newSale.setsaleinvoiceid(items['Invoice ##']);

							   newSale.setuser(items['Sold By']);



							   newSale.setDATE(fixtime(items['Sold On']));

								EntitySave(newSale);
								ormflush();
								theInvoice = EntityLoad('saleinvoice',items['Invoice ##'],true);
								storeQuery.addsaleinvoice(theInvoice);
		    						employeeQuery.addsaleinvoice(theInvoice);
		    						entitySave(storeQuery);
		    						entitySave(employeeQuery);

*/
	   								}

	   								//wsPublish("uploads", application.uploadCount&"--"&countofArray);

	   								//wsPublish("uploads", application.uploadCount&"--"&countofArray);
					var thissku = items['Product SKU'];
					var noncommsfind = ormExecuteQuery( "FROM noncommlist as dc WHERE dc.PRODUCTSKU LIKE '"&thissku&"%'" );

					var newProductSold = EntityNew('productdetails');
					newProductSold.setinvoicenumber(items['Invoice ##']);
					newProductSold.setdate(fixtime(items['Sold On']));

					newProductSold.setstorename(items['Invoiced By']);
					newProductSold.setusername(items['Sold By']);
					newProductSold.setdistrictname(items['District']);
					newProductSold.setregionname(items['Region']);
					newProductSold.setcustomername(items['Customer']);



					newProductSold.setPRODUCTSKU(items['Product SKU']);
					
					newProductSold.setCATEGORY(items['Category']);
					newProductSold.setTRACKINGNUMBER(items['Tracking ##']);
					newProductSold.setCONTRACTNUMBER(items['Contract ##']);
					newProductSold.setPRODUCTNAME(items['Product Name']);

					newProductSold.setREFUND(items['Refund']);
					newProductSold.setQUANTITY(items['Qty']);

					newProductSold.setTOTALCOST(moneyReplace(items['Total Cost']));
					newProductSold.setSOLDFOR(moneyReplace(items['Sold For']));

					newProductSold.setGROSSPROFIT(moneyReplace(items['Gross Profit']));
					
					
				
					
					
					
					EntitySave(newProductSold);
					if(ArrayIsEmpty(noncommsfind)){
						
					}else{
						var newnoncomm = EntityNew('noncomm');
						newnoncomm.setinvoicenumber(items['Invoice ##']);
						newnoncomm.setPRODUCTSKU(items['Product SKU']);
						newnoncomm.setdate(fixtime(items['Sold On']));
						newnoncomm.setstorename(items['Invoiced By']);
						newnoncomm.setusername(items['Sold By']);
						newnoncomm.setREFUND(items['Refund']);
						newnoncomm.setQUANTITY(items['Qty']);
						newnoncomm.setSOLDFOR(moneyReplace(items['Sold For']));
						newnoncomm.setPRODUCTNAME(items['Product Name']);
						newnoncomm.setTRACKINGNUMBER(items['Tracking ##']);
						EntitySave(newnoncomm);
					}
					
					

					ormflush();

					}



					//process container, save finals,take list delete previous
			}


		}
		
		
		public any function organizeSales(SBIData,SBIFile){

			  var uploadStuff = EntityNew('uploadrecords');

				  uploadStuff.settype('salesbyinvoice');

				  uploadStuff.settime(Now());
				  var countofArray = 0;
					for(var item in SBIData){
						countofArray += 1;
						}
				 wsPublish("uploads", application.uploadCount&"--"&countofArray);
				  entitySave(uploadStuff);
			  for(var sales in SBIData){
			  	application.uploadCount = LSParseNumber(application.uploadCount) + 1;
			  	wsPublish("uploads", application.uploadCount&"--"&countofArray);

	    		if(sales['Invoice ##']!='Invoice ##'&&len(sales['Invoice ##'])){

		    			try {
		    					//wsPublish("uploads", "ebvenm");
		    				var theInvoice = entityLoad( "saleinvoice", sales['Invoice ##'] , true );
		    				
		    				

	    					
	    					

		    				if(!isDefined("theInvoice")){
			    				
			    			   newSale = EntityNew('saleinvoice');
			    			   newSale.setsaleinvoiceid(sales['Invoice ##']);
							   newSale.setuser(sales['Sold By']);
							   newSale.setCUSTOMER(moneyReplace(sales['Customer']));
							   newSale.setCOMMENTS(sales['Invoice Comments']);
							   newSale.setDATE(fixtime(sales['Created On']));
							   newSale.setStore(sales['Invoiced At']);



							   if(StructKeyExists(sales,"Ven Reb Act")){
							   newSale.setRebates(moneyReplace(sales['Ven Reb Act']));
							   }
							   if(StructKeyExists(sales,"Cash")){
							     newSale.setCASH(moneyReplace(sales['Cash']));
							   }
							   if(StructKeyExists(sales,"Virtual Terminal")){
							     newSale.setVirtualTerminal(moneyReplace(sales['Virtual Terminal']));
							   }

							   var totalCard = 0;
							    if(StructKeyExists(sales,"MasterCard-Integrated")){
							    totalCard += moneyReplace(sales['MasterCard-Integrated']);
							    }
							    if(StructKeyExists(sales,"Discover-Integrated")){
							    totalCard += 	moneyReplace(sales['Discover-Integrated']);
							    }
							    if(StructKeyExists(sales,"AMEX-Integrated")){
							    totalCard += moneyReplace(sales['AMEX-Integrated']);
							    }
							    if(StructKeyExists(sales,"Visa-Integrated")){
							    totalCard += moneyReplace(sales['Visa-Integrated']);
							    }
			    				//if (IsDefined("sales['Datascape Cash only']")) newSale.setDATASCAPE(moneyReplace(sales['Datascape Cash only']));
			    				newSale.setCARDS(totalCard);

								//newSale.setTRADEIN(moneyReplace(sales['Phone Trade In Store']));
								EntitySave(newSale);
								ormflush();



	   								thisSale = EntityLoad('saleinvoice',sales['Invoice ##'],true);
	   								
		    						
		    						ormflush();




					}


		    			}catch(Exception ex) {
		    				WriteOutput("<p>#ex.message#</p>");
						}

    				}

    		}

    	}


public void function setInventory(inventoryData,filename){
	
	
				 var uploadStuff = EntityNew('uploadrecords');
				  uploadStuff.settype('inventory');
				  uploadStuff.settime(Now());
				  uploadStuff.setfilename(right(filename,23));
				  entitySave(uploadStuff);
				 var oldStock = EntityLoad('inventory');
				for(var i = 1;i<=arrayLen(oldStock);i++){
					entityDelete(oldStock[i]); 
				}
				ormFlush();
				ormreload();
				
					//var publishString = arrayLen(inventoryData);
					var countofArray = 0;
					
					for(var item in inventoryData){
						countofArray += 1;
						}
						for(var item in inventoryData){
									application.uploadCount = LSParseNumber(application.uploadCount) + 1;
									
									wsPublish("uploads", application.uploadCount&"--"&countofArray);
									
									var found= false;
									
					    			if(item['Product Name']!='Product Name'&&len(item['Product Name'])){
					    			
					    			
					    			 
						    			var productList = entityLoad("productcatalog", item['Product SKU'] , true );
						    			
						    			try{
						    				if(!isDefined("productList")){
						    					
	    											productList = EntityNew('productcatalog');
							   						productList.setproductcatalogid(item['Product SKU']);
							   						productList.setrqsku(item['Product SKU']);
											   		productList.setname(item['Product Name']); 
											   		  
											    var itemCost = replace(item['Unit Cost'],"$","");
							    					itemCost = replace(itemCost, "," , "");
											    	
											    	 
												   productList.setlowcost(itemCost);
												   productList.sethighcost(itemCost);
												   productList.setvendor(item['Vendor']);
												    productList.setisfromrq("true");
												    productList.setparentid(0);
												
											    	EntitySave(productList); 
											    	ormflush();
											   }
						    						productList.setvendor(item['Vendor']);
						    					var thisCategory = productList.getcategory();
						    					var categoryname = "";
						    					if(!isDefined('thisCategory')){
						    						
						    				if( FindNoCase(">> Cellular Accessories", item['Category'])>0  ){  
						    					
						    					 categoryname = "Accessory";
						    					 productList.setaccessorybelongstodevice('false');
						    				}
						    				else if(FindNoCase(">> Activations >> Verizon Equip & Comn", item['Category'])>0){
						    					
						    					categoryname = "Phone";
						    				}
						    				else{
						    					categoryname = "Other";
						    					
						    				}
						    					productList.setcategory(categoryname);
						    				
						    				
						    				}else{
						    					categoryname = thisCategory;
						    				productList.setcategory(categoryname);
						    				}
							    				
							    						
							    					var itemCost = replace(item['Unit Cost'],"$","");
							    					itemCost = replace(itemCost, "," , "");
							    					
												if(!productList.getisfromrq()){
	    											productList.setproductcatalogid(item['Product SKU']);
	    											productList.setrqsku(item['Product SKU']);
											   		productList.setname(item['Product Name']); 
											    	productList.sethidden(false);
											    	productList.setcategory(item['Category']); 
											    	
												   productList.setlowcost(itemCost);
												   productList.sethighcost(itemCost);
												    productList.setisfromrq("true");
											    	EntitySave(productList); 
	    										}
	    										else if(productList.getlowcost()>itemCost){
	    											productList.setlowcost(itemCost);
												  EntitySave(productList); 
	    										}
												else if(productList.gethighcost()<itemCost){
	    											productList.sethighcost(itemCost);
												  EntitySave(productList); 
	    										}
	    										
	    										
	    										
												var product = EntityNew('inventory');
								    			product.settracking(item['Tracking ##']);
											    product.setname(item['Product Name']); 
											    product.setcategory(categoryname);
												product.setcost(itemCost);
												product.setquantity(item['Quantity']);  
												product.setstorename(item['Location']);
												product.setproductsku(item['Product SKU']);
												product.setregionname(item['Region']);
											    product.setdistrictname(item['District']);
											    product.setstorename(item['Location']);
											    EntitySave(product); 
											    
											    ormflush(); 
												
											}
										catch(Exception ex) { 
						    				WriteOutput("<p>#ex.message#</p>"); 
											} 
											
						
				
				
									
								}	
						}
						wsPublish("uploads" , "done");
}



		public boolean function checkDates(vzwdate,rq4Date){
			var month = ListGetAt(vzwdate,1,"/");
			var day = ListGetAt(vzwdate,2,"/");
			var year = ListGetAt(vzwdate,3,"/");
			if(left(month,1)==0){
				month = replace(month,"0","");
			}
			if(left(day,1)==0){
				day = replace(day,"0","");
			}
			if(len(year)==5){
				year = left(year,len(year)-1);
			}
			var modvzwDate = month&"/"&day&"/"&year;
			if(right(modvzwDate,1)==" "){

			}

			//writeoutput("VZW:"&modvzwDate&"RQ4:"&rq4Date&"<br/>");

			if(modvzwDate == rq4Date){

				//writeoutput("YUP<br/>");
			return true;
			}
			//writeoutput("VZW:"&modvzwDate&"RQ4:"&rq4Date&"<br/>");
			return false;
		}


		public void function addUpMoney(row, column){
			if(find("$",row[column],1)>0&&len(row['Tracking ##'])==10&&column=="Total Sales"){
						var salePrice = trimDollarsAndNegatives(row[column]);
						var sum = scope.salesDatabase[row['Invoice ##']]['Total Comm'];
						var total = sum + salePrice;
						scope.salesDatabase[row['Invoice ##']]['Total Comm']= total;
					}
					else if(find("$",row[column],1)>0){
						var salePrice = trimDollarsAndNegatives(row[column]);
						var sum = scope.salesDatabase[row['Invoice ##']][column];
						var total = sum + salePrice;
						scope.salesDatabase[row['Invoice ##']][column]= total;
					}


		}


		public any function trimDollarsAndNegatives(moneyString){
			
			
			var withoutDollar = right(moneyString,len(moneyString)-find("$",moneyString,1));
			withoutDollar = replace(withoutDollar, "," , "" , "All");
			if(right(withoutDollar,1)==')'){
			withoutDollar=(left(withoutDollar,len(withoutDollar)-1))*-1;
			}
			
			return withoutDollar;
		}
		remote any function readuploadfilename(filename){
			//Punch Clock Summary Report For District SanatOn25-Oct-2017 203935
			var FindFor = find( "For", filename);
			var FindOn = find( "On", filename);


			var codeMonth = [["Jan",01],
					["Feb",02],
					["Mar",03],
					["Apr",04],
					["May",05],
					["Jun",06],
					["Jul",07],
					["Aug",08],
					["Sep",09],
					["Oct",10],
					["Nov",11],
					["Dec",12]];
					var storename = Mid(filename,FindFor+4,FindOn-FindFor-4);

					wsPublish("uploads", storename);
					var day = Mid(filename,FindOn+2,2);
					var month = Mid(filename,FindOn+5,3);
					for( var months in codeMonth){
					wsPublish("uploads", months);
						if (months[1]==month){
							month = months[2];
						}

					}
					var year = Mid(filename,FindOn+9,4);

			var comboString = year&""&month&""&day;
			wsPublish("uploads", comboString);
			return comboString;
		}

		remote any function fixDateFromHoursUpload(filename){
			var locationFind = find( "From", filename);
			var codeMonth = [["Jan",01],
					["Feb",02],
					["Mar",03],
					["Apr",04],
					["May",05],
					["Jun",06],
					["Jul",07],
					["Aug",08],
					["Sep",09],
					["Oct",10],
					["Nov",11],
					["Dec",12]];
					var day = Mid(filename,locationFind+5,2);
					var month = Mid(filename,locationFind+8,3);
					for( var months in codeMonth){
					wsPublish("uploads", months);
						if (months[1]==month){
							month = months[2];
						}

					}
					var year = Mid(filename,locationFind+12,4);

			var comboString = year&""&month&""&day;
			wsPublish("uploads", comboString);
			return comboString;
		}

		remote any function fixTime(xx){
			var dateRQ = xx;
			var codeMonth = [["Jan",01],
					["Feb",02],
					["Mar",03],
					["Apr",04],
					["May",05],
					["Jun",06],
					["Jul",07],
					["Aug",08],
					["Sep",09],
					["Oct",10],
					["Nov",11],
					["Dec",12]];

			var dateArray= [];
			var month ="";
			var day ="";
			var year= "";
			var time= "";
			var hours = "";
			var minutes = "";

			var count = 1;
			for(var i=1;i<Len(dateRQ);i++){
					if(dateRQ.charAt(i)==" "){


						if(count == 1){
							month = left(dateRQ,i);
							for(var cmonth in codeMonth){

								if(month == cmonth[1]){
									month = replace(cmonth[1],cmonth[1],cmonth[2]);
								}

							}
							count++;
						}
						else if(count == 2){
							if(dateRQ.charAt(i-3)==" "){

								day = dateRQ.charAt(i-2);
								day = "0"&day;
							}
							else{
								day = mid(dateRQ,i-2,2);
							}
							count++;
						}
						else if(count == 3){
							year = mid(dateRQ,i-3,4);
							count++;
						}
						else if(count == 4){
							if(dateRQ.charAt(i-5)==" "){
								hours = mid(dateRQ,i-3,1);

								minutes = mid(dateRQ,i-1,2);
								if(mid(dateRQ,i+2,2)=="PM"&&hours!="12"){

									hours+=12;
								}
							}
							else{

								hours = mid(dateRQ,i-4,2);
								minutes = mid(dateRQ,i-1,2);
								PM = mid(dateRQ,i+2,2);

								if(mid(dateRQ,i+2,2)=="PM"&&hours!="12"){

								hours+=12;
								}
								if(mid(dateRQ,i+2,2)=="AM"&&hours=="12"){

								hours="00";
								}

							}

							if(len(hours)==1){
								hours = "0"&hours;
							}
						}

					}

			}

			fulltimecode = year&month&day&hours&minutes;
			return fulltimecode;
		}




	</cfscript>
</cfcomponent>