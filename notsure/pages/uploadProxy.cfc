<cfcomponent>
	
	<cfscript>
		remote any function setUpload(file){
				try { 
					
					
					fileWrite("C:/name.xls", file);
					
					
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	</cfscript>
</cfcomponent>