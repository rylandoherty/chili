



var convertCSVintoString = function(group, target){
 		
 		
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

var getSalesContainer = function(datetype ,dateone ,datetwo){
	
	//getsaleinvoices
	//Load stuff settings;
	//Load real Stuff;

	
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth()+1;
	var yesterday = new Date(today.getFullYear(),today.getMonth()+1, today.getDate()-1,0,0,1);
	var lastweek = new Date(today.getFullYear(),today.getMonth()+1, today.getDate()-7,0,0,1);
	var lastweekform = lastweek.getFullYear()+""+("0"+(lastweek.getMonth())).slice(-2)+("0"+lastweek.getDate()).slice(-2)+"0001";
	var todayform = today.getFullYear()+""+("0"+(today.getMonth()+1)).slice(-2)+("0"+today.getDate()).slice(-2)+"0001";
	var yesterdayform = yesterday.getFullYear()+""+("0"+(yesterday.getMonth())).slice(-2)+("0"+yesterday.getDate()).slice(-2)+"0001";
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
    	
    	console.log(startlastmonth+" "+endlastmonth);
   // console.log(start+"   "+end);	
    	
    	
    groups = groupProxy.loadFormula();
    categories = groupProxy.getGroups();
    
    	//console.log(groups);
    var dateSystem = {};
   
    
    
    var container = {};	
    container['userstore']={};
  

var sales;
if(datetype=="calendar"){
 
		start = dateone.getFullYear()+""+("0"+(dateone.getMonth()+1)).slice(-2)+("0"+dateone.getDate()).slice(-2)+"0000";
		end = datetwo.getFullYear()+("0"+(datetwo.getMonth()+1)).slice(-2)+("0"+datetwo.getDate()).slice(-2)+"9999";
	console.log(start);
	console.log(end);
	sales = loadProxy.getsaleinvoices(start,end);
}

else{
		if(datetype=='MTD'){
			sales = loadProxy.getsaleinvoices(start,end);
		}
		else if(datetype=='Yesterday'){
			sales = loadProxy.getsaleinvoices(yesterdayform,todayform);
		}
		else if(datetype=='Today'){
			sales = loadProxy.getsaleinvoices(todayform,end);
		}
		else if(datetype=='lastweek')	{
			sales = loadProxy.getsaleinvoices(lastweekform,todayform);
		}
		else if (datetype=='LastMonth'){
			sales = loadProxy.getsaleinvoices(startlastmonth,endlastmonth);		
		}
				
	}




	
	var district = "District Sanat";
	district = "District Sanat";
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
				 	 container[district]['stores'][stores[store].storeid].sales[categories[cats].productgroupid]['GP']= 0;
				 	 container[district]['stores'][stores[store].storeid].sales[categories[cats].productgroupid]['QTY']= 0;
				 	 
				}
		
	}
	//console.log(container);
	//console.log(categories);
	//console.log(sales);
	
	for(var sale in sales){
		
		
		//console.log(container[district][thisStore]);
			var thisStore = sales[sale].storeid;
			var thisEmployee = sales[sale].user;
			//console.log(thisStore);
			
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
			/*for(var formula in groups){
				var passString = "container['"+district+"']['"+thisStore+"']['"+thisEmployee+"']['sales']['formulagroup']";
				console.log(convertCSVintoString(formula,passString));
				console.log([groups[formula].name]);
				container[district][thisStore][thisEmployee]['sales']['formulagroup'][groups[formula].name];
				console.log(container[district][thisStore][thisEmployee]['sales']['formulagroup'][groups[formula].name]);
				container[district][thisStore][thisEmployee]['sales']['formulagroup'][groups[formula].name] = eval(convertCSVintoString(formula,passString)) ;
			}*/
			//console.log(sales[sale]);
			
			container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']['Invoices']['QTY'] = container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']['Invoices']['QTY'] +1 ;
			container[district]['stores'][thisStore]['sales']['Invoices']['QTY'] = container[district]['stores'][thisStore]['sales']['Invoices']['QTY'] +1 ;
			container[district]['sales']['Invoices']['QTY'] = container[district]['sales']['Invoices']['QTY'] +1 ;
			container['userstore'][thisEmployee]['sales']['Invoices']['QTY'] = container['userstore'][thisEmployee]['sales']['Invoices']['QTY'] +1 ;
		for(var details in sales[sale].saledetails){
		
			//console.log(sales[sale]);
			
								var thisDetail = sales[sale].saledetails[details]; 
							//console.log(container.employees[thisDate]);
							
						//console.log(thisDetail);	
								container['userstore'][thisEmployee]['sales']['GrossProfit']['GP'] = 
							container['userstore'][thisEmployee]['sales']['GrossProfit']['GP'] + thisDetail.GROSSPROFIT;
							
							container[district]['sales']['GrossProfit']['GP'] = 
							container[district]['sales']['GrossProfit']['GP'] + thisDetail.GROSSPROFIT;
							
							container[district]['stores'][thisStore]['sales']['GrossProfit']['GP'] =
							 container[district]['stores'][thisStore]['sales']['GrossProfit']['GP'] + thisDetail.GROSSPROFIT;
							 
							container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']['GrossProfit']['GP'] 
							= container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']['GrossProfit']['GP'] + thisDetail.GROSSPROFIT;  
							
							
								for(var cats in categories){
									
									if(categories[cats].type == "SkuList"){
										for(var items in categories[cats].items){
											if(categories[cats].items[items].productSKU == thisDetail.PRODUCTSKU){
												//console.log(thisDetail.QUANTITY);
												
												container['userstore'][thisEmployee]['sales'][categories[cats].productgroupid]['GP'] 
												= container['userstore'][thisEmployee]['sales'][categories[cats].productgroupid]['GP'] +thisDetail.GROSSPROFIT;
												container['userstore'][thisEmployee]['sales'][categories[cats].productgroupid]['QTY'] 
												= container['userstore'][thisEmployee]['sales'][categories[cats].productgroupid]['QTY'] + thisDetail.QUANTITY;
												
												
												container[district]['sales'][categories[cats].productgroupid]['GP'] 
												= container[district]['sales'][categories[cats].productgroupid]['GP'] +thisDetail.GROSSPROFIT;
												container[district]['sales'][categories[cats].productgroupid]['QTY'] 
												= container[district]['sales'][categories[cats].productgroupid]['QTY'] + thisDetail.QUANTITY;
												
												container[district]['stores'][thisStore]['sales'][categories[cats].productgroupid]['GP'] 
												= container[district]['stores'][thisStore]['sales'][categories[cats].productgroupid]['GP'] +thisDetail.GROSSPROFIT;
												container[district]['stores'][thisStore]['sales'][categories[cats].productgroupid]['QTY'] 
												= container[district]['stores'][thisStore]['sales'][categories[cats].productgroupid]['QTY'] + thisDetail.QUANTITY;
												
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
												container['userstore'][thisEmployee]['sales'][categories[cats].productgroupid]['GP'] 
												= container['userstore'][thisEmployee]['sales'][categories[cats].productgroupid]['GP'] +thisDetail.GROSSPROFIT;
												container['userstore'][thisEmployee]['sales'][categories[cats].productgroupid]['QTY'] 
												= container['userstore'][thisEmployee]['sales'][categories[cats].productgroupid]['QTY'] + thisDetail.QUANTITY;
												
												container[district]['sales'][categories[cats].productgroupid]['GP'] 
												= container[district]['sales'][categories[cats].productgroupid]['GP'] +thisDetail.GROSSPROFIT;
												container[district]['sales'][categories[cats].productgroupid]['QTY'] 
												= container[district]['sales'][categories[cats].productgroupid]['QTY'] + thisDetail.QUANTITY;
												
												container[district]['stores'][thisStore]['sales'][categories[cats].productgroupid]['GP'] 
												= container[district]['stores'][thisStore]['sales'][categories[cats].productgroupid]['GP'] +thisDetail.GROSSPROFIT;
												container[district]['stores'][thisStore]['sales'][categories[cats].productgroupid]['QTY'] 
												= container[district]['stores'][thisStore]['sales'][categories[cats].productgroupid]['QTY'] + thisDetail.QUANTITY;
												
												container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'][categories[cats].productgroupid]['GP'] 
												= container[district]['stores'][thisStore]['employees'][thisEmployee]['sales']						[categories[cats].productgroupid]				['GP'] +thisDetail.GROSSPROFIT;
												container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'][categories[cats].productgroupid]['QTY'] 
												= container[district]['stores'][thisStore]['employees'][thisEmployee]['sales'][categories[cats].productgroupid]['QTY'] + thisDetail.QUANTITY;
												
												
											}
											
										}
								}
					}
		}
	}
	
	//console.log(container);
	for(var formula in groups){
		//console.log(convertCSVintoString(formula,"container["+district+"]" ));
		container[district]['sales']['formulagroup'][groups[formula].name] = eval(convertCSVintoString(formula,"container[district]" ))  ;
				for(stores in container[district]['stores'] ){
					container[district]['stores'][stores]['sales']['formulagroup'][groups[formula].name] = 					eval(convertCSVintoString(formula,"container[district]['stores'][stores]" ))  ;
					for(emp in container[district]['stores'][stores]['employees']){
						container[district]['stores'][stores]['employees'][emp]['sales']['formulagroup'][groups[formula].name] = 						eval(convertCSVintoString(formula,"container[district]['stores'][stores]['employees'][emp]" ))  ;
					
					}
					for(emps in container['userstore']){
						//console.log(emps);
						container['userstore'][emps]['sales']['formulagroup'][groups[formula].name] = 						eval(convertCSVintoString(formula,"container['userstore'][emps]" ))  ;	
					}
				}
				
			}
			
			return container;
			
			}
		