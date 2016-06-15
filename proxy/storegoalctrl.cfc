<cfcomponent>
<cfscript>
			remote any function setprofitgoal(location, count){
				try { 
					
			   
			    var storeQuery = entityLoad( "store", location , true );
			    storeQuery.setprofitgoal(count);
			     EntitySave(storeQuery); 
			    ormflush(); 
			    //writeDump(item); 
			   // var locationCode = location;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function setnewgoal(location, count){
				try { 
					
			   
			    var storeQuery = entityLoad( "store", location , true );
			    storeQuery.setnewgoal(count);
			     EntitySave(storeQuery); 
			    ormflush(); 
			    //writeDump(item); 
			   // var locationCode = location;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function setstrategicgoal(location, count){
				try { 
					
			   
			    var storeQuery = entityLoad( "store", location , true );
			    storeQuery.setstrategicgoal(count);
			     EntitySave(storeQuery); 
			    ormflush(); 
			    //writeDump(item); 
			   // var locationCode = location;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function setxlplangoal(location, count){
				try { 
					
			   
			    var storeQuery = entityLoad( "store", location , true );
			    storeQuery.setxlplangoal(count);
			     EntitySave(storeQuery); 
			    ormflush(); 
			    //writeDump(item); 
			   // var locationCode = location;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function setinsurancegoal(location, count){
				try { 
					
			   
			    var storeQuery = entityLoad( "store", location , true );
			    storeQuery.setinsurancegoal(count);
			     EntitySave(storeQuery); 
			    ormflush(); 
			    //writeDump(item); 
			   // var locationCode = location;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function setaccessoryperboxgoal(location, count){
				try { 
					
			   
			    var storeQuery = entityLoad( "store", location , true );
			    storeQuery.setaccessoryperboxgoal(count);
			     EntitySave(storeQuery); 
			    ormflush(); 
			    //writeDump(item); 
			   // var locationCode = location;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function setprofitperboxgoal(location, count){
				try { 
					
			   
			    var storeQuery = entityLoad( "store", location , true );
			    storeQuery.setprofitperboxgoal(count);
			     EntitySave(storeQuery); 
			    ormflush(); 
			    //writeDump(item); 
			   // var locationCode = location;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	


</cfscript>


</cfcomponent>