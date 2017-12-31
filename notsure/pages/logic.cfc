
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


		public void function setclockinclockout(HourData, HourFile){
				    var uploadStuff = EntityNew('uploadrecords');
			uploadStuff.settype('clockhours');
			uploadStuff.settime(Now());
			uploadStuff.setfilename(HourFile);
			entitySave(uploadStuff);



			//var dateUploaded = fixDateFromHoursUpload(HourFile);

			var dateUploaded  = readuploadfilename(HourFile);
			//wsPublish("uploads", locationFind);



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
	    				var userQuery = entityLoad( "userlist", item['Employee'] , true );
	    				//wsPublish("uploads", "Loaded");

	    				//wsPublish("uploads", "Emp");



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
				thisEmployee = entityLoad('userlist',items['Employee'],true);



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
		public void function setPDR(PDRData, PDRFile){
			var uploadStuff = EntityNew('uploadrecords');
			uploadStuff.settype('pdr');
			uploadStuff.settime(Now());
			uploadStuff.setfilename(PDRfile);
			entitySave(uploadStuff);
			wsPublish("debugging", "really funny");
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

			for(items in PDRData){


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

for(theDates in datesCleared){
		if(theDates == dateFormated){
			thisDateFound = true;
		}

}

if(!thisDateFound){

				ArrayAppend(datesCleared, dateFormated);
				var doorcountGrab = ormExecuteQuery( "FROM productdetails as dc WHERE dc.date LIKE '"&dateFormated&"%'" );
				if(isDefined("doorcountGrab")){


				for(Nylahs in doorcountGrab){
					EntityDelete(Nylahs);

				}
			}
	}

				//find times set variables

				var theInvoice = entityLoad( "saleinvoice", items['Invoice ##'] , true );
				var theUser = entityLoad( "userlist", items['Sold By'] , true );
				var theStore = entityLoad( "stores", items['Invoiced By'] , true );
				var theDistrict = entityLoad( "district", items['District'] , true );
				var theRegion = entityLoad( "region", items['Region'] , true );

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
   						user.setuserid(sales['Sold By']);
   						user.setpassword("Verizon1234");
   						user.setaccesslevel(3);
   						user.setdistrictname(items['District']);
   						EntitySave(user);
						theDistrict = entityLoad( "district", items['District'] , true );
						theDistrict.adduserlist(user);
						EntitySave(theDistrict);
   						ormflush();
   						theUser = entityLoad( "userlist", items['Sold By'] , true );
   						//container[items['Region']][items['District']][items['Invoiced By'] ][items['Sold By']]={};

   					  }


	   			if(!isDefined("theInvoice")){
/*
			    				var newSale = EntityNew('saleinvoice');
			    				var storeQuery = entityLoad( "stores", items['Invoiced By'] , true );
			    				var employeeQuery = entityLoad( "userlist", items['Sold By'] , true );
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
		    				var storeQuery = entityLoad( "stores", sales['Invoiced At'] , true );
		    				var employeeQuery = entityLoad( "userlist", sales['Sold By'] , true );

	    					if(!isDefined("storeQuery")){
	    						store.setstoreid(sales['Invoiced At']);


	    						store.setregion(sales['Region']);
	    						store.setdistrict(sales['District']);



	    						EntitySave(store);
	    						ormflush();
	    						storeQuery = entityLoad( "stores", sales['Invoiced At'] , true );
	    						}
	    					if(!isDefined("employeeQuery")){
	    						var user = EntityNew('userlist');
	    						user.setuserid(sales['Sold By']);
	    						user.setpassword("Verizon1234");
	    						user.setaccesslevel(3);
	    						EntitySave(user);
	    						ormflush();
	    						employeeQuery = entityLoad( "userlist", sales['Sold By'] , true );
	    						}

		    				if(!isDefined("theInvoice")){
			    				//wsPublish("uploads", "what the fuck");
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
	   								storeQuery.addsaleinvoice(thisSale);
		    						employeeQuery.addsaleinvoice(thisSale);
		    						entitySave(storeQuery);
		    						entitySave(employeeQuery);
		    						ormflush();




					}


		    			}catch(Exception ex) {
		    				WriteOutput("<p>#ex.message#</p>");
						}

    				}

    		}

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