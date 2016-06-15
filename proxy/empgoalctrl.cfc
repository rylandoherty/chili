<cfcomponent>
<cfscript>
			remote any function setprofitgoal(employee, count){
				try { 
					
			   
			    var empQuery = entityLoad( "user", employee , true );
			    empQuery.setprofitgoal(count);
			     EntitySave(empQuery); 
			    ormflush(); 
			    //writeDump(item); 
			   // var locationCode = location;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function setnewgoal(employee, count){
				try { 
					
			   
			    var empQuery = entityLoad( "user", employee , true );
			    empQuery.setnewgoal(count);
			     EntitySave(empQuery); 
			    ormflush(); 
			    //writeDump(item); 
			   // var locationCode = location;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function setstrategicgoal(employee, count){
				try { 
					
			   
			    var empQuery = entityLoad( "user", employee , true );
			    empQuery.setstrategicgoal(count);
			     EntitySave(empQuery); 
			    ormflush(); 
			    //writeDump(item); 
			   // var locationCode = location;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function setxlplangoal(employee, count){
				try { 
					
			   
			    var empQuery = entityLoad( "user", employee , true );
			    empQuery.setxlplangoal(count);
			     EntitySave(empQuery); 
			    ormflush(); 
			    //writeDump(item); 
			   // var locationCode = location;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function setinsurancegoal(employee, count){
				try { 
					
			   
			   var empQuery = entityLoad( "user", employee , true );
			    empQuery.setinsurancegoal(count);
			     EntitySave(empQuery); 
			    ormflush(); 
			    //writeDump(item); 
			   // var locationCode = location;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function setaccessoryperboxgoal(employee, count){
				try { 
					
			   
			   var empQuery = entityLoad( "user", employee , true );
			    empQuery.setaccessoryperboxgoal(count);
			     EntitySave(empQuery); 
			    ormflush(); 
			    //writeDump(item); 
			   // var locationCode = location;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function sethours(employee, count){
				try { 
					
			   
			    var empQuery = entityLoad( "user", employee , true );
			    empQuery.sethours(count);
			     EntitySave(empQuery); 
			    ormflush(); 
			    //writeDump(item); 
			   // var locationCode = location;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	


</cfscript>


</cfcomponent>