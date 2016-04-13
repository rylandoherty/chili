<cfcomponent>
	<cfscript>
			remote void function makeuser(){
				try { 
			    newArtistObj = EntityNew('user'); 
			    newArtistObj.setuserid("Sharad");
			    newArtistObj.setpassword("verizon1234"); 
			   newArtistObj.setRQUSERNAME("SA"); 
			   newArtistObj.setlevel("2");
			    EntitySave(newArtistObj); 
			    ormflush(); 
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function validateAndReturnUser(any user, any pass){
		
		
		
	 
		var a = user;
		var b = pass;
		
		
		var userData = EntityLoad('user' , user ,true);
	
	
		if(isDefined("userData")){
			
			
			return serializeJSON(userData);
		}
		else{
			
			return serializeJSON(0);
		}
	}
		
	</cfscript>
</cfcomponent>

