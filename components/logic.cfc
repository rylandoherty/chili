<cfcomponent>
	<cfscript>
	
		public void function findingTargetColumns(data){
			var colList = {};
			
			for(var row in data){
				for(var col in row){
					if(ArrayContains(targetColumns,row[col])){
						structInsert(colList,row[col], col);
					}
				}
				if(structCount(colList)==arrayLen(targetColumns)){
					break;
				}
			}
		}
		public void function organizeComm(newData,upgData,insData,sales){
			
			
			var stupidArray = [newData,upgData];
			for(var things in stupidArray){
				
			
			for(var row in things){
				if(row['Original']=="Original"||len(row['Customer Name'])==0){
					continue;
				}
				var thisName = row['Customer Name'];
			
				var thatNumber = "";
				var thisNumber = replace(row['Original'],"-","","all");
				if(StructKeyExists(row,"MOBIL")){
					thatNumber = replace(row['MOBIL'],"-","","all");
				}
				else if(StructKeyExists(row,"Mobile ID")) {
					thatNumber = replace(row['Mobile ID'],"-","","all");
				}
				
				thatNumber = replace(thatNumber,"c","","all");
				thatNumber = replace(thatNumber," ","","all");
				
					var isit = false;
					for(var row2 in sales){
						
						
						
						if(StructKeyExists(sales[row2],"Phone Number")&&isArray(sales[row2]['Phone Number'])){
							
						if(Arraycontains(sales[row2]['Phone Number'], thisNumber)||Arraycontains(sales[row2]['Phone Number'], thatNumber)){
						
						if(checkDates(row['Date'],sales[row2]['Sold On'])){
							var fin = trimDollarsAndNegatives(row['Receivable']);
							var comm = 0;
							if(structkeyexists(row,"Cmsn 95%")){
								comm = trimDollarsAndNegatives(row['Cmsn 95%']);
								comm = comm+trimDollarsAndNegatives(row['ADC 95%']);
							}
							else if(structkeyexists(row,"Comn 95%")){
								comm = trimDollarsAndNegatives(row['Comn 95%']);
								comm = comm+trimDollarsAndNegatives(row['ADC 95%']);
							}
							
							scope.salesDatabase[row2]['VZWFin']= scope.salesDatabase[row2]['VZWFin']+ fin;
							scope.salesDatabase[row2]['VZWComm']= scope.salesDatabase[row2]['VZWComm']+ comm;
						
							isit = true;
							break;
						}
						
						
						
							}
					
					}
					}
					if(!isit){
						for(var row2 in sales){
						
						
						
						if(StructKeyExists(sales[row2],"Customer Name")){
								
							if(checkNames(sales[row2]['Customer Name'],thisName)>.8){
						
						//writeOutput(thisName&"   "&sales[row2]['Customer Name']);
						//writeOutput("<br/>");
						
						if(checkDates(row['Date'],sales[row2]['Sold On'])){
							addToSale(row2,row);
							findIfVZWandrq4Match(row2);
							isit = true;
							break;
						}
							}
						
						
							}
					
					}
					if(!isit){
						//writeOutput(thisName&"  ---------");
						//writeOutput("<br/>");
						isit=true;
						writeOutput("<br/>");
						writeDump(thisNumber);
						}
						
						
						
					}
					}
					//writeDump(scope.salesDatabase);
					writeoutput("ALL DONE");
		}
		//writeDump(scope.salesDatabase);
		}
		public void function addToSale(saleDBRow,vzwRow){
				var fin = trimDollarsAndNegatives(vzwRow['Receivable']);
				var comm = 0;
					if(structkeyexists(vzwRow,"Cmsn 95%")){
						comm = trimDollarsAndNegatives(vzwRow['Cmsn 95%']);
						comm = comm+trimDollarsAndNegatives(vzwRow['ADC 95%']);
					}
					else if(structkeyexists(vzwRow,"Comn 95%")){
						comm = trimDollarsAndNegatives(vzwRow['Comn 95%']);
						comm = comm+trimDollarsAndNegatives(vzwRow['ADC 95%']);
					}
					
					scope.salesDatabase[saleDBRow]['VZWFin']= scope.salesDatabase[saleDBRow]['VZWFin']+ fin;
					scope.salesDatabase[saleDBRow]['VZWComm']= scope.salesDatabase[saleDBRow]['VZWComm']+ comm;
		}
		
		public any function organizeSales(rq4Data,finData){
			 
    		 
    		//CHECKING FOR BLANK ROWS in SALES BY INVOICE SHEET
    		for(var sales in finData){
    			if(sales['Sold By']!='Sold By'&&len(sales['Sold By'])){
    			//writedump(sales['Invoice ##']);
    			try { 
    				newArtistObj = EntityNew('sales'); 
				    newArtistObj.setid(sales['Invoice ##']);
				    newArtistObj.setstore(sales['Invoiced By']); 
				    newArtistObj.setEMPLOYEE(sales['Sold By']); 
				    newArtistObj.setCUSTOMER(sales['Customer']); 
				    newArtistObj.setDATE(sales['Created On']); 
				    newArtistObj.setCOST(sales['Cost']); 
				    newArtistObj.setSALES(sales['Sales']); 
				    newArtistObj.setPROFIT(sales['Gross Profit']); 
				    newArtistObj.setFINANCED(sales['VZW Financed Amt']); 
				    newArtistObj.setCASH(sales['Cash']); 
				    
				   
				    newArtistObj.setCOMMENTS(sales['Invoice Comments']); 
				    EntitySave(newArtistObj); 
				    ormflush(); 
				} catch(Exception ex) { 
    				WriteOutput("<p>#ex.message#</p>"); 
					} 
    			
    			}
    			//writedump(sales);
    			//writedump(finData['Created On']);
    			//writedump(Chr(10)&Chr(13));
    			//writedump(finData['Sold By Username']);
    			
    		} 
			
			
			 
			
			/*scope.salesDatabase= {};	
			scope.salesSettled = {};
			scope.salesOver = {};			
			for(var row in rq4Data){
				//writeDump(row);
				if(row['Total Sales']=="Total Sales"||len(row['Sold By'])==0){
					continue;
				}
				var number = row['Tracking ##'];
				var invoice = row['Invoice ##'];
				var isRefund = row['Refund'];
				
					if(!structKeyExists(scope.salesDatabase,row['Invoice ##'])){
						var sl = {};
						
						if(len(number)==10){
							StructInsert(sl,"Phone Number",[number]);
						}
						StructInsert(sl,"Sold On", dateFormat(row['Sold On'], "m/d/yyyy") );
						StructInsert(sl,"Total Sales",0);
						StructInsert(sl,"Total Cost",0);
						StructInsert(sl,"Total Comm",0);
						if(isRefund == "Yes"){
						StructInsert(sl,"Sale Type","Return");	
						}
						else{
						StructInsert(sl,"Sale Type","Sale");	
						}
						
						
						StructInsert(sl,"Sold By",row['Sold By']);
						StructInsert(sl,"Customer Name",row['Customer']);
						StructInsert(sl,"VZWFin",0);
						StructInsert(sl,"VZWComm",0);
						StructInsert(scope.salesDatabase , invoice ,sl);
					}
					
				else{
					
					if(len(number)==10){
						//writeDump(scope.salesDatabase[invoice]);
						//StructAppend(scope.salesDatabase[row['Invoice##']]['Phone Number'],"5088738195");
						//writeDump(scope.salesDatabase);
						if(!StructKeyExists(scope.salesDatabase[invoice],'Phone Number')){
							StructInsert(sl,"Phone Number",[number]);
						}
						else if(StructKeyExists(scope.salesDatabase[invoice],'Phone Number')&&!arrayContains(scope.salesDatabase[invoice]['Phone Number'],number)){
							ArrayAppend(scope.salesDatabase[invoice]['Phone Number'],number);
							//writeDump(scope.salesDatabase[invoice]['Phone Number']);
							
							//if(scope.salesDatabase.row['Invoice##']['Phone Number']==number){
								
							}
						}
							
					}	
				}
					if(scope.salesDatabase[invoice]['Sale Type']=="Sale"){
						if(isRefund=="Yes"){
							scope.salesDatabase[invoice]['Sale Type']= "Exchange";
						}
					}
					if(scope.salesDatabase[invoice]['Sale Type']=="Return"){
						if(isRefund=="No"){
							scope.salesDatabase[invoice]['Sale Type']= "Exchange";
						}
					}
					addUpMoney(row,'Total Sales');
					addUpMoney(row,'Total Cost');
					
				
				var finAmount = 0;
				if(!StructKeyExists(scope.salesDatabase[invoice],"Fin")){
					for(var row in finData){
						if(row['Check']=="Check"||len(row['Sold By'])==0){
							continue;
						}
						if(invoice==row['Invoice ##']){
							StructInsert(scope.salesDatabase[invoice],"Fin",row['VZW Financed Amt']);
						}
				
					}
				}
			}
			writeDump(scope.salesDatabase);*/
			return "";
				
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
		
	</cfscript>
</cfcomponent>