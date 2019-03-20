<cfcomponent>
<cfscript>
			remote any function deleteEntry(type,fromdate,todate){
				//var gf = entityLoad("salescontainer", type, false);

				var gf = ormExecuteQuery( "FROM salescontainer as dc WHERE dc.type LIKE '"&type&"' and dc.fromdate LIKE '"&fromdate&"'"  );
				if(IsDefined("gf")){


				for( demtings in gf){
				entityDelete(demtings);
				}
					}
			}
			
			remote any function averageoveryearORhiredate(){
				
				
				}
			
			remote any function actualcontainermaker(date1,date2){
				//loadpdrs
				var skuGroup = EntityLoad('productgroup');
				var skuGroupItems = EntityLoad('productgroupitems');
				var formulalist = EntityLoad('formulalist');
				//wsPublish("uploads", "Load 1: Main Load");
				
				var byskuGroupItems = {};
				var byskuGroupItemsArray = {};
				for(each in skuGroupItems){
					//return each.getproductgroup().getproductgroupid();
					var productSKU = each.getproductSKU();
					if(!StructKeyExists(byskuGroupItemsArray,productSKU)){
					byskuGroupItemsArray[productSKU] = {};
					byskuGroupItemsArray[productSKU]['id'] = productSKU;
					byskuGroupItemsArray[productSKU]['group'] = [];
					}
					ArrayAppend( byskuGroupItemsArray[productSKU]['group'] , each.getproductgroup().getproductgroupid());
					
				}
				for(each in skuGroupItems){
					//return each.getproductgroup().getproductgroupid();
					var productSKU = each.getproductSKU();
					byskuGroupItems[productSKU] = {};
					byskuGroupItems[productSKU]['id'] = productSKU;
					byskuGroupItems[productSKU]['group'] = each.getproductgroup().getproductgroupid();
				}
				//wsPublish("uploads", "Load 2 Sku Stuff");
				var date1long = date1&'0000';
				var date2long = date2&'9999';
				var date1short = Left(date1,8);
				var date2short = Left(date2,8);
				//return skuGroupItems;
				
				//var bigbaby = entityLoad('productdetails');
				var dotarray = [];
				var container = {};
				container['locations'] = {};
				container['employees'] = {};
				container['district'] = {};
				
						container['district']['name'] = username;
						container['district']['cats'] = {};
						container['district']['forms'] = {};
						for(each in formulalist){
							container['district'].forms[each.getname()]={};
							container['district'].forms[each.getname()]['name'] = each.getname();
							container['district'].forms[each.getname()]['value'] = 0;
						}
						for(each in skuGroup){
							container['district'].cats[each.getproductgroupid()]={};
							container['district'].cats[each.getproductgroupid()]['name'] = each.getproductgroupid();
							container['district'].cats[each.getproductgroupid()]['QTY'] = 0;
							container['district'].cats[each.getproductgroupid()]['GP'] = 0;
						}
							container['district'].cats['GrossProfit']={};
							container['district'].cats['GrossProfit']['name'] ='GrossProfit';
							container['district'].cats['GrossProfit']['QTY'] = 0;
							container['district'].cats['GrossProfit']['GP'] = 0;
							
							container['district'].cats['Invoices']={};
							container['district'].cats['Invoices']['name'] ='Invoices';
							container['district'].cats['Invoices']['QTY'] = 0;
							container['district'].cats['Invoices']['GP'] = 0;
							
							container['district'].cats['Eroes']={};
							container['district'].cats['Eroes']['name'] ='Eroes';
							container['district'].cats['Eroes']['QTY'] = 0;
							container['district'].cats['Eroes']['GP'] = 0;
							
							container['district'].cats['Phobio']={};
							container['district'].cats['Phobio']['name'] ='Phobio';
							container['district'].cats['Phobio']['QTY'] = 0;
							container['district'].cats['Phobio']['GP'] = 0;
							
							container['district'].cats['Hours']={};
							container['district'].cats['Hours']['name'] ='Hours';
							container['district'].cats['Hours']['QTY'] = 0;
							container['district'].cats['Hours']['GP'] = 0;
				//wsPublish("uploads", date2short);
				
				var dateForPtarGrab = date1short-1;
				
				var salesGrab = ORMExecuteQuery("FROM productdetails WHERE date<="&date2long&" and date>"&date1long);
				
				var ptarGrab = ORMExecuteQuery("FROM ptar WHERE DATE<="&date2short&" and DATE>"&dateForPtarGrab&" and TYPE like 'Sale'");
				
				var hours = ORMExecuteQuery("FROM clockinclockout WHERE date<="&date2short&" and date>"&date1short);
				
				var eroes = ORMExecuteQuery("FROM eroeslogin WHERE date<="&date2short&" and date>="&date1short);
				
				var phobio = ormExecuteQuery( "FROM phobio where created >=  "&date1short&" and created <= "&date2short);
				
				
				//wsPublish("uploads", "Load 4 After Grab");
				var uniqueInvoices = {};
				
				
				
				for(sales in salesGrab){
					if(sales.getstorename()=='Sanat Warehouse' || sales.getusername() == 'Tempered Glass Warranty'){
						
					}
					else{
					
						var username = sales.getusername();
						var storename = sales.getstorename();
						var sku = sales.getPRODUCTSKU();
						var category = sales.getCATEGORY();
						var invoicenumber = sales.getinvoicenumber();
						
						if(!StructKeyExists (container.employees, username)){
							container.employees[username] = {};
							container.employees[username]['name'] = username;
							container.employees[username]['cats'] = {};
							container.employees[username]['forms'] = {};
							for(each in formulalist){
								container.employees[username].forms[each.getname()]={};
								container.employees[username].forms[each.getname()]['name'] = each.getname();
								container.employees[username].forms[each.getname()]['value'] = 0;
							}
							for(each in skuGroup){
								container.employees[username].cats[each.getproductgroupid()]={};
								container.employees[username].cats[each.getproductgroupid()]['name'] = each.getproductgroupid();
								container.employees[username].cats[each.getproductgroupid()]['QTY'] = 0;
								container.employees[username].cats[each.getproductgroupid()]['GP'] = 0;
							}
							container.employees[username].cats['GrossProfit']={};
							container.employees[username].cats['GrossProfit']['name'] ='GrossProfit';
								container.employees[username].cats['GrossProfit']['QTY'] = 0;
								container.employees[username].cats['GrossProfit']['GP'] = 0;
								
								container.employees[username].cats['Invoices']={};
							container.employees[username].cats['Invoices']['name'] ='Invoices';
								container.employees[username].cats['Invoices']['QTY'] = 0;
								container.employees[username].cats['Invoices']['GP'] = 0;
								
								container.employees[username].cats['Eroes']={};
							container.employees[username].cats['Eroes']['name'] ='Eroes';
								container.employees[username].cats['Eroes']['QTY'] = 0;
								container.employees[username].cats['Eroes']['GP'] = 0;
								
								container.employees[username].cats['Phobio']={};
							container.employees[username].cats['Phobio']['name'] ='Phobio';
								container.employees[username].cats['Phobio']['QTY'] = 0;
								container.employees[username].cats['Phobio']['GP'] = 0;
								
								container.employees[username].cats['Hours']={};
							container.employees[username].cats['Hours']['name'] ='Hours';
								container.employees[username].cats['Hours']['QTY'] = 0;
								container.employees[username].cats['Hours']['GP'] = 0;
							
						}
						if(!StructKeyExists (container.locations, storename)){
							container.locations[storename] = {};
							container.locations[storename]['name'] = storename;
							container.locations[storename]['cats'] = {};
							container.locations[storename]['forms'] = {};
							container.locations[storename]['employees'] = {};
							for(each in formulalist){
								container.locations[storename].forms[each.getname()]={};
								container.locations[storename].forms[each.getname()]['name'] = each.getname();
								container.locations[storename].forms[each.getname()]['value'] = 0;
							}
							for(each in skuGroup){
								container.locations[storename].cats[each.getproductgroupid()]={};
								container.locations[storename].cats[each.getproductgroupid()]['name'] = each.getproductgroupid();
								container.locations[storename].cats[each.getproductgroupid()]['QTY'] = 0;
								container.locations[storename].cats[each.getproductgroupid()]['GP'] = 0;
							}
								container.locations[storename].cats['GrossProfit']={};
								container.locations[storename].cats['GrossProfit']['name'] ='GrossProfit';
								container.locations[storename].cats['GrossProfit']['QTY'] = 0;
								container.locations[storename].cats['GrossProfit']['GP'] = 0;
								
								container.locations[storename].cats['Invoices']={};
								container.locations[storename].cats['Invoices']['name'] ='Invoices';
								container.locations[storename].cats['Invoices']['QTY'] = 0;
								container.locations[storename].cats['Invoices']['GP'] = 0;
								
								container.locations[storename].cats['Eroes']={};
								container.locations[storename].cats['Eroes']['name'] ='Eroes';
								container.locations[storename].cats['Eroes']['QTY'] = 0;
								container.locations[storename].cats['Eroes']['GP'] = 0;
								
								container.locations[storename].cats['Phobio']={};
								container.locations[storename].cats['Phobio']['name'] ='Phobio';
								container.locations[storename].cats['Phobio']['QTY'] = 0;
								container.locations[storename].cats['Phobio']['GP'] = 0;
								
								container.locations[storename].cats['Hours']={};
								container.locations[storename].cats['Hours']['name'] ='Hours';
								container.locations[storename].cats['Hours']['QTY'] = 0;
								container.locations[storename].cats['Hours']['GP'] = 0;
							
						}
					
						if(!StructKeyExists (container.locations[storename].employees, username)){
							
						container.locations[storename].employees[username] = {};
							container.locations[storename].employees[username]['name'] = username;
							container.locations[storename].employees[username]['cats'] = {};
							container.locations[storename].employees[username]['forms'] = {};
							
							for(each in formulalist){
								container.locations[storename].employees[username].forms[each.getname()]={};
								container.locations[storename].employees[username].forms[each.getname()]['name'] = each.getname();
								container.locations[storename].employees[username].forms[each.getname()]['value'] = 0;
							}
							
							for(each in skuGroup){
								container.locations[storename].employees[username].cats[each.getproductgroupid()]={};
								container.locations[storename].employees[username].cats[each.getproductgroupid()]['name'] = each.getproductgroupid();
								container.locations[storename].employees[username].cats[each.getproductgroupid()]['QTY'] = 0;
								container.locations[storename].employees[username].cats[each.getproductgroupid()]['GP'] = 0;
							}
								container.locations[storename].employees[username].cats['GrossProfit']={};
								container.locations[storename].employees[username].cats['GrossProfit']['name'] ='GrossProfit';
								container.locations[storename].employees[username].cats['GrossProfit']['QTY'] = 0;
								container.locations[storename].employees[username].cats['GrossProfit']['GP'] = 0;
								
								container.locations[storename].employees[username].cats['Invoices']={};
								container.locations[storename].employees[username].cats['Invoices']['name'] ='Invoices';
								container.locations[storename].employees[username].cats['Invoices']['QTY'] = 0;
								container.locations[storename].employees[username].cats['Invoices']['GP'] = 0;
								
								container.locations[storename].employees[username].cats['Eroes']={};
								container.locations[storename].employees[username].cats['Eroes']['name'] ='Eroes';
								container.locations[storename].employees[username].cats['Eroes']['QTY'] = 0;
								container.locations[storename].employees[username].cats['Eroes']['GP'] = 0;
								
								container.locations[storename].employees[username].cats['Phobio']={};
								container.locations[storename].employees[username].cats['Phobio']['name'] ='Phobio';
								container.locations[storename].employees[username].cats['Phobio']['QTY'] = 0;
								container.locations[storename].employees[username].cats['Phobio']['GP'] = 0;
								
								container.locations[storename].employees[username].cats['Hours']={};
								container.locations[storename].employees[username].cats['Hours']['name'] ='Hours';
								container.locations[storename].employees[username].cats['Hours']['QTY'] = 0;
								container.locations[storename].employees[username].cats['Hours']['GP'] = 0;
							
						}
					
						if(StructKeyExists (byskuGroupItems, sku)){
							
							for(these in byskuGroupItemsArray[sku].group){
								var thisskugroup = these;
							container.employees[username].cats[thisskugroup].QTY = container.employees[username].cats[thisskugroup].QTY + sales.getQUANTITY();
							container.employees[username].cats[thisskugroup].GP = container.employees[username].cats[thisskugroup].GP + sales.getGROSSPROFIT();
							container.locations[storename].cats[thisskugroup].QTY = container.locations[storename].cats[thisskugroup].QTY + sales.getQUANTITY();
							container.locations[storename].cats[thisskugroup].GP = container.locations[storename].cats[thisskugroup].GP + sales.getGROSSPROFIT();
							
							container.locations[storename].employees[username].cats[thisskugroup].QTY = container.locations[storename].employees[username].cats[thisskugroup].QTY + sales.getQUANTITY();
							container.locations[storename].employees[username].cats[thisskugroup].GP = container.locations[storename].employees[username].cats[thisskugroup].GP + sales.getGROSSPROFIT();
							container['district'].cats[thisskugroup].QTY = container['district'].cats[thisskugroup].QTY + sales.getQUANTITY();
							container['district'].cats[thisskugroup].GP = container['district'].cats[thisskugroup].GP + sales.getGROSSPROFIT();
						
							}
						}
					
					
					for(each in skuGroupItems){
						if(FindNoCase(each.getproductSKU(),category)){
							for(these in  byskuGroupItemsArray[each.getproductSKU()].group){
							var thisskugroup = these;
							
							container.employees[username].cats[thisskugroup].QTY = container.employees[username].cats[thisskugroup].QTY + sales.getQUANTITY();
					container.employees[username].cats[thisskugroup].GP = container.employees[username].cats[thisskugroup].GP + sales.getGROSSPROFIT();
					container.locations[storename].cats[thisskugroup].QTY = container.locations[storename].cats[thisskugroup].QTY + sales.getQUANTITY();
					container.locations[storename].cats[thisskugroup].GP = container.locations[storename].cats[thisskugroup].GP + sales.getGROSSPROFIT();
					
					container.locations[storename].employees[username].cats[thisskugroup].QTY = container.locations[storename].employees[username].cats[thisskugroup].QTY + sales.getQUANTITY();
					container.locations[storename].employees[username].cats[thisskugroup].GP = container.locations[storename].employees[username].cats[thisskugroup].GP + sales.getGROSSPROFIT();
					container['district'].cats[thisskugroup].QTY = container['district'].cats[thisskugroup].QTY + sales.getQUANTITY();
					container['district'].cats[thisskugroup].GP = container['district'].cats[thisskugroup].GP + sales.getGROSSPROFIT();
					}
						}
					}
					
					/*if(!StructKeyExists (uniqueInvoices, invoicenumber))
					{
					//container.employees[username].cats['Invoices'].QTY = container.employees[username].cats['Invoices'].QTY + 1;
					//container.locations[storename].cats['Invoices'].QTY = container.locations[storename].cats['Invoices'].QTY + 1;
					//container.locations[storename].employees[username].cats['Invoices'].QTY = container.locations[storename].employees[username].cats['Invoices'].QTY + 1;
					
					//uniqueInvoices[invoicenumber] = {};
					
					}*/
					container.employees[username].cats['GrossProfit'].QTY = container.employees[username].cats['GrossProfit'].QTY + sales.getQUANTITY();
					container.employees[username].cats['GrossProfit'].GP = container.employees[username].cats['GrossProfit'].GP + sales.getGROSSPROFIT();
					container.locations[storename].cats['GrossProfit'].QTY = container.locations[storename].cats['GrossProfit'].QTY + sales.getQUANTITY();
					container.locations[storename].cats['GrossProfit'].GP = container.locations[storename].cats['GrossProfit'].GP + sales.getGROSSPROFIT();
					
					container.locations[storename].employees[username].cats['GrossProfit'].QTY = container.locations[storename].employees[username].cats['GrossProfit'].QTY + sales.getQUANTITY();
					container.locations[storename].employees[username].cats['GrossProfit'].GP = container.locations[storename].employees[username].cats['GrossProfit'].GP + sales.getGROSSPROFIT();
					container['district'].cats['GrossProfit'].QTY = container['district'].cats['GrossProfit'].QTY + sales.getQUANTITY();
					container['district'].cats['GrossProfit'].GP = container['district'].cats['GrossProfit'].GP + sales.getGROSSPROFIT();
					
					
				}
				
				
				
				
				
				
			}
			
			for (ptar in ptarGrab){
				
				var username = ptar.getUSER();
				var storename = ptar.getSTORE();
				if(storename=='Sanat Warehouse' || username == 'Tempered Glass Warranty'){
					}
					else{
				var invoicenumber = ptar.getINVOICE();
				//wsPublish("uploads", invoicenumber);
				if(!StructKeyExists (uniqueInvoices, invoicenumber))
					{
						if(StructKeyExists (container.locations[storename].employees, username)){
							container.locations[storename].employees[username].cats['Invoices'].QTY = container.locations[storename].employees[username].cats['Invoices'].QTY + 1;
							}
						if(StructKeyExists (container.employees, username)){
							container.employees[username].cats['Invoices'].QTY = container.employees[username].cats['Invoices'].QTY + 1;
							}
						if(StructKeyExists (container.locations, storename)){
							container.locations[storename].cats['Invoices'].QTY = container.locations[storename].cats['Invoices'].QTY + 1;
							}
					
					
					
					container['district'].cats['Invoices'].QTY = container['district'].cats['Invoices'].QTY + 1;
					uniqueInvoices[invoicenumber] = {};
					
					}
					}
			}
			
			//return dotarray;
			for (counts in eroes){
					if(counts.getstorename()=='Sanat Warehouse'){
						
					}
					else{
					
					var username = counts.getemployeename();
					var storename = counts.getstorename();
					
					if(StructKeyExists (container.locations, storename)){
					if(StructKeyExists (container.employees, username)){
					container.locations[storename].cats['Eroes'].QTY = container.locations[storename].cats['Eroes'].QTY + 1;  
					container.employees[username].cats['Eroes'].QTY = container.employees[username].cats['Eroes'].QTY + 1;
					container['district'].cats['Eroes'].QTY = container['district'].cats['Eroes'].QTY + 1;
					
					
					}
					
					if(StructKeyExists (container.locations[storename].employees, username)){
						container.locations[storename].employees[username].cats['Eroes'].QTY = container.locations[storename].employees[username].cats['Eroes'].QTY + 1;
					}
					} 
					}
				}
			
				for (clocks in hours){
					if(clocks.getstorename()=='Sanat Warehouse'){
						
					}
					else{
					
					var username = clocks.getusername();
					var storename = clocks.getstorename();
					var hours = clocks.gethours();
					
					if(StructKeyExists (container.employees, username)){
					container.locations[storename].cats['Hours'].QTY = container.locations[storename].cats['Hours'].QTY + hours;  
					container.employees[username].cats['Hours'].QTY = container.employees[username].cats['Hours'].QTY + hours;
					container['district'].cats['Hours'].QTY = container['district'].cats['Hours'].QTY + hours;
					
					
					} 
					if(StructKeyExists (container.locations[storename].employees, username)){
						container.locations[storename].employees[username].cats['Hours'].QTY = container.locations[storename].employees[username].cats['Hours'].QTY + hours;
					} 
					}
				}
				
				for(trade in phobio){
					
					var storename = trade.getcompanylocation() & " MA";
					var username = trade.getfirstname()&" "&trade.getlastname();
					 
					var dollars = trade.getquotedcustomeramountcents();
					if(username == "Harneet Kaur"){
						username = "Harneet Awtani";
					}
					if(StructKeyExists (container.employees, username)){
					container.locations[storename].cats['Phobio'].QTY = container.locations[storename].cats['Phobio'].QTY + 1;  
					container.employees[username].cats['Phobio'].QTY = container.employees[username].cats['Phobio'].QTY + 1;
					container['district'].cats['Phobio'].QTY = container['district'].cats['Phobio'].QTY + 1;
					container.locations[storename].cats['Phobio'].GP = container.locations[storename].cats['Phobio'].GP + dollars;  
					container.employees[username].cats['Phobio'].GP = container.employees[username].cats['Phobio'].GP + dollars;
					container['district'].cats['Phobio'].GP = container['district'].cats['Phobio'].GP + dollars;
						
					}
					if(StructKeyExists (container.locations[storename].employees, username)){
						container.locations[storename].employees[username].cats['Phobio'].QTY = container.locations[storename].employees[username].cats['Phobio'].QTY + 1;
						container.locations[storename].employees[username].cats['Phobio'].GP = container.locations[storename].employees[username].cats['Phobio'].GP + dollars;
					} 
					
				}
				
				for (each in container.locations){
					var locatin = container.locations[each];
					for (forms in formulalist){
						try{
						var evalString = convertCSVintoString('locatin.cats', forms.getformula() ) ;
						
						 
						locatin.forms[forms.getname()].value = Evaluate(evalString);
						}
						catch(any exception){
							
						}
					}
					for (each2 in container.locations[each].employees){
					var locatin2 = container.locations[each].employees[each2];
					for (forms in formulalist){
						try{
						var evalString = convertCSVintoString('locatin2.cats', forms.getformula() ) ;
						
						 
						locatin2.forms[forms.getname()].value = Evaluate(evalString);
						}
						catch(any exception){
							
						}
					}
				}
				}
				for (each in container.employees){
					var locatin = container.employees[each];
					for (forms in formulalist){
						try{
						var evalString = convertCSVintoString('locatin.cats', forms.getformula() ) ;
						
						 
						locatin.forms[forms.getname()].value = Evaluate(evalString);
						}
						catch(any exception){
							
						}
					}
				}
				
					var locatin = container.district;
					for (forms in formulalist){
						try{
						var evalString = convertCSVintoString('locatin.cats', forms.getformula() ) ;
						
						 
						locatin.forms[forms.getname()].value = Evaluate(evalString);
						}
						catch(any exception){
							
						}
					}
				
				var arraycontainer = {};
				container['employeesbyname'] = container.employees;
				arraycontainer['employees'] = [];
				for(each in container.employees){
					ArrayAppend(arraycontainer['employees'],container.employees[each]);
					for(them in container.employees[each].forms){
						container.employees[each][container.employees[each].forms[them].name] = container.employees[each].forms[them].value;
					}
				}
				
				arraycontainer['locationsort'] = [];
				for(each in container.locations){
					ArrayAppend(arraycontainer['locationsort'],container.locations[each]);
					for(them in container.locations[each].forms){
						container.locations[each][container.locations[each].forms[them].name] = container.locations[each].forms[them].value;
					}
				}
				container['locationsort'] = arraycontainer.locationsort;
				container.employees = arraycontainer['employees'];
				return container;
				
}
remote any function convertCSVintoString(target, group){
 		
	//var groups = groupProxy.loadFormula();
 		//console.log(group);
 		//console.log(groups[group]);
 			var incomingstring = group;
 			var stringFormula = "";
			
				
				var openclosecount = 0;
				for(var a=1;a<Len(incomingstring);a++){
					
					if( Mid(incomingstring , a,1) == ','){
						var thisWord = Mid(incomingstring,1,a-1);
						
						incomingstring = Mid(incomingstring,a+1,Len(incomingstring));
						a=1;
						var nextWord = "";
						for(var b = 1; b<Len(incomingstring);b++){
							if(Mid(incomingstring , b,1) == ','){
								nextWord = Mid(incomingstring,1,b-1);
								break;
							}
						}
						
						if(thisWord == '('){
							openclosecount=openclosecount +  1;
							stringFormula = stringFormula & " "&thisWord&" ";
						}
						else if(thisWord == ')'){
							if(openclosecount>0){
							openclosecount =openclosecount- 1;
							stringFormula = stringFormula & " "&thisWord&" ";
							}
						}
						
						
						else if(thisWord == 'QTY'|| thisWord == 'GP'){
							
							
							//	console.log(date);
							stringFormula = stringFormula& target &"['"&nextWord&"']."&thisWord&" ";
							
							//console.log("making it for month");
							
							
						}
						else if(thisWord == "+"|| thisWord == '-'||thisWord == '*'||thisWord == '/'){
							
							stringFormula = stringFormula& " " & ToString(thisWord) & " ";
							
						}
						
						else {
							//categories
						}
						
						
						
						
					
					
					
			
		}
		
	}
	stringFormula = stringFormula & ')';
	return stringFormula;
 	}

			
			remote any function fcontainer(type, district, storename, username,productgroup, qty, gp,fromdate,todate ){
							var saletoadd = entityNew("salescontainer");

							saletoadd.setusername(username);

							saletoadd.setstorename(storename);

							saletoadd.setdistrict(district);
							saletoadd.settype(type);

							saletoadd.setproductgroup(productgroup);
							saletoadd.setfromdate(fromdate);
							saletoadd.settodate(todate);
							saletoadd.setqty(qty);
							saletoadd.setgp(gp);
							entitySave(saletoadd);


			}
			remote any function loadcontainer(type,fromdate){
			var gf = ormExecuteQuery( "FROM salescontainer as dc WHERE dc.type LIKE '"&type&"' and dc.fromdate LIKE '"&fromdate&"'"  );
			return gf;
			}


</cfscript>
</cfcomponent>