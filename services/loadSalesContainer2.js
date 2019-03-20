var convertCSVintoString2 = function(group, target){
 		
	//var groups = groupProxy.loadFormula();
 		//console.log(group);
 		//console.log(groups[group]);
 			var incomingstring = groups[group].formula;
 			var stringFormula = "";
			if(typeof incomingstring !== 'undefined' ){
				
				var openclosecount = 0;
				for(var a=0;a<incomingstring.length;a++){
					
					if(incomingstring.charAt(a) == ','){
						var thisWord = incomingstring.substring(0,a);
						incomingstring = incomingstring.substring(a+1,incomingstring.length);
						a=0;
						var nextWord = "";
						for(var b = 0; b<incomingstring.length;b++){
							if(incomingstring.charAt(b) == ','){
								nextWord = incomingstring.substring(0,b);
								break;
							}
						}
						//console.log(thisWord);
						
						if(thisWord == '('){
							openclosecount += 1;
							stringFormula = stringFormula + " "+thisWord+" ";
						}
						else if(thisWord == ')'){
							if(openclosecount>0){
							openclosecount -= 1;
							stringFormula = stringFormula + " "+thisWord+" ";
							}
						}
						else if(thisWord == 'QTY'|| thisWord == 'GP'){
							
							if( 'undefined' == typeof date){
							//	console.log(date);
							stringFormula = stringFormula+ target +"['sales']['"+nextWord+"']."+thisWord+" ";
							//console.log("making it for month");
							}
							
						}
						else if(thisWord == "+"|| thisWord == '-'||thisWord == '*'||thisWord == '/'){
							
							stringFormula = stringFormula+ " " + thisWord.toString() + " ";
							
						}
						
						else {
							//categories
						}
						
						
						
						
					}
					
					
			
		}
		
	}
	//console.log(stringFormula);
	return stringFormula;
 	}


var finalizecontainer = function(thing){
	groups = groupProxy.loadFormula();
	var categories = groupProxy.getGroups();
	var container = {};	
    container['userstore']={};
    var sales = thing;
    var district = ['District Sanat'];
	var stores = loadProxy.loadDistrict(district);
	
	
	container[district]= {};
	container[district].name= district ;
	container[district].sales = {};
	container[district]['stores'] = {};
	container[district].sales['formulagroup'] = {};
	container[district].sales['Invoices'] = {};
	container[district].sales['Invoices']['QTY'] = 0;
	container[district].sales['GrossProfit']={};
	container[district].sales['GrossProfit']['GP'] = 0;
	container[district].sales['Hours']={};
	container[district].sales['Hours']['QTY'] = 0;
	//console.log(stores);
		for(var cats in categories){
				 	 container[district].sales[categories[cats].productgroupid] = {};
				 	container[district].sales[categories[cats].productgroupid].name = categories[cats].productgroupid;
				 	 container[district].sales[categories[cats].productgroupid]['GP']= 0;
				 	 container[district].sales[categories[cats].productgroupid]['QTY']= 0;
				 	 
				}
	for(var store in stores){
		
		container[district]['stores'][stores[store].storeid] = {};
		container[district]['stores'][stores[store].storeid].name = stores[store].storeid;
		container[district]['stores'][stores[store].storeid].sales = {};
		container[district]['stores'][stores[store].storeid].sales['formulagroup']  = {};
		container[district]['stores'][stores[store].storeid]['employees'] = {};
		container[district]['stores'][stores[store].storeid].sales['Invoices']={};
		container[district]['stores'][stores[store].storeid].sales['Invoices']['QTY'] = 0;
		container[district]['stores'][stores[store].storeid].sales['GrossProfit']={};
		container[district]['stores'][stores[store].storeid].sales['GrossProfit']['GP'] = 0;
		container[district]['stores'][stores[store].storeid].sales['Hours'] = {};
		container[district]['stores'][stores[store].storeid].sales['Hours']['QTY'] = 0;  
		for(var cats in categories){
				 	 container[district]['stores'][stores[store].storeid].sales[categories[cats].productgroupid] = {};
				 	container[district]['stores'][stores[store].storeid].sales[categories[cats].productgroupid].name =
				 		categories[cats].productgroupid;
				 	 container[district]['stores'][stores[store].storeid].sales[categories[cats].productgroupid]['GP']= 0;
				 	 container[district]['stores'][stores[store].storeid].sales[categories[cats].productgroupid]['QTY']= 0;
				 	 
				}
		
	}
	var thisThing = "";
	var thisStore = "";
	var thisEmployee = "";
	
	var thisCat = "";
	var thisGP = "";
	var thisQTY = "";
	
	for(var things in thing){
		thisThing= thing[things];
		thisStore = thisThing.storename;
		thisEmployee = thisThing.username;
		
		thisCat = thisThing.productgroup;
		
		thisGP = thisThing.gp;
		thisQTY = thisThing.qty;
		
		
		if(typeof container[district]['stores'][thisStore]['employees'][thisEmployee] == 'undefined'){
			if(typeof container['userstore'][thisEmployee]=='undefined'){
			container['userstore'][thisEmployee]={};
			container['userstore'][thisEmployee]['name']=thisEmployee;
			container['userstore'][thisEmployee]['sales'] = {};
			container['userstore'][thisEmployee]['sales']['formulagroup'] = {};
			container['userstore'][thisEmployee]['sales']['Invoices'] ={};
			container['userstore'][thisEmployee]['sales']['GrossProfit']={};
			container['userstore'][thisEmployee]['sales']['Hours']={};
			container['userstore'][thisEmployee]['sales']['Invoices']['QTY'] = 0;
			container['userstore'][thisEmployee]['sales']['GrossProfit']['GP'] = 0;
			container['userstore'][thisEmployee]['sales']['Hours']['QTY'] = 0;
			for(var cats in categories){
							if(typeof container['userstore'][thisEmployee]['sales'][categories[cats].productgroupid] == 'undefined'){
								
							container['userstore'][thisEmployee]['sales'][categories[cats].productgroupid] = {};
							container['userstore'][thisEmployee]['sales'][categories[cats].productgroupid]['GP']= 0;
							container['userstore'][thisEmployee]['sales'][categories[cats].productgroupid]['QTY']= 0;
							}
					}
			container['userstore'][thisEmployee]['stores']={};
			
			}
			container['userstore'][thisEmployee]['stores'][thisStore] = thisStore;
			container[district]['stores'][thisStore]['employees'][thisEmployee] ={};
			container[district]['stores'][thisStore]['employees'][thisEmployee].name =thisEmployee;
			container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'] = {};
			container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']['formulagroup'] = {};
			container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']['Invoices'] ={};
			container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']['GrossProfit']={};
			container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']['Hours']={};
			container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']['Invoices']['QTY'] = 0;
			container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']['GrossProfit']['GP'] = 0;
			container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']['Hours']['QTY'] = 0;
			
		var date;
		for(var cats in categories){
							
					 		container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'][categories[cats].productgroupid] = {};
					 	 	container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'][categories[cats].productgroupid]['GP']= 0;
					 	 	container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'][categories[cats].productgroupid]['QTY']= 0;
				 	 
				 	}
		}
		
		container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'][thisCat]['QTY'] = thisQTY;
		container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'][thisCat]['GP'] = thisGP;	 
		
		container[district]['stores'][thisStore]['sales'][thisCat]['QTY'] = container[district]['stores'][thisStore]['sales'][thisCat]['QTY'] + thisQTY;
		container[district]['stores'][thisStore]['sales'][thisCat]['GP'] = container[district]['stores'][thisStore]['sales'][thisCat]['GP'] + thisGP;
		
		container[district]['sales'][thisCat]['QTY'] = container[district]['sales'][thisCat]['QTY'] + thisQTY ;
		container[district]['sales'][thisCat]['GP'] = container[district]['sales'][thisCat]['GP'] + thisGP ;
		
		
		container['userstore'][thisEmployee]['sales'][thisCat]['QTY'] = container['userstore'][thisEmployee]['sales'][thisCat]['QTY'] + thisQTY ;
		container['userstore'][thisEmployee]['sales'][thisCat]['GP'] = container['userstore'][thisEmployee]['sales'][thisCat]['GP'] + thisGP ;
		
		
		
		
		
	}
	
	
	for(var formula in groups){
		//console.log(groups[formula]);
		container[district]['sales']['formulagroup'][groups[formula].name] = eval(convertCSVintoString2(formula,"container[district]" ))  ;
				for(stores in container[district]['stores'] ){
					container[district]['stores'][stores]['sales']['formulagroup'][groups[formula].name] = 					eval(convertCSVintoString2(formula,"container[district]['stores'][stores]" ))  ;
					for(emp in container[district]['stores'][stores]['employees']){
						container[district]['stores'][stores]['employees'][emp]['sales']['formulagroup'][groups[formula].name] = 						eval(convertCSVintoString2(formula,"container[district]['stores'][stores]['employees'][emp]" ))  ;
					
					}
					for(emps in container['userstore']){
						//console.log(emps);
						container['userstore'][emps]['sales']['formulagroup'][groups[formula].name] = 						eval(convertCSVintoString2(formula,"container['userstore'][emps]" ))  ;	
					}
				}
				
			}
	return container;
	
	
}


var getSalesContainer2 = function(datetype ,dateone ,datetwo){
	
	//getsaleinvoices
	//Load stuff settings;
	//Load real Stuff;
	//dateone in yyyymmdd
	if(datetype=="Calendar"){
	var calendar = dateone+"0000";
	
	var calendar2 = datetwo+"9999";
	//console.log(calendar);
	//console.log(calendar2);
	var calendarDate=new Date(dateone.substring(0,4),dateone.substring(4,6)-1,dateone.substring(6,8));
	var calendarDate2=new Date(datetwo.substring(0,4),datetwo.substring(4,6),-1);
	//console.log(calendarDate);
	}
	
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth()+1;
	var yesterday = new Date(today.getFullYear(),today.getMonth(), today.getDate()-1,0,0,1);
	var lastweek = new Date(today.getFullYear(),today.getMonth(), today.getDate()-7,0,0,1);
	var lastweekform = lastweek.getFullYear()+""+("0"+(lastweek.getMonth()+1)).slice(-2)+("0"+lastweek.getDate()).slice(-2)+"0001";
	var todayform = today.getFullYear()+""+("0"+(today.getMonth()+1)).slice(-2)+("0"+today.getDate()).slice(-2)+"0001";
	var yesterdayform = yesterday.getFullYear()+""+("0"+(yesterday.getMonth()+1)).slice(-2)+("0"+yesterday.getDate()).slice(-2)+"0001";
	var targetDate = new Date(year,(month-1));
    	var startoffirstweek = new Date(year,(month-1));
    	var endofmonth = new Date(year,(month),0);
    	startoffirstweek.setDate(-1*(targetDate.getDay()-1)); 
    	startoffirstweek = new Date(year,month-1,1);
    	var start = startoffirstweek.getFullYear()+""+("0"+(startoffirstweek.getMonth()+1)).slice(-2)+("0"+startoffirstweek.getDate()).slice(-2)+"0000";
    	var endoflastmonth = new Date(year,(month-1),0);
    	var end = endofmonth.getFullYear()+("0"+(endofmonth.getMonth()+1)).slice(-2)+("0"+endofmonth.getDate()).slice(-2)+"9999";
    	
    	var lastmonthfirstday = new Date(today.getFullYear(), today.getMonth()-2) 
    	 var startlastmonth = lastmonthfirstday.getFullYear()+""+("0"+(lastmonthfirstday.getMonth()+2)).slice(-2)+("0"+lastmonthfirstday.getDate()).slice(-2)+"0000";
    	
    	var endlastmonth = endoflastmonth.getFullYear()+("0"+(endoflastmonth.getMonth()+1)).slice(-2)+("0"+endoflastmonth.getDate()).slice(-2)+"9999";
    	
    	//console.log(startlastmonth+" "+endlastmonth);
   // console.log(start+"   "+end);	
    	start = startoffirstweek.getFullYear()+""+("0"+(startoffirstweek.getMonth()+1)).slice(-2)+("0"+startoffirstweek.getDate()).slice(-2)+"0000";
    	end = endofmonth.getFullYear()+("0"+(endofmonth.getMonth()+1)).slice(-2)+("0"+endofmonth.getDate()).slice(-2)+"9999";
    
    categories = groupProxy.getGroups();
    
    	//console.log(groups);
    var dateSystem = {};
   
    
    
    var container = {};	
  
  

	var sales ;
	var tempThing = {};
		var halfwaypoint = "000000000";
		var halfwaydate = 0;

		if(datetype=='MTD'){
			start = startoffirstweek.getFullYear()+""+("0"+(startoffirstweek.getMonth()+1)).slice(-2)+("0"+startoffirstweek.getDate()).slice(-2)+"0000";
    		end = endofmonth.getFullYear()+("0"+(endofmonth.getMonth()+1)).slice(-2)+("0"+endofmonth.getDate()).slice(-2)+"9999";
    		sales = [];
    		halfwaypoint= endofmonth.getDate()/2;
    		halfwaypoint = halfwaypoint.toFixed(0);
			halfwaydate = endofmonth.getFullYear()+("0"+(endofmonth.getMonth()+1)).slice(-2)+("0"+halfwaypoint).slice(-2)+"9999";
			//console.log(start,halfwaydate);
			tempThing["br"] = loadProxy.getproductdetails(start,halfwaydate);
			tempThing["dr"] = loadProxy.getproductdetails(halfwaydate,end);
			//console.log(sales);
			var thatone;
			for(var them in tempThing['br']){
				thatone = tempThing['br'][them];
				sales.push(thatone);
			}for(var them in tempThing['dr']){
				thatone = tempThing['dr'][them];
				sales.push(thatone);
			}
		}
		else if(datetype=='Yesterday'){
			//console.log(yesterdayform,todayform);
			sales = loadProxy.getproductdetails(yesterdayform,todayform);
		}
		else if(datetype=='Today'){
			//console.log(todayform,end);
			sales = loadProxy.getproductdetails(todayform,end);
		}
		else if(datetype=='lastweek'){
			//console.log(lastweekform,todayform);
			sales = loadProxy.getproductdetails(lastweekform,todayform);
			//console.log(sales);
		}
		else if (datetype=='Calendar'){
			
			startlastmonth = calendar;
			 endlastmonth = calendar2;
			sales = [];
			halfwaypoint= calendarDate2.getDate()/2;
			//console.log(calendarDate2.getDate())
    		halfwaypoint = halfwaypoint.toFixed(0);
    		halfwaydate = calendarDate2.getFullYear()+("0"+(calendarDate2.getMonth()+1)).slice(-2)+("0"+halfwaypoint).slice(-2)+"9999";
    		//console.log(startlastmonth,halfwaydate);
			tempThing['br'] = loadProxy.getproductdetails(startlastmonth,halfwaydate);
			//console.log(halfwaydate,endlastmonth);
			tempThing['dr'] = loadProxy.getproductdetails(halfwaydate,endlastmonth);
			var thatone;
			
			for(var them in tempThing['br']){
				thatone = tempThing['br'][them];
				sales.push(thatone);
			}for(var them in tempThing['dr']){
				thatone = tempThing['dr'][them];
				sales.push(thatone);
			}
			//console.log(sales);
			
			
		}
				
	




	
	var district = "District Sanat";
	district = "District Sanat";
	var stores = loadProxy.loadDistrict();
	
	
	
	
	
	
	
	
	
	
	container[district]= {};
	container[district].name = district ;
	
	container[district]['stores'] = {};
	
	
	
	//console.log(stores);
		
	for(var store in stores){
		
		container[district]['stores'][stores[store].storeid] = {};
		container[district]['stores'][stores[store].storeid].name = stores[store].storeid;
		
		
		container[district]['stores'][stores[store].storeid]['employees'] = {};
		
		
	}
	//console.log(container);
	//console.log(categories);
	//console.log(sales);
	var stupidInvoiceCount = {};
	for(var sale in sales){
		
		
		//console.log(container[district][thisStore]);
			var thisStore = sales[sale].storename;
			var thisEmployee = sales[sale].username;
			var thisDetail = sales[sale]; 
			//console.log(thisStore);
			
			if(typeof container[district]['stores'][thisStore]['employees'][thisEmployee] == 'undefined'){
				
				
				container[district]['stores'][thisStore]['employees'][thisEmployee] ={};
				container[district]['stores'][thisStore]['employees'][thisEmployee].name =thisEmployee;
				container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'] = {};
				
				container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']['Invoices'] ={};
				container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']['GrossProfit']={};
				
				container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']['Invoices']['QTY'] = 0;
				container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']['GrossProfit']['GP'] = 0;
				
				
			var date;
			for(var cats in categories){
								
						 		container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'][categories[cats].productgroupid] = {};
						 		container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'][categories[cats].productgroupid]['name']= categories[cats].productgroupid;
						 	 	container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'][categories[cats].productgroupid]['GP']= 0;
						 	 	container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'][categories[cats].productgroupid]['QTY']= 0;
					 	 
					 	}
			}
			
			if (typeof stupidInvoiceCount[thisDetail.invoicenumber] == 'undefined' ){
			stupidInvoiceCount[thisDetail.invoicenumber] = 0;
			container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']['Invoices']['QTY'] = container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']['Invoices']['QTY'] +1 ;
			}
			
			
		
		
			//console.log(sales[sale]);
			
								
							//console.log(container.employees[thisDate]);
							
						//console.log(thisDetail);	
								
							
							
							 
							container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']['GrossProfit']['GP'] 
							= container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']['GrossProfit']['GP'] + thisDetail.GROSSPROFIT;  
							
							
								for(var cats in categories){
									
									if(categories[cats].type == "SkuList"){
										for(var items in categories[cats].items){
											if(categories[cats].items[items].productSKU == thisDetail.PRODUCTSKU){
												//console.log(thisDetail.QUANTITY);
												
												
												
												
												
												
												container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'][categories[cats].productgroupid]['GP'] 
												= container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'][categories[cats].productgroupid]['GP'] +thisDetail.GROSSPROFIT;
												container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'][categories[cats].productgroupid]['QTY'] 
												= container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'][categories[cats].productgroupid]['QTY'] + thisDetail.QUANTITY;
												
												
											}
											
										}
								}
								else if(categories[cats].type == "CategoryList"){
										for(var items in categories[cats].items){
											if(thisDetail.CATEGORY.includes(categories[cats].items[items].productSKU)){
												//console.log(thisDetail.QUANTITY);
												
												
												
												
												
												
												container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'][categories[cats].productgroupid]['GP'] 
												= container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']						[categories[cats].productgroupid]				['GP'] +thisDetail.GROSSPROFIT;
												container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'][categories[cats].productgroupid]['QTY'] 
												= container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'][categories[cats].productgroupid]['QTY'] + thisDetail.QUANTITY;
												
												
											}
											
										}
								}
					
		}
	}
	
	//console.log(container);
	
			
			return container;
			
			}

		