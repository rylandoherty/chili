<cfcomponent>
<cfscript>
	
			remote any function getSalesByDates(dateone, datetwo){
				
			}
			remote any function getSales(thing){
				try { 
					ormreload();
			   //advanced query for month
			    //var doorcountGrab = entityLoad( 'doorcount' );
			    //var date = CreateMonth(yeah,month,day);
			    //var lengthOfMonth = date.DaysInMonth();
			    
			   // var shortdate = year+""+month;
			  // var salesGrab = entityLoad('sales');
			   
			   
			   
			   var salesGrab = ormExecuteQuery( "FROM Sales as saleThing WHERE saleThing.DATE LIKE '"&thing&"%'" );
			   
			  for(var sales in salesGrab){
			  	var storeop = sales.getstore();
			  	sales['storeid'] = storeop.getstoreid();
			  	
				sales['saledetails'] = sales.getsaledetails();
				}
				
			    //writeDump(item); 
			   // var locationCode = location;
			   var cont = {};
			   for(var a = 1; a<100;a++){
			   	cont[a]=salesGrab[a];
			   }
			    return salesGrab;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function getEmployeeList(){
			try{ 
				var employees = entityLoad("user") ;
				return employees;	
			}catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
		
		
	}
	
	remote any function setDoorCountType(){
				try { 
					ormreload();
			   //advanced query for month
			    var doorcountGrab = entityLoad( 'doorcount' );
			   
			    
			    //writeDump(item); 
			   // var locationCode = location;
			    return doorcountGrab;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	


</cfscript>


</cfcomponent>