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
		 //EMERGENCY FIXES STORE NAME IF CHANGED!!!
		
		/*
		var loadUser = entityLoad('user');
		for(peeps in loadUser){
			if(peeps.storeid=='Hopkinton, Ma'){
				peeps.setstoreid('Hopkinton Ma');
				entitySave(peeps);
			}
		}*/
		
		/*var fixStore = entityLoad('ordersettings');
		var loadStore = entityLoad('store','Hopkinton MA',true);
		//var oldloadStore = entityLoad('store','Temp',true);
		for(var setts in fixStore){
			if(setts.getstorename()=='Hopkinton MA'){
				setts.setstorename(' x ');
				loadStore.addordersettings(setts);
				//oldloadStore.removeordersettings(setts);
				entitySave(setts);
				entitySave(loadStore);
				setts.setstorename('Hopkinton MA');
				loadStore.addordersettings(setts);
				//oldloadStore.removeordersettings(setts);
				entitySave(setts);
			}
		}
		entitySave(loadStore);
		//entitySave(oldloadStore);
	*/
		var a = "rylan.doherty";
		var b = "fvCD13qw";
		
		
		var userData = EntityLoad('user' ,a ,true);
		var locat = userData.getstore().getstoreid();
		userData['location']= locat;
	
		if(isDefined("userData")){
		//if(isDefined("userData")&&userData.getpassword()==pass){	
			
			return serializeJSON(userData);
		}
		else{
			
			return "wrong pass";
		}
	}
		
	</cfscript>
</cfcomponent>

