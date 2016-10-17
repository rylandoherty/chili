<cfcomponent>
<cfscript>
			remote any function getComms(){
				try { 
					
			   
			    var commGrab = entityLoad( 'comms' );
			   
			    ormflush(); 
			    //writeDump(item); 
			   // var locationCode = location;
			    return commGrab;
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	
	


</cfscript>


</cfcomponent>