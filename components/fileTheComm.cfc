
<cfcomponent>
	<cfscript>
	
		remote any function testGet(){
			var orderSetting = entityLoad("ordersettings");
			for(var settings in orderSetting){
			writedump(settings.getproductlist().getRQSKU());
		
			}
			writedump(orderSetting[1].getstore().getstoreid());
	    					
	    					
		}
		
		
		public any function saveComm(newFile,upgFile,insFile,cbFile,deactFile,fileName){
			
			var storeQuery = entityLoad( "store");
			var storeName = "";
			var monthToCategorizeCommInto = "";		    				
	    				for(var stores in StoreQuery){
	    					if(fileName contains stores.getstoreid()){
	    						storeName = stores.getstoreid();
	    					}
	    				}
						for(var i=1;i<=12;i++){
							if(fileName contains i){
								monthToCategorizeCommInto = i;
							}
						}
			
			
			private any function changeMOBIL(number){
				
			number = replace(number,"-","","all");
			number = replace(number," ","","all");
			
			number = left(number,10);
			 
			return number;
			}
			
			
			private any function changeNEWdate(date){
			 					
			var month = ListGetAt(date,1,"/");
			var day = ListGetAt(date,2,"/");
			var year = ListGetAt(date,3,"/");
			
			if(left(month,1)!=0&&(len(month)==1)){
				month = "0"&month;
			}
			if(left(day,1)!=0&&(len(day)==1)){
				day = "0"&day;
			}
			var modvzwDate = ""&year&month&day&"";
			if(right(modvzwDate,1)==" "){
				modvzwDate = replace(modvzwDate," ","");
			}
			
			//writeoutput("VZW:"&modvzwDate&"RQ4:"&rq4Date&"<br/>");
			
			
			//writeoutput("VZW:"&modvzwDate&"RQ4:"&rq4Date&"<br/>");
			return modvzwDate;
		}
		 private any function changeUPGdate(date){
			 					
			var month = ListGetAt(date,1,"/");
			var day = ListGetAt(date,2,"/");
			var year = ListGetAt(date,3,"/");
		
			var modvzwDate = ""&year&month&day;
			modvzwDate = mid(modvzwDate,1,4)&mid(modvzwDate,6,4);
			
			//writeoutput("VZW:"&modvzwDate&"RQ4:"&rq4Date&"<br/>");
			
			
			//writeoutput("VZW:"&modvzwDate&"RQ4:"&rq4Date&"<br/>");
			return modvzwDate;
		}
			    					
			 private any function moneyReplace(number){
			 	
			    					return Replace(Replace(Replace(Replace(number,"$",""), "(" , "-" ),")","" ),",","");
			    				}
			    				
			    				/*HARD CODED LOCATION CODES!!!!!!!!!!
			    				HARD CODED LOCATION CODES!!!!!!!!!!
			    				HARD CODED LOCATION CODES!!!!!!!!!!
			    				HARD CODED LOCATION CODES!!!!!!!!!!
			    				*/
			 
			 for(var acts in newFile){
			 	if(acts['Agent ID']!='Agent ID'&&len(acts['Agent ID'])){
				 	try {
				 		var addComm = entityNew('comms');
				 		 addComm.setTYPE("NEW");
				 		 addComm.setMOBILEID(changeMOBIL(acts['Mobile ID']));
				 		 addComm.setDeviceID(acts['Device ID']);
				 		 addComm.setCUSTOMERNAME(acts['Customer Name']);
				 		
				 		 addComm.setDATE(changeNEWdate(acts['Activation Date']));
				 		 addComm.setLOCATION(storeName);
				 		 addComm.setmonthGroup(monthToCategorizeCommInto);
				 		 
				 		// addComm.setMODEL(acts['  Model']);
				 		 addComm.setRECEIVABLE(moneyReplace(acts['Purchased Receivable']));
				 		 addComm.setADC(moneyReplace(acts['ACD']));
				 		 addComm.setCMSN(moneyReplace(acts['Commission Amount']));
				 		 addComm.setSPIFF(moneyReplace(acts['SPIFF Amount']));
				 		 EntitySave(addComm);
				 		 
				 	}catch(Exception ex) {
			    				WriteOutput("<p>#ex.message#</p>"); 
							} 
				 	}
			 }
			 for(var acts in upgFile){
			 	if(acts['Agent ID']!='Agent ID'&&len(acts['Agent ID'])){
				 	try {
				 		var addComm = entityNew('comms');
				 		addComm.setTYPE("UPG");
				 		 addComm.setMOBILEID(changeMOBIL(acts['Original Mobile ID']));
				 		 addComm.setDeviceID(acts['Device ID']);
				 		 addComm.setALTMOBIL(changeMOBIL(acts['Mobile ID']));
				 		 addComm.setCUSTOMERNAME(acts['Customer Name']);
				 		 
				 		 addComm.setDATE(changeNEWdate(acts['Device Change Date']));
				 		   addComm.setLOCATION(storeName);
				 		 addComm.setmonthGroup(monthToCategorizeCommInto);
				 		 //addComm.setMODEL(acts['MODEL']);
				 		 addComm.setRECEIVABLE(moneyReplace(acts['Purchased Receivable']));
				 		 addComm.setADC(moneyReplace(acts['Additional Commission Amount']));
				 		 addComm.setCMSN(moneyReplace(acts['Commission Amount']));
				 		 addComm.setSPIFF(moneyReplace(acts['SPIFF Amount']));
				 		 EntitySave(addComm);
				 		 
				 	}catch(Exception ex) {
			    				WriteOutput("<p>#ex.message#</p>"); 
							} 
				 	}
			 }
			 for(var acts in insFile){
			 	if(acts['Agent ID']!='Agent ID'&&len(acts['Agent ID'])){
				 	try {
				 		var addComm = entityNew('comms');
				 		addComm.setTYPE("INS");
				 		 addComm.setMOBILEID(changeMOBIL(acts['Mobile ID']));
				 		 addComm.setDeviceID(acts['Device ID']);
				 		  addComm.setLOCATION(storeName);
				 		 addComm.setmonthGroup(monthToCategorizeCommInto);
				 		 addComm.setNOTES(acts['Notes']);
				 		 addComm.setCMSN(moneyReplace(acts['Adj Amount']));
				 		 
				 		 EntitySave(addComm);
				 		 
				 	}catch(Exception ex) {
			    				WriteOutput("<p>#ex.message#</p>"); 
							} 
				 	}
			 }
			 for(var acts in cbFile){
			 	if(acts['Agent ID']!='Agent ID'&&len(acts['Agent ID'])){
				 	try {
				 		var addComm = entityNew('comms');
				 		addComm.setTYPE("CB");
				 		 addComm.setMOBILEID(changeMOBIL(acts['Original Mobile ID']));
				 		 addComm.setLOCATION(storeName);
				 		 addComm.setmonthGroup(monthToCategorizeCommInto);
				 		 addComm.setCUSTOMERNAME(acts['Customer Name']);
				 		 addComm.setSTARTDATE(changeNEWdate(acts['Activation Date']));
				 		 addComm.setENDDATE(changeNEWdate(acts['Deactivation Date']));
				 		 addComm.setDeviceID(acts['Device ID']);
				 		 addComm.setRECEIVABLE(moneyReplace(acts['Purchased Receivable']));
				 		 addComm.setADC(moneyReplace(acts['Additional Commission Amount']));
				 		 addComm.setCMSN(moneyReplace(acts['Chargeback Amount']));
				 		 addComm.setSPIFF(moneyReplace(acts['SPIFF Amount']));
				 		 EntitySave(addComm);
				 		 
				 	}catch(Exception ex) {
			    				WriteOutput("<p>#ex.message#</p>"); 
							} 
				 	}
			 }
			 for(var acts in deactFile){
			 	if(acts['Agent ID']!='Agent ID'&&len(acts['Agent ID'])){
				 	try {
				 		var addComm = entityNew('comms');
				 		addComm.setTYPE("DEACT");
				 		addComm.setCUSTOMERNAME(acts['Customer Name']);
				 		 addComm.setDeviceID(acts['Device ID']);
				 		 addComm.setMOBILEID(changeMOBIL(acts['Original Mobile ID']));
				 		 //addComm.setDATE(changeUPGdate(acts['Begin Date']));
				 		  addComm.setLOCATION(storeName);
				 		 addComm.setmonthGroup(monthToCategorizeCommInto);
				 		 addComm.setSTARTDATE(changeNEWdate(acts[' Contract Begin Date']));
				 		  addComm.setENDDATE(changeNEWdate(acts['Deactivation Date']));
				 		 addComm.setRECEIVABLE(moneyReplace(acts['Purchased Receivable']));
				 		 addComm.setADC(moneyReplace(acts['Add Comm Amt']));
				 		 addComm.setCMSN(moneyReplace(acts['Commission Amount']));
				 		 addComm.setSPIFF(moneyReplace(acts['SPIFF Amount']));
				 		 EntitySave(addComm);
				 		
				 		 
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
		public any function checkNames(name1,name2){
			var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
			'o','p','q','r','s','t','u','v','w','x','y','z'];
			
			var characters1 = {};
			var characters2 = {};
			for(var a = 1;a<3;a++){
				
				var name = evaluate("name"&#a#);
				var characters = {};
				
				
				for(var characterInName = 1;characterInName<=len(name);characterInName++){
					var reading = Lcase(mid(name,characterInName,1));
					if(arrayContains(letters,reading)){
						if(!structKeyExists(characters,reading)){
							StructInsert(characters,reading,1);
						}
						else{
							structUpdate(characters,reading,int(characters[reading])+1);
						}
						
					}
						
				}
			evaluate("characters"&#a#&" = characters");
				
			}
			
			var totalCount = 0;
			var totalCount2 = 0;
			var inCommon = 0;
			for(letter in characters1){
				if(structKeyExists(characters2,letter)){
					if(characters2[letter]>characters1[letter]){
					inCommon = inCommon + characters1[letter];	
					}
					else{
						incommon = inCommon + characters2[letter];
					}
					
					
				}
				totalCount = totalCount+int(characters1[letter]);
			}
			for(letter in characters2){
				
				totalCount2 = totalCount2+int(characters2[letter]);
				
			}
			if(totalcount2<totalCount){
			return (inCommon/totalCount);}
			else{
			return (inCommon/totalCount2);}
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
		public any function findIfVZWandrq4Match(invoice){
			
			
				sale = scope.salesDatabase[invoice];
				var fin = trimDollarsAndNegatives(sale['Fin']);
				if(len(fin)>3){
				fin = (left(fin,len(fin)-3));
				fin = replace(fin,",","");
				}
				if(sale['VZWFin']!=fin||sale['Total Comm']!=sale['VZWComm']){
					
				}
				else{
					structInsert(scope.salesSettled,invoice,scope.salesDatabase[invoice]);
					structDelete(scope.salesDatabase,invoice);
				}
				
			
		}
		
		public any function trimDollarsAndNegatives(moneyString){
			var withoutDollar = right(moneyString,len(moneyString)-find("$",moneyString,1));
			if(right(withoutDollar,1)==')'){
			withoutDollar=(left(withoutDollar,len(withoutDollar)-1))*-1;
			}
			return withoutDollar;
		}
		
		remote any function fixTime(xx){
			var dateRQ = xx;
			var codeMonth = [["Jan",00],
					["Feb",01],
					["Mar",02],
					["Apr",03],
					["May",04],
					["Jun",05],
					["Jul",06],
					["Aug",07],
					["Sep",08],
					["Oct",09],
					["Nov",10],
					["Dec",11]];
			 
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