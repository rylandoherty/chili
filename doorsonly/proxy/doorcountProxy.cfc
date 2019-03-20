<cfcomponent>
<cfscript>
			remote any function getDoorCount(shortdate){
				try { 
					ormreload();
			   //advanced query for month
			    //var doorcountGrab = entityLoad( 'doorcount' );
			    //var date = CreateMonth(yeah,month,day);
			    //var lengthOfMonth = date.DaysInMonth();
			    
			   // var shortdate = year+""+month;
			   
			   var doorcountGrab = ormExecuteQuery( "FROM doorclick as dc WHERE dc.time LIKE '"&shortdate&"%'" );
			    //writeDump(item); 
			   // var locationCode = location;
			    return doorcountGrab;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function setDoorCountType(){
				try { 
					ormreload();
			   //advanced query for month
			    var doorcountGrab = entityLoad( 'doorclick' );
			   
			    
			    //writeDump(item); 
			   // var locationCode = location;
			    return doorcountGrab;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	


</cfscript>


</cfcomponent>