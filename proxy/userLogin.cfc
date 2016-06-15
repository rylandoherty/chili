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
		// EMERGENCY FIXES STORE NAME IF CHANGED!!!
		/*
		var loadUser = entityLoad('user');
		for(var peeps in loadUser){
			if(peeps.storeid=='E Bridgewater'){
				peeps.setstoreid('E Bridgewater Ma');
				entitySave(peeps);
			}
		}*/
		/*
		var loadStore = entityLoad('store','E Bridgewater MA',true);
		var oldloadStore = entityLoad('store','E Bridgewater',true);
		for(var setts in fixStore){
			if(setts.getstorename()=='E Bridgewater'){
				setts.setstorename('E Bridgewater Ma');
				loadStore.addordersettings(setts);
				oldloadStore.removeordersettings(setts);
				entitySave(setts);
			}
		}
		entitySave(loadStore);
		entitySave(oldloadStore);
	 */
		var a = user;
		var b = pass;
		
		
		var userData = EntityLoad('user' , user ,true);
		var locat = userData.getstore().getstoreid();
		userData['location']= locat;
	
		if(isDefined("userData")&&userData.getpassword()==pass){
			
			
			return serializeJSON(userData);
		}
		else{
			
			return "wrong pass";
		}
	}
		
	</cfscript>
</cfcomponent>

