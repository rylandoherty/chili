<cfcomponent>
	<cfscript>
	
		public any function testGet(){
			spititout = EntityLoad( "sales" );
			writeDump(spititout);
		}
		
		public any function organizeSales(rq4Data,finData){
			 
    		 ORMReload();
    		//CHECKING FOR BLANK ROWS in SALES BY INVOICE SHEET
    		for(var sales in finData){
    			if(sales['Sold By']!='Sold By'&&len(sales['Sold By'])){
    			//writedump(sales['Invoice ##']);
    			try { 
    				
    				
    				
    				newSale = EntityNew('sales');
    				
				    newSale.setsalesid(sales['Invoice ##']);
				    newSale.setSTORE(0); 
				    newSale.setEMPLOYEE(sales['Sold By']); 
				    newSale.setCUSTOMER(sales['Customer']); 
				    	
				    newSale.setDATE(sales['Created On']); 
				    newSale.setCOST(sales['Cost']); 
				    newSale.setSALES(sales['Sales']); 
				    newSale.setPROFIT(sales['Gross Profit']); 
				    newSale.setFINANCED(sales['VZW DEVICE PAYMENT AMT.']); 
				    newSale.setCASH(sales['Cash']); 
				    
				   
				    newSale.setCOMMENTS(sales['Invoice Comments']); 
				    EntitySave(newSale); 
				    ormflush(); 
				} catch(Exception ex) { 
    				WriteOutput("<p>#ex.message#</p>"); 
					} 
    			
    			}
    			}
    			
    			
    			for(var sales in rq4Data){
    			if(sales['Sold As Used']!='Sold As Used'&&len(sales['Sold As Used'])){
    			//writedump(sales['Invoice ##']);
    			try { 
    				var allOfSales = EntityLoad( "sales" );
    				//writedump(allOfSales);
    			
    				var theInvoice = entityLoad( "sales", sales['Invoice ##'] , true );
    				writedump(theInvoice);
    				if(theInvoice.hasSaledetails()){
	    				
	    				 
	    				var soldItemArray = theInvoice.getSaledetails();
    				for(var itemSold in soldItemArray){
	    					if(itemSold.getTRACKINGNUMBER() == sales['Tracking ##']&&itemSold.getproductsku() == sales['Product SKU']&& itemSold.getinvoice() == sales['Invoice ##']){
	    						//writeoutput(25);
	    						}
	    				}
	    				
	    				
	    				for(var itemSold in soldItemArray){
	    					if(itemSold.getTRACKINGNUMBER() == sales['Tracking ##']&&itemSold.getproductsku() == sales['Product SKU']&& itemSold.getinvoice() == sales['Invoice ##']){
	    						//writeoutput(25);
	    						}
	    					//writeoutput(2);
	    					//writedump(itemSold);
	    					//writedump(itemSold.getTRACKINGNUMBER());
		    				if(itemSold.getTRACKINGNUMBER() != sales['Tracking ##']||itemSold.getproductsku() != sales['Product SKU']|| itemSold.getinvoice() != sales['Invoice ##']){
		    					//top
		    					//writeoutput(3);
		    					
			    				newItemSold = EntityNew('saledetails'); 
			    				//newItemSold.addSALESID(theInvoice);
							    newItemSold.setINVOICE(sales['Invoice ##']); 
							    newItemSold.setPRODUCTSKU(sales['Product SKU']);
							    newItemSold.setPRODUCTNAME(sales['Product Name']); 
							    newItemSold.setTRACKINGNUMBER(sales['Tracking ##']); 
							    newItemSold.setREFUND(sales['Refund']);
							    newItemSold.setQUANTITY(sales['Qty']); 
							    newItemSold.setTOTALCOST(sales['Total Cost']); 
							    newItemSold.setSOLDFOR(sales['Sold For']); 
							    newItemSold.setGROSSPROFIT(sales['Gross Profit']); 
							    newItemSold.setCATEGORY(sales['Category']); 
							    newItemSold.setUSED(sales['Sold As Used']); 
							    newItemSold.setCOMMENTS(sales['Invoice Comments']); 
							   
							    EntitySave(newItemSold); 
							     ormflush(); 
							    //bottom
							    
			    				theInvoice.addSaledetails(newItemSold);
			    				EntitySave(theInvoice);
						    	ormflush(); 
						    	writeoutput("solditemarray");
						    	writedump(solditemarray);
						    	break;
		    				}
		    				else{
		    					
					    	}
					    }
				    }
				    else{
				    	entityName = EntityNew('saledetails'); 
			    				//newItemSold.addSALESID(theInvoice);
							    
							    entityName.setINVOICE(sales['Invoice ##']); 
							    entityName.setPRODUCTSKU(sales['Product SKU']);
							    entityName.setPRODUCTNAME(sales['Product Name']); 
							    entityName.setTRACKINGNUMBER(sales['Tracking ##']); 
							    entityName.setREFUND(sales['Refund']);
							    entityName.setQUANTITY(sales['Qty']); 
							    entityName.setTOTALCOST(sales['Total Cost']); 
							    entityName.setSOLDFOR(sales['Sold For']); 
							    entityName.setGROSSPROFIT(sales['Gross Profit']); 
							    entityName.setCATEGORY(sales['Category']); 
							    entityName.setUSED(sales['Sold As Used']); 
							    entityName.setCOMMENTS(sales['Invoice Comments']);
							    //entityName.addSALES(sales['Invoice ##']);
							    EntitySave(entityName); 
							     ormflush(); 
							    
							    
			    				theInvoice.addsaledetails(entityName);
			    				EntitySave(theInvoice);
						    	ormflush(); 
						    	
				    }
				} catch(Exception ex) { 
    				WriteOutput("<p>#ex.message#</p>"); 
					} 
    			
    			}
    			
    			//writedump(finData['Created On']);
    			//writedump(Chr(10)&Chr(13));
    			//writedump(finData['Sold By Username']);
    			
    		} 
			spititout = EntityLoad( "sales" );
			writeDump(spititout);
		
		return "";
		}
		public any function makeInvoice(entityName, sales){
			//newItemSold.addSALESID(theInvoice);
								entityName.setINVOICE(sales['Invoice ##']); 
							    entityName.setPRODUCTSKU(sales['Product SKU']);
							    entityName.setPRODUCTNAME(sales['Product Name']); 
							    entityName.setTRACKINGNUMBER(sales['Tracking ##']); 
							    entityName.setREFUND(sales['Refund']);
							    entityName.setQUANTITY(sales['Qty']); 
							    entityName.setTOTALCOST(sales['Total Cost']); 
							    entityName.setSOLDFOR(sales['Sold For']); 
							    entityName.setGROSSPROFIT(sales['Gross Profit']); 
							    entityName.setCATEGORY(sales['Category']); 
							    entityName.setUSED(sales['Sold As Used']); 
							    entityName.setCOMMENTS(sales['Invoice Comments']); 
			return entityName;
			
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